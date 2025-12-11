import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import svgPaths from "../imports/svg-7gr2rjj953";
import img from "figma:asset/7b851936315a0976f82b567082641209095748c5.png";
import { saveOrder } from '../lib/supabase';
import { supabase } from '../lib/supabase';

// 포트원 타입 선언
declare global {
  interface Window {
    IMP: any;
  }
}

interface Product {
  id: number;
  title: string;
  type: 'free' | 'paid';
  category: string;
  image: string;
  description?: string;
  fullDescription: string;
  price: number;
  discountPrice: number;
  discountPercent: number;
}

interface Coupon {
  id: number;
  name: string;
  discount: number;
}

interface PaymentProps {
  product: Product;
  onBack: () => void;
  onPurchase: () => void;
}

const availableCoupons: Coupon[] = [
  { id: 1, name: '가입축하쿠폰', discount: 12900 },
  { id: 2, name: '재구매 쿠폰', discount: 3000 },
];

function Notch() {
  return (
    <div className="absolute h-[30px] left-[103px] top-[-2px] w-[183px]" data-name="Notch">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 183 30">
        <g id="Notch">
          <path d={svgPaths.pf91bfc0} fill="var(--fill-0, black)" id="Notch_2" />
        </g>
      </svg>
    </div>
  );
}

function RightSide() {
  return (
    <div className="absolute h-[11.336px] right-[14.67px] top-[17.33px] w-[66.662px]" data-name="Right Side">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 12">
        <g id="Right Side">
          <g id="Battery">
            <path d={svgPaths.p3c576cf0} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, black)" />
            <path d={svgPaths.p1667d738} fill="var(--fill-0, black)" id="Combined Shape" opacity="0.4" />
            <path d={svgPaths.p18fdac00} fill="var(--fill-0, black)" id="Rectangle_2" />
          </g>
          <path d={svgPaths.p344d52f0} fill="var(--fill-0, black)" id="Wifi" />
          <path d={svgPaths.p3694c600} fill="var(--fill-0, black)" id="Mobile Signal" />
        </g>
      </svg>
    </div>
  );
}

