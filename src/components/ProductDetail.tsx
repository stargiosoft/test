import { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowLeft, Home } from 'lucide-react';
import svgPaths from "../imports/svg-pln046rtst";
import svgPathsDetail from "../imports/svg-zywzkrbnkq";
import svgPathsPreview from "../imports/svg-ypwr9ix07y";
import characterImg from "figma:asset/8fa8728d101fdaeafac6ed27251e023f3fa01e87.png";
import imgGeminiGeneratedImageEj66M7Ej66M7Ej661 from "figma:asset/035bc3188c3deb79df2dfa8e61c9de80e6c7f992.png";
import tarotCardImg from "figma:asset/2ced5a86877d398cd3930c1ef08e032cadaa48d4.png";
import { ImageWithFallback } from './figma/ImageWithFallback';

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

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onPurchase: (productId: number) => void;
}

type TabType = 'description' | 'principle' | 'preview';

function Notch() {
  return (
    <div className="absolute h-[30px] left-[103px] top-[-2px] w-[183px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 183 30">
        <g id="Notch">
          <path d={svgPaths.pf91bfc0} fill="var(--fill-0, black)" />
        </g>
      </svg>
    </div>
  );
}

function RightSide() {
  return (
    <div className="absolute h-[11.336px] right-[14.67px] top-[17.33px] w-[66.662px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 12">
        <g id="Right Side">
          <g id="Battery">
            <path d={svgPaths.p3c576cf0} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, black)" />
            <path d={svgPaths.p1667d738} fill="var(--fill-0, black)" id="Combined Shape" opacity="0.4" />
            <path d={svgPaths.p18fdac00} fill="var(--fill-0, black)" />
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
    <div className="absolute h-[21px] left-[21px] top-[12px] w-[54px]">
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
    <div className="bg-white h-[28px] relative shrink-0 w-full">
      <div className="absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" />
    </div>
  );
}