function Time() {
  return (
    <div className="absolute h-[21px] left-[21px] top-[12px] w-[54px]" data-name="Time">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 21">
        <g id="Time">
          <g id="9:41">
            <path d={svgPaths.p24372f50} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3aa84e00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p2e6b3780} fill="var(--fill-0, black)" />
            <path d={svgPaths.p12b0b900} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function HomeIndicatorLight() {
  return (
    <div className="bg-white h-[28px] relative shrink-0 w-full" data-name="Home Indicator/Light">
      <div className="absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

export default function Payment({ product, onBack, onPurchase }: PaymentProps) {
  const [isCouponSheetOpen, setIsCouponSheetOpen] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState<Coupon | null>(availableCoupons[0]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'kakaopay' | 'card'>('kakaopay');

  const basePrice = product.price;
  const specialDiscount = product.price - product.discountPrice;
  const couponDiscount = selectedCoupon ? selectedCoupon.discount : 0;
  const totalPrice = Math.max(0, product.discountPrice - couponDiscount);

  // 포트원 SDK 로드 및 초기화
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.iamport.kr/v1/iamport.js';
    script.async = true;
    script.onload = () => {
      if (window.IMP) {
        window.IMP.init('imp38022226');
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleCouponSelect = (coupon: Coupon | null) => {
    setSelectedCoupon(coupon);
  };

  const handleApplyCoupon = () => {
    setIsCouponSheetOpen(false);
  };

  const handlePurchaseClick = async () => {
    // 결제금액이 0원이면 바로 사주정보 입력 페이지로 이동
    if (totalPrice === 0) {
      // 0원 결제도 주문 기록 저장
      try {
        const { data: { user } } = await supabase.auth.getUser();
        const merchantUid = `order_${Date.now()}`;
        
        await saveOrder({
          user_id: user?.id,
          amount: 0,
          payment_method: 'free',
          merchant_uid: merchantUid,
          status: 'completed',
          pg_provider: 'coupon'
        });
        
        console.log('0원 주문 저장 완료');
      } catch (error) {
        console.error('0원 주문 저장 실패:', error);
        // 0원이므로 실패해도 진행
      }
      
      onPurchase();
      return;
    }

    if (!window.IMP) {
      alert('결제 모듈을 불러오는 중입니다. 잠시 후 다시 시도해주세요.');
      return;
    }

    // 결제 수단에 따른 PG 설정
    const pgProvider = selectedPaymentMethod === 'kakaopay' 
      ? 'kakaopay.CAAHYG5DKD' 
      : 'danal_tpay.A010076393';

    // 주문 번호 생성
    const merchantUid = `order_${Date.now()}`;

    // 모바일 리다이렉트 URL 설정
    const redirectUrl = `${window.location.origin}/payment/complete`;

    // 결제 요청 파라미터 구성
    const paymentParams: any = {
      pg: pgProvider,
      pay_method: 'card',
      merchant_uid: merchantUid,
      name: product.title,
      amount: totalPrice,
      buyer_name: '구매자명', // TODO: 실제 사용자 정보로 교체
      buyer_tel: '010-0000-0000', // TODO: 실제 사용자 정보로 교체
      m_redirect_url: redirectUrl, // 모바일 결제 완료 후 리다이렉트 URL
      popup: false, // 모바일 리다이렉트 방식 강제
    };

    // 다날 카드결제 시 디지털 상품 설정
    if (selectedPaymentMethod === 'card') {
      paymentParams.digital = true;
    }

    // 포트원 결제 요청
    window.IMP.request_pay(paymentParams, async function(response: any) {
      if (response.success) {
        // 결제 성공 - orders 테이블에 저장
        try {
          const { data: { user } } = await supabase.auth.getUser();
          
          await saveOrder({
            user_id: user?.id,
            amount: totalPrice,
            payment_method: selectedPaymentMethod === 'kakaopay' ? 'kakaopay' : 'card',
            imp_uid: response.imp_uid,
            merchant_uid: response.merchant_uid,
            status: 'completed',
            pg_provider: pgProvider
          });
          
          console.log('결제 성공 및 주문 저장 완료:', response.imp_uid, response.merchant_uid);
          // TODO: 백엔드 검증 API 호출
          
          onPurchase();
        } catch (error) {
          console.error('주문 저장 실패:', error);
          alert('결제는 완료되었으나 주문 저장에 실패했습니다. 고객센터에 문의해주세요.');
        }
      } else {
        // 결제 실패
        alert('결제 실패: ' + response.error_msg);
      }
    });
  };

  return (
    <div className="bg-white relative min-h-screen w-full flex justify-center">
      <div className="w-full max-w-[390px] relative">
        {/* Top Navigation */}
        <div className="fixed content-stretch flex flex-col items-start left-1/2 -translate-x-1/2 top-0 w-full max-w-[390px] z-20 bg-white" data-name="Top Navigation Container">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Navigation / Top Navigation (Widget)">
            <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="Navigation / Top Bar">
              <div className="flex flex-col justify-center size-full">
                <div className="box-border content-stretch flex flex-col gap-[10px] h-[52px] items-start justify-center px-[12px] py-[4px] relative w-full">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Icon">
                    <button
                      onClick={onBack}
                      className="box-border content-stretch flex gap-[10px] items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px] bg-transparent border-none cursor-pointer"
                      data-name="Left Action"
                    >
                      <div className="relative shrink-0 size-[24px]" data-name="Icons">
                        <ArrowLeft className="w-full h-full" stroke="#848484" strokeWidth="1.7" />
                      </div>
                    </button>
                    <p className="[white-space-collapse:collapse] basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] grow leading-[25.5px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-black text-center text-nowrap tracking-[-0.36px]">결제</p>
                    <div className="box-border content-stretch flex gap-[10px] items-center justify-center opacity-0 p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="Right Action">
                      <div className="relative shrink-0 size-[24px]" data-name="Icons" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="pt-[115px] pb-[120px]">
          <div className="content-stretch flex flex-col gap-[32px] items-center w-full">
            {/* Product Section */}
            <div className="content-stretch flex flex-col gap-[16px] items-start w-full px-[20px]">
              <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Text / Section Title">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                  <div className="basis-0 content-stretch flex gap-[10px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Title Container">
                    <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[17px] text-black tracking-[-0.34px]">운세 구성</p>
                  </div>
                  <button
                    onClick={() => setIsCouponSheetOpen(true)}
                    className="bg-white box-border content-stretch flex gap-[10px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[8px] shrink-0 border border-[#e7e7e7] cursor-pointer"
                    data-name="Button / Count Button"
                  >
                    <div className="content-stretch flex font-['Pretendard_Variable:Medium',sans-serif] gap-[8px] items-center leading-[22px] relative shrink-0 text-[13px] text-neutral-600 text-nowrap whitespace-pre" data-name="Container">
                      <p className="relative shrink-0">쿠폰</p>
                      <p className="relative shrink-0">{availableCoupons.length}</p>
                    </div>
                  </button>
                </div>
                <div className="h-0 relative shrink-0 w-full" data-name="Divider">
                  <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
                      <path d="M0 0.5H350" stroke="#F3F3F3" />
                    </svg>
                  </div>
                </div>
              </div>

              {totalPrice === 0 && selectedCoupon && (
                <div className="bg-[#f0f8f8] relative rounded-[12px] shrink-0 w-full" data-name="Feedback / Notification">
                  <div aria-hidden="true" className="absolute border border-[#7ed4d2] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  <div className="flex flex-col items-center justify-center size-full">
                    <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[16px] py-[12px] relative w-full">
                      <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Container">
                        <div className="relative shrink-0 size-[20px]" data-name="Icons">
                          <div className="absolute contents inset-0" data-name="Box">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              <g id="flash">
                                <path d={svgPaths.p12d62f00} fill="#48B2AF" />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
                          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] relative shrink-0 text-[#48b2af] text-[14px] text-nowrap tracking-[-0.42px] whitespace-pre">특별 할인 + 쿠폰 사용으로 이번 결제는 0원이에요</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Card / Deal Card">
                <div className="h-[54px] pointer-events-none relative rounded-[12px] shrink-0 w-[80px]" data-name="Thumbnail">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[12px] size-full" src={product.image} />
                  <div aria-hidden="true" className="absolute border border-[#f9f9f9] border-solid inset-[-1px] rounded-[13px]" />
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-end min-h-px min-w-px relative shrink-0" data-name="Card / PriceBlock">
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
                    <div className="bg-[#f0f8f8] box-border content-stretch flex gap-[10px] items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Label Box">
                      <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[16px] relative shrink-0 text-[#41a09e] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre">심화 해석판</p>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Product Info">
                      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Title Container">
                        <div className="relative shrink-0 w-full" data-name="Title Container">
                          <div className="size-full">
                            <div className="box-border content-stretch flex flex-col items-start px-px py-0 relative w-full">
                              <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[23.5px] relative shrink-0 text-[15px] text-black tracking-[-0.3px] w-full">{product.title}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0 w-full" data-name="Price Info">
                        <div className="size-full">
                          <div className="box-border content-stretch flex flex-col gap-[2px] items-start px-[2px] py-0 relative w-full">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Original Price Container">
                              <div className="box-border content-stretch flex gap-[8px] items-center px-px py-0 relative shrink-0" data-name="Original Price Container">
                                <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Original Price Container">
                                  <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Pretendard_Variable:Regular',sans-serif] leading-[22px] line-through relative shrink-0 text-[#999999] text-[13px] text-nowrap whitespace-pre">{basePrice.toLocaleString()}원</p>
                                </div>
                              </div>
                            </div>
                            {totalPrice === 0 && selectedCoupon ? (
                              <div className="content-stretch flex gap-[2px] items-center relative shrink-0 text-[#48b2af] text-nowrap w-full whitespace-pre" data-name="Coupon Price Container">
                                <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[25px] relative shrink-0 text-[16px] tracking-[-0.32px]">0원</p>
                                <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[16px] relative shrink-0 text-[11px]">특별할인 + 쿠폰 적용가</p>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#f9f9f9] h-[12px] w-full" />

            {/* Payment Amount Section */}
            <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full px-[20px]">
              <div className="relative shrink-0 w-full">
                <div className="size-full">
                  <div className="box-border content-stretch flex flex-col gap-[16px] items-start relative w-full">
                    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                        <div className="basis-0 content-stretch flex gap-[10px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
                          <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[17px] text-black tracking-[-0.34px]">결제 금액</p>
                        </div>
                      </div>
                      <div className="h-0 relative shrink-0 w-full">
                        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
                            <path d="M0 0.5H350" stroke="#F3F3F3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <div className="relative shrink-0 w-full">
                        <div className="flex flex-row items-center size-full">
                          <div className="box-border content-stretch flex items-center justify-between px-[2px] py-0 relative text-nowrap w-full whitespace-pre">
                            <p className="font-['Pretendard_Variable:Regular',sans-serif] leading-[23.5px] relative shrink-0 text-[15px] text-black tracking-[-0.3px]">상품 금액</p>
                            <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[25px] relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">{basePrice.toLocaleString()}원</p>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0 w-full">
                        <div className="flex flex-row items-center size-full">
                          <div className="box-border content-stretch flex items-center justify-between px-[2px] py-0 relative text-nowrap w-full whitespace-pre">
                            <p className="font-['Pretendard_Variable:Regular',sans-serif] leading-[23.5px] relative shrink-0 text-[15px] text-black tracking-[-0.3px]">특별 할인</p>
                            <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[25px] relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">-{specialDiscount.toLocaleString()}원</p>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0 w-full">
                        <div className="flex flex-row items-center size-full">
                          <div className="box-border content-stretch flex items-center justify-between px-[2px] py-0 relative text-nowrap w-full whitespace-pre">
                            <p className="font-['Pretendard_Variable:Regular',sans-serif] leading-[23.5px] relative shrink-0 text-[15px] text-black tracking-[-0.3px]">쿠폰 할인</p>
                            <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[25px] relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">-{couponDiscount.toLocaleString()}원</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#f9f9f9] relative shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <div className="box-border content-stretch flex items-center justify-between px-[20px] py-[24px] relative w-full">
                    <div className="basis-0 content-stretch flex font-['Pretendard_Variable:Bold',sans-serif] grow items-center justify-between leading-[24px] min-h-px min-w-px relative shrink-0 text-nowrap whitespace-pre">
                      <p className="relative shrink-0 text-[17px] text-black tracking-[-0.34px]">총 결제 금액</p>
                      <p className="relative shrink-0 text-[#48b2af] text-[18px] tracking-[-0.36px]">{totalPrice.toLocaleString()}원</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Terms Section */}
            <div className="box-border content-stretch flex flex-col gap-[16px] items-start px-[20px] py-0 relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[24px] relative shrink-0 text-[17px] text-black tracking-[-0.34px]">결제 수단</p>
                </div>
                <div className="h-0 relative shrink-0 w-full">
                  <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
                      <path d="M0 0.5H350" stroke="#F3F3F3" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                {/* Kakaopay Option */}
                <button
                  onClick={() => setSelectedPaymentMethod('kakaopay')}
                  className="content-stretch flex items-center gap-[12px] relative shrink-0 w-full bg-transparent border-none cursor-pointer p-0"
                >
                  <div className="relative shrink-0 size-[36px] flex items-center justify-center bg-[#FEE500] rounded-full">
                    <svg className="w-[20px] h-[20px]" viewBox="0 0 20 20" fill="none">
                      <path d="M10 3C5.58172 3 2 5.68629 2 9C2 10.8348 3.0434 12.4411 4.67188 13.4648L3.91406 16.3086C3.84375 16.5586 4.10547 16.7695 4.32422 16.6289L7.92578 14.3555C8.59766 14.4805 9.28906 14.543 10 14.543C14.4183 14.543 18 11.8567 18 8.54297C18 5.22922 14.4183 3 10 3Z" fill="#3C1E1E"/>
                    </svg>
                  </div>
                  <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[23.5px] flex-1 text-left relative shrink-0 text-[15px] text-black tracking-[-0.3px]">카카오페이</p>
                  <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 size-[36px]">
                    {selectedPaymentMethod === 'kakaopay' ? (
                      <div className="relative rounded-[999px] shrink-0 size-[20px]">
                        <div aria-hidden="true" className="absolute border-[#48b2af] border-[6px] border-solid inset-0 pointer-events-none rounded-[999px]" />
                      </div>
                    ) : (
                      <div className="bg-white relative rounded-[999px] shrink-0 size-[20px]">
                        <div aria-hidden="true" className="absolute border-2 border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[999px]" />
                      </div>
                    )}
                  </div>
                </button>

                {/* Card Option */}
                <button
                  onClick={() => setSelectedPaymentMethod('card')}
                  className="content-stretch flex items-center gap-[12px] relative shrink-0 w-full bg-transparent border-none cursor-pointer p-0"
                >
                  <div className="relative shrink-0 size-[36px] flex items-center justify-center bg-[#F3F3F3] rounded-[8px]">
                    <svg className="w-[20px] h-[20px]" viewBox="0 0 20 20" fill="none">
                      <rect x="2" y="4" width="16" height="12" rx="2" stroke="#848484" strokeWidth="1.5" fill="none"/>
                      <rect x="2" y="7" width="16" height="2" fill="#848484"/>
                    </svg>
                  </div>
                  <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[23.5px] flex-1 text-left relative shrink-0 text-[15px] text-black tracking-[-0.3px]">신용·체크카드</p>
                  <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 size-[36px]">
                    {selectedPaymentMethod === 'card' ? (
                      <div className="relative rounded-[999px] shrink-0 size-[20px]">
                        <div aria-hidden="true" className="absolute border-[#48b2af] border-[6px] border-solid inset-0 pointer-events-none rounded-[999px]" />
                      </div>
                    ) : (
                      <div className="bg-white relative rounded-[999px] shrink-0 size-[20px]">
                        <div aria-hidden="true" className="absolute border-2 border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[999px]" />
                      </div>
                    )}
                  </div>
                </button>
              </div>

              <div className="h-0 relative shrink-0 w-full">
                <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
                    <path d="M0 0.5H350" stroke="#F3F3F3" />
                  </svg>
                </div>
              </div>

              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full mt-[4px]">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <p className="font-['Pretendard_Variable:Regular',sans-serif] leading-[22px] relative shrink-0 text-[14px] text-neutral-600 tracking-[-0.42px] w-full">결제 금액과 안내 사항을 확인했어요</p>
                </div>
                <div className="h-0 relative shrink-0 w-full">
                  <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
                      <path d="M0 0.5H350" stroke="#F3F3F3" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[13px] text-neutral-600 tracking-[-0.26px] w-full">
                    <p className="leading-[19px]">개인정보 수집 이용 동의</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#6d6d6d] text-[13px] tracking-[-0.26px] w-full">
                      <p className="leading-[19px] mb-0">수집 및 이용 목적</p>
                      <ul>
                        <li className="list-disc ms-[19.5px]">
                          <span className="leading-[19px]">개인 맞춤형 운세 콘텐츠 생성 및 제공, 유료 서비스 이용에 따른 계약 이행, AI 콘텐츠 준비 완료 시 알림톡 발송, 고객 문의 응대 및 불만 처리 등 원활한 서비스 이용을 위한 본인 확인</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#6d6d6d] text-[13px] tracking-[-0.26px] w-full">
                      <p className="leading-[19px] mb-0">수집하는 개인정보 항목</p>
                      <ul className="list-disc">
                        <li className="mb-0 ms-[19.5px]">
                          <span className="leading-[19px]">회원 식별 정보: 이름, 이메일, 휴대전화번호</span>
                        </li>
                        <li className="ms-[19.5px]">
                          <span className="leading-[19px]">콘텐츠 생성 정보: 생년월일, 태어난 시, 성별</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Button */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 box-border content-stretch flex flex-col items-start shadow-[0px_-8px_16px_0px_rgba(255,255,255,0.76)] w-full max-w-[390px] z-10" data-name="Common / Bottom Button">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="bg-white relative shrink-0 w-full">
              <div className="flex flex-col items-center justify-center size-full">
                <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[20px] py-[12px] relative w-full">
                  <button 
                    onClick={handlePurchaseClick}
                    className="bg-[#48b2af] h-[56px] relative rounded-[16px] shrink-0 w-full border-none cursor-pointer"
                  >
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="box-border content-stretch flex gap-[10px] h-[56px] items-center justify-center px-[12px] py-0 relative w-full">
                        <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[25px] relative shrink-0 text-[16px] text-white tracking-[-0.32px]">
                          {totalPrice === 0 ? '0원 구매하기' : `${totalPrice.toLocaleString()}원 구매하기`}
                        </p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <HomeIndicatorLight />
        </div>

        {/* Coupon Bottom Sheet */}
        {isCouponSheetOpen && (
          <>
            <div 
              className="fixed inset-0 bg-[rgba(0,0,0,0.5)] z-30"
              onClick={() => setIsCouponSheetOpen(false)}
            />
            <div className="fixed bottom-0 left-1/2 -translate-x-1/2 content-stretch flex flex-col items-start w-full max-w-[390px] z-40">
              <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
                <div className="bg-white relative shrink-0 w-full">
                  <div className="flex flex-col items-center justify-center size-full">
                    <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[10px] py-[12px] relative w-full">
                      <div className="bg-neutral-300 h-[4px] rounded-[999px] shrink-0 w-[48px]" />
                    </div>
                  </div>
                </div>
                <div className="bg-white relative shrink-0 w-full">
                  <div className="flex flex-row items-center size-full">
                    <div className="box-border content-stretch flex gap-[128px] items-center px-[24px] py-[16px] relative w-full">
                      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
                        <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[28px] relative shrink-0 text-[20px] text-black text-nowrap tracking-[-0.2px] whitespace-pre">쿠폰</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
                  <div className="relative shrink-0 w-full">
                    <div className="flex flex-col items-center justify-center size-full">
                      <div className="box-border content-stretch flex flex-col gap-[16px] items-center justify-center px-[20px] py-0 relative w-full">
                        <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
                          <div className="h-[54px] pointer-events-none relative rounded-[12px] shrink-0 w-[80px]">
                            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[12px] size-full" src={product.image} />
                            <div aria-hidden="true" className="absolute border border-[#f9f9f9] border-solid inset-[-1px] rounded-[13px]" />
                          </div>
                          <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-end min-h-px min-w-px relative shrink-0">
                            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                              <div className="bg-[#f0f8f8] box-border content-stretch flex gap-[10px] items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0">
                                <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[16px] relative shrink-0 text-[#41a09e] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre">심화 해석판</p>
                              </div>
                              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                                  <div className="relative shrink-0 w-full">
                                    <div className="size-full">
                                      <div className="box-border content-stretch flex flex-col items-start px-px py-0 relative w-full">
                                        <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[23.5px] relative shrink-0 text-[15px] text-black tracking-[-0.3px] w-full">{product.title}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="h-0 relative shrink-0 w-full">
                          <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
                              <path d="M0 0.5H350" stroke="#F3F3F3" />
                            </svg>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
                          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                              <div className="relative shrink-0 w-full">
                                <div className="flex flex-row items-center size-full">
                                  <div className="box-border content-stretch flex items-center justify-between px-[2px] py-0 relative text-nowrap w-full whitespace-pre">
                                    <p className="font-['Pretendard_Variable:Regular',sans-serif] leading-[23.5px] relative shrink-0 text-[15px] text-black tracking-[-0.3px]">상품 금액</p>
                                    <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[25px] relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">{basePrice.toLocaleString()}원</p>
                                  </div>
                                </div>
                              </div>
                              <div className="relative shrink-0 w-full">
                                <div className="flex flex-row items-center size-full">
                                  <div className="box-border content-stretch flex items-center justify-between px-[2px] py-0 relative text-nowrap w-full whitespace-pre">
                                    <p className="font-['Pretendard_Variable:Regular',sans-serif] leading-[23.5px] relative shrink-0 text-[15px] text-black tracking-[-0.3px]">특별 할인</p>
                                    <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[25px] relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">-{specialDiscount.toLocaleString()}원</p>
                                  </div>
                                </div>
                              </div>
                              <div className="relative shrink-0 w-full">
                                <div className="flex flex-row items-center size-full">
                                  <div className="box-border content-stretch flex items-center justify-between px-[2px] py-0 relative text-nowrap w-full whitespace-pre">
                                    <p className="font-['Pretendard_Variable:Regular',sans-serif] leading-[23.5px] relative shrink-0 text-[15px] text-black tracking-[-0.3px]">쿠폰 할인</p>
                                    <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[25px] relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">-{couponDiscount.toLocaleString()}원</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                            <div className="h-0 relative shrink-0 w-full">
                              <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
                                  <path d="M0 0.5H350" stroke="#F3F3F3" />
                                </svg>
                              </div>
                            </div>
                            <div className="relative shrink-0 w-full">
                              <div className="flex flex-row items-center size-full">
                                <div className="box-border content-stretch flex font-['Pretendard_Variable:Bold',sans-serif] items-center justify-between leading-[24px] px-[2px] py-0 relative text-black text-nowrap w-full whitespace-pre">
                                  <p className="relative shrink-0 text-[17px] tracking-[-0.34px]">총 결제 금액</p>
                                  <p className="relative shrink-0 text-[18px] tracking-[-0.36px]">{totalPrice.toLocaleString()}원</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[#f0f8f8] relative rounded-[12px] shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border border-[#7ed4d2] border-solid inset-0 pointer-events-none rounded-[12px]" />
                          <div className="flex flex-col items-center justify-center size-full">
                            <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[16px] py-[12px] relative w-full">
                              <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
                                <div className="relative shrink-0 size-[20px]">
                                  <div className="absolute contents inset-0">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                                      <g id="tick-circle">
                                        <path d={svgPaths.p1a881f00} fill="#48B2AF" />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                                  <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[22px] relative shrink-0 text-[#48b2af] text-[14px] text-nowrap tracking-[-0.42px] whitespace-pre">자동으로 특별 할인 들어갔어요 </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="box-border content-stretch flex items-start py-0 relative shrink-0 w-full max-h-[300px]">
                    <div className="basis-0 bg-[#f9f9f9] grow min-h-px min-w-px relative shrink-0 overflow-y-auto">
                      <div aria-hidden="true" className="absolute border-[#f3f3f3] border-[1px_0px] border-solid inset-0 pointer-events-none" />
                      <div className="size-full">
                        <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[24px] relative w-full">
                          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                            {availableCoupons.map((coupon, index) => (
                              <div key={coupon.id} className="w-full">
                                <button
                                  onClick={() => handleCouponSelect(coupon)}
                                  className="content-stretch flex items-center justify-between relative shrink-0 w-full bg-transparent border-none cursor-pointer p-0"
                                >
                                  <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start min-h-px min-w-px relative shrink-0">
                                    <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[25px] relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px] w-full text-left">-{coupon.discount.toLocaleString()}원</p>
                                    <p className="font-['Pretendard_Variable:Regular',sans-serif] leading-[22px] relative shrink-0 text-[#848484] text-[13px] w-full text-left">{coupon.name}</p>
                                  </div>
                                  <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 size-[36px]">
                                    {selectedCoupon?.id === coupon.id ? (
                                      <div className="relative rounded-[999px] shrink-0 size-[20px]">
                                        <div aria-hidden="true" className="absolute border-[#48b2af] border-[6px] border-solid inset-0 pointer-events-none rounded-[999px]" />
                                      </div>
                                    ) : (
                                      <div className="bg-white relative rounded-[999px] shrink-0 size-[20px]">
                                        <div aria-hidden="true" className="absolute border-2 border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[999px]" />
                                      </div>
                                    )}
                                  </div>
                                </button>
                                {index < availableCoupons.length - 1 && (
                                  <div className="h-0 relative shrink-0 w-full mt-[12px] mb-[12px]">
                                    <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 342 1">
                                        <path d="M0 0.5H342" stroke="#E7E7E7" />
                                      </svg>
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                            <div className="h-0 relative shrink-0 w-full mt-0">
                              <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 342 1">
                                  <path d="M0 0.5H342" stroke="#E7E7E7" />
                                </svg>
                              </div>
                            </div>
                            <button
                              onClick={() => handleCouponSelect(null)}
                              className="content-stretch flex items-center justify-between relative shrink-0 w-full bg-transparent border-none cursor-pointer p-0 mt-[12px]"
                            >
                              <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[25px] relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px] text-left">적용 안 함</p>
                              <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 size-[36px]">
                                {selectedCoupon === null ? (
                                  <div className="relative rounded-[999px] shrink-0 size-[20px]">
                                    <div aria-hidden="true" className="absolute border-[#48b2af] border-[6px] border-solid inset-0 pointer-events-none rounded-[999px]" />
                                  </div>
                                ) : (
                                  <div className="bg-white relative rounded-[999px] shrink-0 size-[20px]">
                                    <div aria-hidden="true" className="absolute border-2 border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[999px]" />
                                  </div>
                                )}
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-border content-stretch flex flex-col items-start relative shadow-[0px_-8px_16px_0px_rgba(255,255,255,0.76)] shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="bg-white relative shrink-0 w-full">
                    <div className="flex flex-col items-center justify-center size-full">
                      <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[20px] py-[12px] relative w-full">
                        <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
                          <button
                            onClick={() => setIsCouponSheetOpen(false)}
                            className="basis-0 bg-[#f0f8f8] grow h-[56px] min-h-px min-w-px relative rounded-[16px] shrink-0 border-none cursor-pointer"
                          >
                            <div className="flex flex-row items-center justify-center size-full">
                              <div className="box-border content-stretch flex gap-[10px] h-[56px] items-center justify-center px-[12px] py-0 relative w-full">
                                <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[25px] relative shrink-0 text-[#48b2af] text-[16px] text-nowrap tracking-[-0.32px] whitespace-pre">취소</p>
                              </div>
                            </div>
                          </button>
                          <button
                            onClick={handleApplyCoupon}
                            className="basis-0 bg-[#48b2af] grow h-[56px] min-h-px min-w-px relative rounded-[16px] shrink-0 border-none cursor-pointer"
                          >
                            <div className="flex flex-row items-center justify-center size-full">
                              <div className="box-border content-stretch flex gap-[10px] h-[56px] items-center justify-center px-[12px] py-0 relative w-full">
                                <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[25px] relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-pre">쿠폰 적용하기</p>
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <HomeIndicatorLight />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}