export default function ProductDetail({ product, onBack, onPurchase }: ProductDetailProps) {
  const [activeTab, setActiveTab] = useState<TabType>('description');
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isUsageGuideExpanded, setIsUsageGuideExpanded] = useState(false);
  const [isRefundPolicyExpanded, setIsRefundPolicyExpanded] = useState(false);

  const isPaid = product.type === 'paid';

  return (
    <div className="bg-white relative min-h-screen w-full flex justify-center">
      <div className="w-full max-w-[390px] relative">
        {/* Top Navigation */}
        <div className="fixed content-stretch flex flex-col items-start left-1/2 -translate-x-1/2 top-0 w-full max-w-[390px] z-10 bg-white">
          
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="bg-white h-[52px] relative shrink-0 w-full">
              <div className="flex flex-col justify-center size-full">
                <div className="box-border content-stretch flex flex-col gap-[10px] h-[52px] items-start justify-center px-[12px] py-[4px] relative w-full">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                    <div 
                      onClick={onBack}
                      className="box-border content-stretch flex gap-[10px] items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px] cursor-pointer"
                    >
                      <ArrowLeft className="w-6 h-6 text-[#848484]" />
                    </div>
                    <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] grow leading-[25.5px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-black text-center text-nowrap tracking-[-0.36px]">
                      {product.title}
                    </p>
                    <div 
                      onClick={onBack}
                      className="box-border content-stretch flex gap-[10px] items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px] cursor-pointer"
                    >
                      <Home className="w-6 h-6 text-[#848484]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Tab Bar */}
            <div className="bg-white relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[#f3f3f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
              <div className="size-full">
                <div className="box-border content-stretch flex flex-col items-start px-[16px] py-[8px] relative w-full">
                  <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full">
                    {/* 상품 설명 탭 */}
                    <div 
                      onClick={() => setActiveTab('description')}
                      className={`basis-0 grow min-h-px min-w-px relative rounded-[12px] shrink-0 cursor-pointer ${activeTab === 'description' ? 'bg-[#f8f8f8]' : ''}`}
                    >
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[8px] relative w-full">
                          <p className={`${activeTab === 'description' ? "font-['Pretendard_Variable:SemiBold',sans-serif] text-[#151515]" : "font-['Pretendard_Variable:Medium',sans-serif] text-[#999999]"} leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap tracking-[-0.45px] whitespace-pre`}>상품 설명</p>
                        </div>
                      </div>
                    </div>
                    {/* 풀이 원리 탭 */}
                    <div 
                      onClick={() => setActiveTab('principle')}
                      className={`basis-0 grow min-h-px min-w-px relative rounded-[12px] shrink-0 cursor-pointer ${activeTab === 'principle' ? 'bg-[#f8f8f8]' : ''}`}
                    >
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[8px] relative w-full">
                          <p className={`${activeTab === 'principle' ? "font-['Pretendard_Variable:SemiBold',sans-serif] text-[#151515]" : "font-['Pretendard_Variable:Medium',sans-serif] text-[#999999]"} leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap tracking-[-0.45px] whitespace-pre`}>풀이 원리</p>
                        </div>
                      </div>
                    </div>
                    {/* 맛보기 탭 */}
                    <div 
                      onClick={() => setActiveTab('preview')}
                      className={`basis-0 grow min-h-px min-w-px relative rounded-[12px] shrink-0 cursor-pointer ${activeTab === 'preview' ? 'bg-[#f8f8f8]' : ''}`}
                    >
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[8px] relative w-full">
                          <p className={`${activeTab === 'preview' ? "font-['Pretendard_Variable:SemiBold',sans-serif] text-[#151515]" : "font-['Pretendard_Variable:Medium',sans-serif] text-[#999999]"} leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap tracking-[-0.45px] whitespace-pre`}>맛보기</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="pt-[151px] pb-[120px]">
          {activeTab === 'description' && (
            <>
              {/* Product Image & Price */}
              <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                <div className="aspect-[391/270] relative shrink-0 w-full">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={product.image} />
                </div>
                <div className="relative shrink-0 w-full">
                  <div className="flex flex-col items-end size-full">
                    <div className="box-border content-stretch flex flex-col gap-[16px] items-end px-[20px] py-0 relative w-full">
                      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                          <div className="bg-[#f0f8f8] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative rounded-[8px] shrink-0">
                            <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#41a09e] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre">
                              {isPaid ? '심화 해석판' : '무료 체험판'}
                            </p>
                          </div>
                          <div className="relative shrink-0 w-full">
                            <div className="size-full">
                              <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[2px] py-0 relative w-full">
                                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                                  <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.36px] w-full">{product.title}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full">
                          <div className="size-full">
                            <div className="box-border content-stretch flex flex-col items-start px-[2px] py-0 relative w-full">
                              {isPaid && (
                                <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Pretendard_Variable:Regular',sans-serif] leading-[22px] line-through min-w-full not-italic relative shrink-0 text-[#999999] text-[14px] tracking-[-0.42px] w-[min-content]">
                                  {product.price.toLocaleString()}원
                                </p>
                              )}
                              <div className="content-stretch flex flex-col items-start relative shrink-0">
                                <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
                                  <div className="content-stretch flex font-['Pretendard_Variable:Bold',sans-serif] gap-[4px] items-center leading-[32.5px] not-italic relative shrink-0 text-[22px] text-nowrap tracking-[-0.22px] whitespace-pre">
                                    {isPaid && <p className="relative shrink-0 text-[#ff6678]">{product.discountPercent}%</p>}
                                    <p className="relative shrink-0 text-[#151515]">{product.discountPrice.toLocaleString()}원</p>
                                  </div>
                                </div>
                                <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                                  <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[32.5px] not-italic relative shrink-0 text-[#48b2af] text-[22px] text-nowrap tracking-[-0.22px] whitespace-pre">0원</p>
                                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                                    <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#48b2af] text-[13px] text-nowrap whitespace-pre">첫 구매 혜택가</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 첫 구매 쿠폰 버튼 */}
                      <button 
                        onClick={() => onPurchase(product.id)}
                        className="bg-[#f0f8f8] relative rounded-[12px] shrink-0 w-full border-none cursor-pointer p-0"
                      >
                        <div aria-hidden="true" className="absolute border border-[#7ed4d2] border-solid inset-0 pointer-events-none rounded-[12px]" />
                        <div className="flex flex-col items-center justify-center size-full">
                          <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[16px] py-[12px] relative w-full">
                            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
                              <div className="basis-0 content-stretch flex gap-[8px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
                                <div className="overflow-clip relative shrink-0 size-[20px]">
                                  <div className="absolute inset-[8.18%_1.79%_8.18%_1.78%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 17">
                                      <g id="Group">
                                        <path clipRule="evenodd" d={svgPathsDetail.p364966f0} fill="var(--fill-0, #48B2AF)" fillRule="evenodd" />
                                        <path clipRule="evenodd" d={svgPathsDetail.p978f000} fill="var(--fill-0, white)" fillRule="evenodd" />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                                  <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[0px] text-[14px] text-black text-nowrap tracking-[-0.42px] whitespace-pre">
                                    첫 구매 쿠폰 받고<span className="text-[#48b2af]"> </span>
                                    <span className="font-['Pretendard_Variable:Bold',sans-serif] text-[#48b2af]">0원으로</span>
                                    <span>{` 풀이 보기`}</span>
                                  </p>
                                  <div className="relative shrink-0 size-[12px]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                                      <g id="arrow-right">
                                        <path d={svgPathsDetail.p3117bd00} stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#f9f9f9] h-[12px] w-full my-[52px]" />

              {/* Description Section */}
              <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[20px] py-0 relative shrink-0 w-full mb-[28px]">
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                  <div className="relative shrink-0 w-full">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[2px] py-0 relative w-full">
                        <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
                          <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[17px] text-black tracking-[-0.34px]">운세 설명</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="relative shrink-0 w-full">
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[2px] py-0 relative w-full">
                          <div className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] grow leading-[28.5px] min-h-px min-w-px not-italic relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">
                            <p className="mb-0">
                              달콤했던 시작과 달리, 요즘은 마음이 흔들리지 않나요?
                              <br aria-hidden="true" />
                              사소한 말에도 불안해지고, 혹시 놓쳐버릴까 두려운 지금.
                            </p>
                            <p className="mb-0">&nbsp;</p>
                            <p className="mb-0">겉으로는 보이지 않는 사랑의 방향을 막연한 해석이 아닌,</p>
                            <p className="mb-0">그 사람의 본질부터 관계의 결말까지 예측하는 소름돋는</p>
                            <p>정확성을 경험하세요.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                    className="bg-white box-border content-stretch flex gap-[10px] h-[48px] items-center justify-center px-[12px] py-0 relative rounded-[12px] shrink-0 w-full border border-[#e7e7e7]"
                  >
                    <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-neutral-600 text-nowrap tracking-[-0.45px]">
                      {isDescriptionExpanded ? '접기' : '자세히 보기'}
                    </p>
                    {isDescriptionExpanded ? <ChevronUp className="w-4 h-4 text-[#525252]" /> : <ChevronDown className="w-4 h-4 text-[#525252]" />}
                  </button>
                </div>
              </div>

              {/* Core Features Section - 핵심만 콕 집어드려요 (펼친 상태일 때만 표시) */}
              {isDescriptionExpanded && (
                <>
                  <div className="bg-[#f7f8f9] box-border content-stretch flex flex-col gap-[10px] items-start pb-[32px] pt-[28px] px-[20px] relative shrink-0 w-full mb-[52px]">
                    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                        <div className="basis-0 content-stretch flex gap-[10px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
                          <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[17px] text-black tracking-[-0.34px]">핵심만 콕 집어드려요</p>
                        </div>
                      </div>
                      
                      <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                        <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[12px] shrink-0">
                          <div className="flex flex-col items-center size-full">
                            <div className="box-border content-stretch flex flex-col gap-[12px] items-center px-[12px] py-[16px] relative size-full">
                              <div className="relative shrink-0 size-[24px]">
                                <div className="absolute inset-[10.44%_7.14%]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 19">
                                    <path d={svgPathsDetail.p3d4a2500} fill="#8BE1DF" />
                                    <path d={svgPathsDetail.p32b65700} fill="#48B2AF" />
                                  </svg>
                                </div>
                              </div>
                              <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[19px] min-w-full not-italic relative shrink-0 text-[#151515] text-[13px] text-center tracking-[-0.26px] w-[min-content]">현재 관계</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[12px] shrink-0">
                          <div className="flex flex-col items-center size-full">
                            <div className="box-border content-stretch flex flex-col gap-[12px] items-center px-[12px] py-[16px] relative size-full">
                              <div className="relative shrink-0 size-[24px]">
                                <div className="absolute inset-[15.23%_1.22%_25.82%_1.19%]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 15">
                                    <path d={svgPathsDetail.p8bd0d80} fill="#48B2AF" />
                                  </svg>
                                </div>
                                <div className="absolute inset-[62.68%_1.17%_4.3%_1.11%]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 8">
                                    <path d={svgPathsDetail.p27b97600} fill="#8BE1DF" />
                                  </svg>
                                </div>
                              </div>
                              <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[19px] min-w-full not-italic relative shrink-0 text-[#151515] text-[13px] text-center tracking-[-0.26px] w-[min-content]">인연의 깊이</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[12px] shrink-0">
                          <div className="flex flex-col items-center size-full">
                            <div className="box-border content-stretch flex flex-col gap-[12px] items-center px-[12px] py-[16px] relative size-full">
                              <div className="overflow-clip relative shrink-0 size-[24px]">
                                <div className="absolute inset-[68.77%_22.2%_1.08%_20.47%]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 8">
                                    <path d={svgPathsDetail.p6949280} fill="#557170" />
                                  </svg>
                                </div>
                                <div className="absolute inset-[1.35%_10.15%_15.33%_6.54%]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                                    <path d={svgPathsDetail.p4f1db80} fill="#3FB5B3" />
                                  </svg>
                                </div>
                                <div className="absolute inset-[1.35%_11.82%_18.45%_8.41%]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                                    <path d={svgPathsDetail.pbc87d00} fill="#8BE1DF" />
                                  </svg>
                                </div>
                              </div>
                              <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[19px] min-w-full not-italic relative shrink-0 text-[#151515] text-[13px] text-center tracking-[-0.26px] w-[min-content]">미래 방향</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Worry Card Section - 작은 고민도 바로 풀어드립니다 */}
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full px-[20px] mb-[52px]">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                      <div className="basis-0 content-stretch flex gap-[10px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
                        <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[17px] text-black tracking-[-0.34px]">작은 고민도 바로 풀어드립니다</p>
                      </div>
                    </div>

                    <div className="bg-[#f9f9f9] relative rounded-[16px] shrink-0 w-full">
                      <div className="flex flex-col items-center justify-center size-full">
                        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[20px] relative w-full">
                          <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full">
                            <div className="basis-0 box-border content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px pb-[8px] pt-0 px-0 relative shrink-0">
                              <div className="content-stretch flex flex-col gap-[10px] items-start relative rounded-[12px] shrink-0 w-full">
                                <div className="bg-white relative rounded-[12px] shrink-0 w-full">
                                  <div className="flex flex-row items-center justify-center size-full">
                                    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[10px] relative w-full">
                                      <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] grow leading-[23.5px] min-h-px min-w-px not-italic relative shrink-0 text-[#151515] text-[15px] tracking-[-0.3px]">그 사람과 끝까지 함께할 수 있을까요?</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="relative shrink-0 w-full">
                                <div className="size-full">
                                  <div className="box-border content-stretch flex flex-col gap-[10px] items-start pl-[12px] pr-0 py-0 relative w-full">
                                    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
                                      <div className="flex flex-row items-center justify-center size-full">
                                        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[10px] relative w-full">
                                          <p className="basis-0 font-['Pretendard_Variable:Medium',sans-serif] grow leading-[23.5px] min-h-px min-w-px not-italic relative shrink-0 text-[#41a09e] text-[15px] tracking-[-0.3px]">타로와 사주로 명쾌하게 풀어 줄게요!</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="h-[65px] relative shrink-0 w-[50px]">
                              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <img alt="" className="absolute h-[123.53%] left-[-13.78%] max-w-none top-[-11.76%] w-[125.64%]" src={characterImg} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Fortune Composition List - 운세 구성 */}
                  <div className="bg-white box-border content-stretch flex flex-col gap-[12px] items-start px-[20px] py-0 relative shrink-0 w-full mb-[52px]">
                    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                        <div className="basis-0 content-stretch flex gap-[10px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
                          <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[17px] text-black tracking-[-0.34px]">운세 구성</p>
                        </div>
                      </div>

                      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                        {[
                          '내 사랑, 오래 지속될 인연일까?',
                          '이 감정, 스쳐가는 바람일까 진짜일까?',
                          '우리 관계, 지금이 전환점일까?',
                          '그 사람의 마음, 진심일까 순간일까?',
                          '잠시 스치는 인연일까, 평생의 동반자일까?',
                          '사랑이 흔들리는 순간, 끝일까 새로운 시작일까?',
                          '내가 붙잡아야 할 사랑일까, 놓아야 할 인연일까?',
                          '우리의 사랑, 위기일까 기회일까?'
                        ].map((item, idx) => (
                          <div key={idx}>
                            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                                <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                                  <ul className="[white-space-collapse:collapse] block font-['Pretendard_Variable:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[#999999] text-[16px] text-nowrap tracking-[-0.32px]">
                                    <li className="ms-[24px]">
                                      <span className="leading-[28.5px] text-[16px]">&nbsp;</span>
                                    </li>
                                  </ul>
                                  <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
                                    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full">
                                      <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] grow leading-[28.5px] min-h-px min-w-px not-italic relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">{item}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {idx < 7 && (
                              <div className="h-0 relative shrink-0 w-full my-[12px]">
                                <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
                                    <path d="M0 0.5H350" stroke="#F3F3F3" />
                                  </svg>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#f9f9f9] h-[12px] w-full mb-[52px]" />
                </>
              )}

              {!isDescriptionExpanded && <div className="bg-[#f9f9f9] h-[12px] w-full mb-[52px]" />}

              {/* Usage Guide & Refund Policy */}
              <div className="content-stretch flex flex-col gap-[12px] items-start px-[20px] relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                    <div className="basis-0 content-stretch flex gap-[10px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
                      <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[17px] text-black tracking-[-0.34px]">이용안내 & 환불 규정</p>
                    </div>
                  </div>
                </div>

                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                  {/* 이용 안내 */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative rounded-[12px] shrink-0 w-full">
                    <button
                      onClick={() => setIsUsageGuideExpanded(!isUsageGuideExpanded)}
                      className="box-border content-stretch flex gap-[12px] items-center px-0 py-[12px] relative rounded-[12px] shrink-0 w-full border-none bg-transparent cursor-pointer"
                    >
                      <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] grow leading-[28.5px] min-h-px min-w-px not-italic relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px] text-left">이용 안내</p>
                      {isUsageGuideExpanded ? <ChevronUp className="w-4 h-4 text-[#B7B7B7]" /> : <ChevronDown className="w-4 h-4 text-[#B7B7B7]" />}
                    </button>
                    {isUsageGuideExpanded && (
                      <div className="bg-[#f7f8f9] relative rounded-[12px] shrink-0 w-full">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[20px] relative w-full">
                            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                                <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[23.5px] relative shrink-0 text-[#151515] text-[15px] tracking-[-0.3px] w-full">서비스 이용 전 확인해주세요</p>
                              </div>
                              <div className="content-stretch flex flex-col font-['Pretendard_Variable:Regular',sans-serif] gap-[12px] items-start leading-[0] relative shrink-0 text-[15px] text-neutral-600 tracking-[-0.3px] w-full">
                                <ul className="block relative shrink-0 w-full">
                                  <li className="ms-[22.5px]">
                                    <span className="leading-[23.5px]">
                                      저희의 AI는 방대한 데이터를 기반으로 매번 당신에게 가장 적합한 해석을 생성합니다. 이 과정에서 동일한 사주 정보로 분석하더라도, AI의 딥러닝 특성상 표현이나 문장이 미세하게 달라질 수 있습니다.
                                    </span>
                                  </li>
                                </ul>
                                <ul className="block relative shrink-0 w-full">
                                  <li className="ms-[22.5px]">
                                    <span className="leading-[23.5px]">다만, 당신의 핵심적인 기질과 운명의 큰 흐름은 어떤 경우에도 일관되게 분석되니 안심하셔도 좋습니다. 세부적인 표현의 차이는 당신의 운명을 더욱 다각적으로 이해하는 과정으로 여겨주시기 바랍니다.</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 환불 정책 */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative rounded-[12px] shrink-0 w-full">
                    <button
                      onClick={() => setIsRefundPolicyExpanded(!isRefundPolicyExpanded)}
                      className="box-border content-stretch flex gap-[12px] items-center px-0 py-[12px] relative rounded-[12px] shrink-0 w-full border-none bg-transparent cursor-pointer"
                    >
                      <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] grow leading-[28.5px] min-h-px min-w-px not-italic relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px] text-left">환불 정책</p>
                      {isRefundPolicyExpanded ? <ChevronUp className="w-4 h-4 text-[#B7B7B7]" /> : <ChevronDown className="w-4 h-4 text-[#B7B7B7]" />}
                    </button>
                    {isRefundPolicyExpanded && (
                      <div className="bg-[#f7f8f9] relative rounded-[12px] shrink-0 w-full">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[20px] relative w-full">
                            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                                <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[23.5px] relative shrink-0 text-[#151515] text-[15px] tracking-[-0.3px] w-full">환불 정책 안내</p>
                              </div>
                              <div className="content-stretch flex flex-col font-['Pretendard_Variable:Regular',sans-serif] gap-[12px] items-start leading-[0] relative shrink-0 text-[15px] text-neutral-600 tracking-[-0.3px] w-full">
                                <ul className="block relative shrink-0 w-full">
                                  <li className="ms-[22.5px]">
                                    <span className="leading-[23.5px]">본 서비스에서 제공하는 모든 운세 풀이는 구매 즉시 열람 및 이용이 가능한 디지털 콘텐츠입니다.</span>
                                  </li>
                                </ul>
                                <ul className="block relative shrink-0 w-full">
                                  <li className="ms-[22.5px]">
                                    <span className="leading-[23.5px]">따라서 「전자상거래 등에서의 소비자보호에 관한 법률」 제17조 제2항에 따라 청약 철회(환불)가 제한되는 점 양해 부탁드립니다. 신중한 구매 결정을 부탁드립니다.</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'principle' && (
            <div className="content-stretch flex flex-col gap-[52px] items-start w-full">
              {/* 우리 운세는 왜 다를까요 */}
              <div className="relative shrink-0 w-full">
                <div className="flex flex-col items-center justify-center size-full">
                  <div className="box-border content-stretch flex flex-col gap-[24px] items-center justify-center pb-[24px] pt-[80px] px-[20px] relative w-full">
                    <div className="content-stretch flex flex-col gap-[4px] h-[298px] items-start justify-center relative shrink-0 w-[310px]">
                      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full">
                          <div className="h-[144px] relative shrink-0 w-[138px]">
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                              <img alt="" className="absolute h-[125.71%] left-[-1.09%] max-w-none top-[-17.49%] w-[102.17%]" src={imgGeminiGeneratedImageEj66M7Ej66M7Ej661} />
                            </div>
                          </div>
                          <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[18px] text-black text-center tracking-[-0.36px] w-[min-content]">우리 운세는 왜 다를까요?</p>
                        </div>
                        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[28.5px] not-italic relative shrink-0 text-[#41a09e] text-[16px] text-center text-nowrap tracking-[-0.32px] whitespace-pre">시중의 수많은 운세, 왜 조금씩 다를까 궁금하셨죠?</p>
                          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                              <div className="font-['Pretendard_Variable:Medium',sans-serif] leading-[28.5px] not-italic relative shrink-0 text-[#151515] text-[16px] text-center tracking-[-0.32px] w-full">
                                <p className="mb-0">{`저희는 '평균적인' 해석이 아닌 당신만을 위한`}</p>
                                <p>가장 정확한 답을 찾아드립니다.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#f9f9f9] h-[12px] shrink-0 w-full" />

              {/* 믿을 수 있는 이유 3가지 */}
              <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full px-[20px]">
                <div className="relative shrink-0 w-full">
                  <div className="flex flex-col items-center size-full">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                      <div className="basis-0 content-stretch flex gap-[10px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
                        <p className="basis-0 font-['Pretendard_Variable:Bold',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[18px] text-black tracking-[-0.36px]">믿을 수 있는 이유 3가지</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                  {/* 01 정통 명리 해석 */}
                  <div className="relative shrink-0 w-full">
                    <div className="size-full">
                      <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full">
                        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                          <div className="bg-[#f0f8f8] box-border content-stretch flex gap-[10px] items-center justify-center px-[6px] py-px relative rounded-[8px] shrink-0">
                            <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#41a09e] text-[13px] text-nowrap whitespace-pre">01</p>
                          </div>
                          <div className="relative shrink-0 w-full">
                            <div className="flex flex-row items-center justify-center size-full">
                              <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[2px] py-0 relative w-full">
                                <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
                                  <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#151515] text-[17px] tracking-[-0.34px]">정통 명리 해석</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-full">
                            <div className="flex flex-row items-center justify-center size-full">
                              <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[2px] py-0 relative w-full">
                                <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] grow leading-[28.5px] min-h-px min-w-px not-italic relative shrink-0 text-[#151515] text-[0px] text-[16px] tracking-[-0.32px]">
                                  <span>{`명리학은 태어난 순간의 '팔자(八字)'를 수(數)와 오행(五行)으로 해석하는 학문입니다. 저희는 명리학의 대표적인 3대 고전, 『자평진전』·『적천수』·『궁통보감』에 기반한 정통 추론 방식을 현대 프로그램에 맞게 재해석했습니다. `}</span>
                                  <span className="font-['Pretendard_Variable:SemiBold',sans-serif]">복잡한 계산을 거치지만, 그만큼 깊이 있고 정통성 있는 분석을 제공해드립니다.</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#f3f3f3] h-px shrink-0 w-full" />

                  {/* 02 AI 데이터 분석 */}
                  <div className="relative shrink-0 w-full">
                    <div className="size-full">
                      <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full">
                        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                          <div className="bg-[#f0f8f8] box-border content-stretch flex gap-[10px] items-center justify-center px-[6px] py-px relative rounded-[8px] shrink-0">
                            <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#41a09e] text-[13px] text-nowrap whitespace-pre">02</p>
                          </div>
                          <div className="relative shrink-0 w-full">
                            <div className="flex flex-row items-center justify-center size-full">
                              <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[2px] py-0 relative w-full">
                                <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
                                  <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#151515] text-[17px] tracking-[-0.34px]">AI 데이터 분석</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-full">
                            <div className="flex flex-row items-center justify-center size-full">
                              <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[2px] py-0 relative w-full">
                                <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] grow leading-[28.5px] min-h-px min-w-px not-italic relative shrink-0 text-[#151515] text-[0px] text-[16px] tracking-[-0.32px]">
                                  <span>
                                    사주의 핵심은 바로 용신(用神) 해석입니다.
                                    <br aria-hidden="true" />
                                    {`저희는 억부, 전왕, 통관, 병약, 조후 등 다양한 용신법을 명리학자의 검증을 거친 자체 개발 AI로 분석합니다. `}
                                  </span>
                                  <span className="font-['Pretendard_Variable:SemiBold',sans-serif]">사람마다 달라질 수 있는 주관적 해석 대신, 가장 객관적이고 균형 잡힌 답을 제시합니다.</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#f3f3f3] h-px shrink-0 w-full" />

                  {/* 03 10만+ 사례 검증 */}
                  <div className="relative shrink-0 w-full">
                    <div className="size-full">
                      <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full">
                        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                          <div className="bg-[#f0f8f8] box-border content-stretch flex gap-[10px] items-center justify-center px-[6px] py-px relative rounded-[8px] shrink-0">
                            <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#41a09e] text-[13px] text-nowrap whitespace-pre">03</p>
                          </div>
                          <div className="relative shrink-0 w-full">
                            <div className="flex flex-row items-center justify-center size-full">
                              <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[2px] py-0 relative w-full">
                                <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
                                  <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#151515] text-[17px] tracking-[-0.34px]">10만+ 사례 검증</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-full">
                            <div className="flex flex-row items-center justify-center size-full">
                              <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[2px] py-0 relative w-full">
                                <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] grow leading-[28.5px] min-h-px min-w-px not-italic relative shrink-0 text-[#151515] text-[0px] text-[16px] tracking-[-0.32px]">
                                  <span>{`세종대왕부터 현대의 유명 인물까지, 전 세계 인물들의 사주를 분석해왔습니다. 25년 상담 노하우와 10만 건 이상의 실제 사례를 바탕으로, 전문가는 물론 AI와 함께 완성도를 높였습니다. `}</span>
                                  <span className="font-['Pretendard_Variable:SemiBold',sans-serif]">단순한 이론이 아니라, 실제 검증된 데이터를 기반으로 신뢰할 수 있는 해석을 제공합니다.</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'preview' && (
            <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full">
              {/* Header */}
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <div className="relative shrink-0 w-full">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="box-border content-stretch flex gap-[10px] items-center justify-center pb-[20px] pt-[32px] px-[20px] relative w-full">
                      <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] grow leading-[25.5px] min-h-px min-w-px not-italic relative shrink-0 text-[17px] text-black text-center tracking-[-0.34px]">아래는 일부 예시 해석입니다</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f9f9f9] h-[12px] shrink-0 w-full" />
              </div>

              {/* Preview Card 1 */}
              <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full px-[20px]">
                <div className="h-[293px] relative shrink-0 w-full">
                  <div className="absolute content-stretch flex flex-col inset-0 items-start">
                    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                        <div className="basis-0 content-stretch flex gap-[10px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
                          <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] grow leading-[28.5px] min-h-px min-w-px not-italic relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">01. 내 사랑, 오래 지속될 인연일까?</p>
                        </div>
                      </div>
                      <div className="bg-[#f9f9f9] h-[252px] relative rounded-[12px] shrink-0 w-full">
                        <div className="size-full">
                          <div className="box-border content-stretch flex gap-[10px] h-[252px] items-start px-[20px] py-[16px] relative w-full">
                            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                                <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[23.5px] not-italic relative shrink-0 text-[#151515] text-[15px] tracking-[-0.3px] w-full">[맛보기]</p>
                              </div>
                              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                                <p className="font-['Pretendard_Variable:Regular',sans-serif] leading-[23.5px] not-italic relative shrink-0 text-[15px] text-neutral-600 tracking-[-0.3px] w-full">이 만남은 처음부터 비교적 온화하고 안정적인 기운 속에서 시작되었습니다. 일주(日柱)의 기운과 상대방의 사주가 크게 충돌하지 않아, 첫 만남에서부터 서로에게 편안한 기류가 흐르고, 자연스럽게 가까워질 수 있는 끌림이 있었습니다. 당시의 관계는 불필요한 긴장감이나 갈등보다는 부드럽고 평온한 흐름으로 이어졌습니다. 겉으로 드러나는 모습만 보아도 불안정하거나 삐걱거림이 적었</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-[#f9f9f9] bottom-0 box-border content-stretch flex flex-col gap-[12px] items-center justify-center left-0 p-[16px] right-0 rounded-bl-[16px] rounded-br-[16px] top-[80.55%]">
                    <div aria-hidden="true" className="absolute border-[#f3f3f3] border-[1px_0px_0px] border-solid inset-0 pointer-events-none rounded-bl-[16px] rounded-br-[16px] shadow-[0px_-26px_26px_0px_#f9f9f9]" />
                    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
                      <div className="overflow-clip relative shrink-0 size-[16px]">
                        <div className="absolute inset-[8.93%_21.63%_31.82%_25.16%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 10">
                            <path d={svgPathsPreview.p2941ca00} fill="#A0D2D1" />
                          </svg>
                        </div>
                        <div className="absolute inset-[43.81%_9.27%_2.84%_12.81%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 9">
                            <path d={svgPathsPreview.p2ba00e70} fill="#48B2AF" />
                          </svg>
                        </div>
                        <div className="absolute inset-[51.74%_75.84%_10.77%_18.04%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
                            <path d={svgPathsPreview.p14fa7280} fill="#8BD4D2" />
                          </svg>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
                        <div className="box-border content-stretch flex gap-[10px] items-center justify-center pb-0 pt-[3px] px-0 relative shrink-0">
                          <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#41a09e] text-[14px] text-nowrap tracking-[-0.42px]">여기까지만 공개돼요</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full">
                  <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 390 1">
                      <path d="M0 0.5H390" stroke="#F3F3F3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Preview Card 2 */}
              <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full px-[20px]">
                <div className="h-[293px] relative shrink-0 w-full">
                  <div className="absolute content-stretch flex flex-col inset-0 items-start">
                    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                        <div className="basis-0 content-stretch flex gap-[10px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
                          <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] grow leading-[28.5px] min-h-px min-w-px not-italic relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">02. 이 감정, 스쳐가는 바람일까 진짜일까?</p>
                        </div>
                      </div>
                      <div className="bg-[#f9f9f9] h-[252px] relative rounded-[12px] shrink-0 w-full">
                        <div className="size-full">
                          <div className="box-border content-stretch flex gap-[10px] h-[252px] items-start px-[20px] py-[16px] relative w-full">
                            <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                                <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[23.5px] not-italic relative shrink-0 text-[#151515] text-[15px] tracking-[-0.3px] w-full">[맛보기]</p>
                              </div>
                              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                                <p className="font-['Pretendard_Variable:Regular',sans-serif] leading-[23.5px] not-italic relative shrink-0 text-[15px] text-neutral-600 tracking-[-0.3px] w-full">이 만남은 처음부터 비교적 온화하고 안정적인 기운 속에서 시작되었습니다. 일주(日柱)의 기운과 상대방의 사주가 크게 충돌하지 않아, 첫 만남에서부터 서로에게 편안한 기류가 흐르고, 자연스럽게 가까워질 수 있는 끌림이 있었습니다. 당시의 관계는 불필요한 긴장감이나 갈등보다는 부드럽고 평온한 흐름으로 이어졌습니다. 겉으로 드러나는 모습만 보아도 불안정하거나 삐걱거림이 적었</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-[#f9f9f9] bottom-0 box-border content-stretch flex flex-col gap-[12px] items-center justify-center left-0 p-[16px] right-0 rounded-bl-[16px] rounded-br-[16px] top-[80.55%]">
                    <div aria-hidden="true" className="absolute border-[#f3f3f3] border-[1px_0px_0px] border-solid inset-0 pointer-events-none rounded-bl-[16px] rounded-br-[16px] shadow-[0px_-26px_26px_0px_#f9f9f9]" />
                    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
                      <div className="overflow-clip relative shrink-0 size-[16px]">
                        <div className="absolute inset-[8.93%_21.63%_31.82%_25.16%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 10">
                            <path d={svgPathsPreview.p2941ca00} fill="#A0D2D1" />
                          </svg>
                        </div>
                        <div className="absolute inset-[43.81%_9.27%_2.84%_12.81%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 9">
                            <path d={svgPathsPreview.p2ba00e70} fill="#48B2AF" />
                          </svg>
                        </div>
                        <div className="absolute inset-[51.74%_75.84%_10.77%_18.04%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
                            <path d={svgPathsPreview.p14fa7280} fill="#8BD4D2" />
                          </svg>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
                        <div className="box-border content-stretch flex gap-[10px] items-center justify-center pb-0 pt-[3px] px-0 relative shrink-0">
                          <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#41a09e] text-[14px] text-nowrap tracking-[-0.42px]">여기까지만 공개돼요</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full">
                  <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 390 1">
                      <path d="M0 0.5H390" stroke="#F3F3F3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Preview Card 3 - With Tarot Card Image */}
              <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full px-[20px]">
                <div className="h-[441px] relative shrink-0 w-full">
                  <div className="absolute content-stretch flex flex-col inset-0 items-start">
                    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                        <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full">
                          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[28.5px] not-italic relative text-[#151515] text-[16px] tracking-[-0.32px] w-full">03. 우리 관계, 지금이 전환점일까?</p>
                        </div>
                      </div>
                      <div className="bg-[#f9f9f9] h-[400px] relative rounded-[12px] shrink-0 w-full">
                        <div className="size-full">
                          <div className="box-border content-stretch flex gap-[10px] h-[400px] items-start px-[20px] py-[16px] relative w-full">
                            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                                  <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[23.5px] not-italic relative shrink-0 text-[#151515] text-[15px] tracking-[-0.3px] w-full">[맛보기]</p>
                                </div>
                                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                                  <div className="content-stretch flex flex-col gap-[20px] items-center justify-center relative shrink-0 w-full">
                                    <div className="h-[156px] relative rounded-[12px] shadow-[6px_7px_12px_0px_rgba(0,0,0,0.04),-3px_-3px_12px_0px_rgba(0,0,0,0.04)] shrink-0 w-[90px]">
                                      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
                                        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={tarotCardImg} />
                                      </div>
                                    </div>
                                    <p className="font-['Pretendard_Variable:Regular',sans-serif] leading-[23.5px] min-w-full not-italic relative shrink-0 text-[15px] text-neutral-600 tracking-[-0.3px] w-[min-content]">이 카드는 호기심과 탐구심, 그리고 진실을 알고자 하는 열망을 상징합니다. 상대방을 향한 당신의 관심이 깊어지고 있으며, 마음속에 질문이 많아지는 시기일 수 있습니다. 다만, 모든 것을 성급히 판단하기보다 관찰하고 배워가야 할 때입니다. 말과 행동에서 솔직함이 중요하며, 작은 오해를 바로잡는 데 힘쓰면 관계가 훨씬 안정될 수 있습니다.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-[#f9f9f9] box-border content-stretch flex flex-col gap-[12px] h-[57px] items-center justify-center left-0 p-[16px] right-0 rounded-bl-[16px] rounded-br-[16px] top-[calc(50%+192px)] translate-y-[-50%]">
                    <div aria-hidden="true" className="absolute border-[#f3f3f3] border-[1px_0px_0px] border-solid inset-0 pointer-events-none rounded-bl-[16px] rounded-br-[16px] shadow-[0px_-26px_26px_0px_#f9f9f9]" />
                    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
                      <div className="overflow-clip relative shrink-0 size-[16px]">
                        <div className="absolute inset-[8.93%_21.63%_31.82%_25.16%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 10">
                            <path d={svgPathsPreview.p2941ca00} fill="#A0D2D1" />
                          </svg>
                        </div>
                        <div className="absolute inset-[43.81%_9.27%_2.84%_12.81%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 9">
                            <path d={svgPathsPreview.p2ba00e70} fill="#48B2AF" />
                          </svg>
                        </div>
                        <div className="absolute inset-[51.74%_75.84%_10.77%_18.04%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
                            <path d={svgPathsPreview.p14fa7280} fill="#8BD4D2" />
                          </svg>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
                        <div className="box-border content-stretch flex gap-[10px] items-center justify-center pb-0 pt-[3px] px-0 relative shrink-0">
                          <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#41a09e] text-[14px] text-nowrap tracking-[-0.42px]">���기까지만 공개돼요</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-0 relative shrink-0 w-full">
                  <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 390 1">
                      <path d="M0 0.5H390" stroke="#F3F3F3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* List of remaining items */}
              <div className="bg-white box-border content-stretch flex flex-col gap-[12px] items-center justify-center px-[20px] py-0 relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                    {[
                      '04. 그 사람의 마음, 진심일까 순간일까?',
                      '05. 잠시 스치는 인연일까, 평생의 동반자일까?',
                      '06. 사랑이 흔들리는 순간, 끝일까 새로운 시작일까?',
                      '07. 내가 붙잡아야 할 사랑일까, 놓아야 할 인연일까?',
                      '08. 내가 붙잡아야 할 사랑일까, 놓아야 할 인연일까?',
                      '09. 그와 나, 운명처럼 이어질까?',
                      '10. 우리의 사랑, 위기일까 기회일까?'
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                          <div className="overflow-clip relative shrink-0 size-[16px]">
                            <div className="absolute inset-[8.93%_21.63%_31.82%_25.16%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 10">
                                <path d={svgPathsPreview.p2941ca00} fill="#A0D2D1" />
                              </svg>
                            </div>
                            <div className="absolute inset-[43.81%_9.27%_2.84%_12.81%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 9">
                                <path d={svgPathsPreview.p2ba00e70} fill="#48B2AF" />
                              </svg>
                            </div>
                            <div className="absolute inset-[51.74%_75.84%_10.77%_18.04%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
                                <path d={svgPathsPreview.p14fa7280} fill="#8BD4D2" />
                              </svg>
                            </div>
                          </div>
                          <div className="basis-0 box-border content-stretch flex gap-[10px] grow items-center min-h-px min-w-px pb-0 pt-[3px] px-0 relative shrink-0">
                            <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] grow leading-[28.5px] min-h-px min-w-px not-italic relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">{item}</p>
                          </div>
                        </div>
                        {index < 6 && (
                          <div className="h-0 relative shrink-0 w-full my-[12px]">
                            <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
                                <path d="M0 0.5H350" stroke="#F3F3F3" />
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-[#f9f9f9] h-[12px] shrink-0 w-full" />

              {/* Bottom CTA */}
              <div className="px-[20px] w-full">
                <div className="bg-[#f0f8f8] box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border border-[#7ed4d2] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                    <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[23.5px] not-italic relative shrink-0 text-[#41a09e] text-[15px] text-center tracking-[-0.3px] w-full">더 깊은 풀이는 구매 후 확인할 수 있습니다</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Button */}
        <div className="fixed bottom-0 box-border content-stretch flex flex-col items-start left-1/2 shadow-[0px_-8px_16px_0px_rgba(255,255,255,0.76)] translate-x-[-50%] w-full max-w-[390px] z-10">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="bg-white relative shrink-0 w-full">
              <div className="flex flex-col items-center justify-center size-full">
                <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[20px] py-[12px] relative w-full">
                  <button 
                    onClick={() => onPurchase(product.id)}
                    className="bg-[#48b2af] h-[56px] relative rounded-[16px] shrink-0 w-full cursor-pointer border-none"
                  >
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="box-border content-stretch flex gap-[10px] h-[56px] items-center justify-center px-[12px] py-0 relative w-full">
                        <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                          <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[25px] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.32px] whitespace-pre">구매하기</p>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <HomeIndicatorLight />
        </div>
      </div>
    </div>
  );
}
