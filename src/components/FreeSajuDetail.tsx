import { useState, useRef, useEffect, useCallback } from 'react';
import { User } from 'lucide-react';
import svgPaths from '../imports/svg-e15u41g853';
import img from "figma:asset/5615ff21216f93eb47cac8ee15adee136174d7be.png";
import img1 from "figma:asset/b236509a5f2172bc63b883ba8abf132659ed54d9.png";
import img2 from "figma:asset/67f3616aab1dcdea805228bdd4e698e8f57dd487.png";

interface FreeSajuDetailProps {
  recordId: string;
  userName: string;
  productTitle: string;
  productImage: string;
  onClose: () => void;
  recommendedProducts?: Array<{
    id: number;
    title: string;
    type: 'free' | 'paid';
    image: string;
  }>;
  onProductClick?: (productId: number) => void;
  onBannerClick?: () => void;
  onUserIconClick?: () => void;
}

export default function FreeSajuDetail({ 
  recordId, 
  userName, 
  productTitle,
  productImage,
  onClose, 
  recommendedProducts = [],
  onProductClick,
  onBannerClick,
  onUserIconClick
}: FreeSajuDetailProps) {
  const [displayedProducts, setDisplayedProducts] = useState<typeof recommendedProducts>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const observerTarget = useRef<HTMLDivElement>(null);

  // Initial load
  useEffect(() => {
    if (recommendedProducts.length > 0) {
      setDisplayedProducts(recommendedProducts.slice(0, 3));
      setHasMore(recommendedProducts.length > 3);
    }
  }, [recommendedProducts]);

  // Load more products
  const loadMore = useCallback(() => {
    if (isLoading || !hasMore) return;
    
    setIsLoading(true);
    setTimeout(() => {
      const currentLength = displayedProducts.length;
      const nextProducts = recommendedProducts.slice(currentLength, currentLength + 3);
      
      if (nextProducts.length === 0) {
        // Loop back to beginning for infinite scroll
        setDisplayedProducts([...displayedProducts, ...recommendedProducts.slice(0, 3)]);
      } else {
        setDisplayedProducts([...displayedProducts, ...nextProducts]);
      }
      
      setIsLoading(false);
    }, 300);
  }, [displayedProducts, recommendedProducts, hasMore, isLoading]);

  // Infinite scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !isLoading) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );
    
    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }
    
    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [loadMore, isLoading]);

  return (
    <div className="bg-white relative min-h-screen w-full flex justify-center">
      <div className="w-full max-w-[390px] relative">
        {/* Top Bar */}
        <div className="bg-white h-[52px] relative shrink-0 w-full">
          <div className="flex flex-col justify-center size-full">
            <div className="box-border content-stretch flex flex-col gap-[10px] h-[52px] items-start justify-center px-[12px] py-[4px] relative w-full">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <div className="box-border content-stretch flex gap-[10px] items-center justify-center opacity-0 p-[4px] relative rounded-[12px] shrink-0 size-[44px]">
                  <div className="relative shrink-0 size-[24px]"></div>
                </div>
                <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] grow leading-[25.5px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-black text-center text-nowrap tracking-[-0.36px]">상세 풀이</p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={onUserIconClick}
                    className="box-border content-stretch flex gap-[10px] items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px] bg-transparent border-none cursor-pointer"
                  >
                     <User className="text-[#848484] w-[24px] h-[24px]" />
                  </button>
                  <button
                    onClick={onClose}
                    className="box-border content-stretch flex gap-[10px] items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px] bg-transparent border-none cursor-pointer"
                  >
                    <div className="relative shrink-0 size-[24px]">
                      <div className="absolute contents inset-0">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                          <g id="Box">
                            <path d="M4 20L20 4" stroke="#868686" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                            <path d="M20 20L4 4" stroke="#868686" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="px-0 pb-[120px] pt-[12px]">
          <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
            {/* Product Info Card */}
            <div className="bg-[#f7f8f9] relative shrink-0 w-full">
              <div className="size-full">
                <div className="content-stretch flex flex-col items-start px-[20px] py-[12px] relative w-full">
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                    <div className="h-[54px] pointer-events-none relative rounded-[12px] shrink-0 w-[80px]">
                      <div className="absolute inset-0 overflow-hidden rounded-[12px]">
                        <img alt="" className="absolute h-full left-0 max-w-none top-0 w-full object-cover" src={productImage} />
                      </div>
                      <div aria-hidden="true" className="absolute border border-[#f9f9f9] border-solid inset-[-1px] rounded-[13px]" />
                    </div>
                    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative shrink-0">
                      <div className="bg-[#e7e7e7] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0">
                        <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[16px] relative shrink-0 text-[#6d6d6d] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre">무료 체험판</p>
                      </div>
                      <div className="relative shrink-0 w-full">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center px-[2px] py-0 relative w-full">
                            <p className="basis-0 font-['Pretendard_Variable:Medium',sans-serif] grow leading-[23.5px] min-h-px min-w-px relative shrink-0 text-[15px] text-black tracking-[-0.3px]">
                              {productTitle}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Q&A Content */}
            <div className="content-stretch flex flex-col gap-[52px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                {/* Q1 */}
                <div className="relative shrink-0 w-full">
                  <div className="size-full">
                    <div className="content-stretch flex flex-col items-start px-[20px] py-0 relative w-full">
                      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                          <div className="bg-[#f0f8f8] content-stretch flex items-center justify-center px-[6px] py-px relative rounded-[8px] shrink-0">
                            <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#41a09e] text-[13px] text-nowrap whitespace-pre">Q1</p>
                          </div>
                          <div className="relative shrink-0 w-full">
                            <div className="flex flex-row items-center justify-center size-full">
                              <div className="content-stretch flex items-center justify-center px-[2px] py-0 relative w-full">
                                <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
                                  <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[17px] text-black tracking-[-0.34px]">
                                    지금 그의 마음은 여전히 내 곁에 머물고 있을까?
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-full">
                            <div className="flex flex-row items-center justify-center size-full">
                              <div className="content-stretch flex items-center justify-center px-[2px] py-0 relative w-full">
                                <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] grow leading-[28.5px] min-h-px min-w-px relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">
                                  사주 흐름을 보면 기본적으로 인연의 끌림은 유지되고 있습니다. 다만 월운(月運)의 기운이 변하는 시기라, 마음이 흔들리거나 외부에 시선이 갈 가능성이 있습니다. 그러나 이는 일시적인 기류일 뿐, 본질적인 마음은 여전히 당신 곁에 머무르는 모습이 강하게 보입니다.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#f3f3f3] h-px shrink-0 w-full mx-[20px]" />

                {/* Q2 */}
                <div className="relative shrink-0 w-full">
                  <div className="size-full">
                    <div className="content-stretch flex flex-col items-start px-[20px] py-0 relative w-full">
                      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                          <div className="bg-[#f0f8f8] content-stretch flex items-center justify-center px-[6px] py-px relative rounded-[8px] shrink-0">
                            <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#41a09e] text-[13px] text-nowrap whitespace-pre">Q2</p>
                          </div>
                          <div className="relative shrink-0 w-full">
                            <div className="flex flex-row items-center justify-center size-full">
                              <div className="content-stretch flex items-center justify-center px-[2px] py-0 relative w-full">
                                <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
                                  <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[17px] text-black tracking-[-0.34px]">
                                    혹시 다른 사람에게 마음이 기울고 있는 건 아닐까?
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-full">
                            <div className="flex flex-row items-center justify-center size-full">
                              <div className="content-stretch flex items-center justify-center px-[2px] py-0 relative w-full">
                                <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] grow leading-[28.5px] min-h-px min-w-px relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">
                                  상대방의 사주 속 정인(正印)과 관성(官星) 흐름을 보면, 기본적으로 안정과 책임감을 중시하는 기운이 있습니다. 다른 사람에게 쉽게 빠지는 성향은 강하지 않지만, 작은 유혹이나 새로운 자극에는 흔들릴 수 있는 약한 틈이 있습니다. 신뢰를 유지하고 대화를 이어가는 것이 중요합니다.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#f3f3f3] h-px shrink-0 w-full mx-[20px]" />

                {/* Q3 */}
                <div className="relative shrink-0 w-full">
                  <div className="size-full">
                    <div className="content-stretch flex flex-col items-start px-[20px] py-0 relative w-full">
                      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                          <div className="bg-[#f0f8f8] content-stretch flex items-center justify-center px-[6px] py-px relative rounded-[8px] shrink-0">
                            <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#41a09e] text-[13px] text-nowrap whitespace-pre">Q3</p>
                          </div>
                          <div className="relative shrink-0 w-full">
                            <div className="flex flex-row items-center justify-center size-full">
                              <div className="content-stretch flex items-center justify-center px-[2px] py-0 relative w-full">
                                <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
                                  <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[17px] text-black tracking-[-0.34px]">
                                    앞으로 우리의 관계는 안정적으로 이어질까, 흔들리게 될까?
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                          <div className="relative shrink-0 w-full">
                            <div className="flex flex-row items-center justify-center size-full">
                              <div className="content-stretch flex items-center justify-center px-[2px] py-0 relative w-full">
                                <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] grow leading-[28.5px] min-h-px min-w-px relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">
                                  세운(歲運)의 기운은 전반적으로 평온한 흐름을 보입니다. 다만 작은 사건이나 오해가 생기면 균열로 번질 수 있으니, 지금은 서로의 마음을 자주 확인하고 안정감을 주는 것이 필요합니다. 올바른 신뢰를 쌓는다면 장기적으로는 안정된 인연으로 이어질 가능성이 큽니다.
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

              {/* Promotion Banner */}
              <div className="bg-[#f8f8f9] relative shrink-0 w-full">
                <div className="size-full">
                  <div className="content-stretch flex flex-col items-start p-[20px] relative w-full">
                    <button
                      onClick={onBannerClick}
                      className="bg-white relative rounded-[16px] shadow-[6px_7px_12px_0px_rgba(0,0,0,0.04),-3px_-3px_12px_0px_rgba(0,0,0,0.04)] shrink-0 w-full border-none cursor-pointer p-0"
                    >
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center px-[20px] py-[12px] relative w-full">
                          <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
                            <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                              <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[23.5px] relative shrink-0 text-[#151515] text-[15px] tracking-[-0.3px] w-full text-left">월급쟁이에서 벗어나, 대박의 길로</p>
                              <p className="font-['Pretendard_Variable:Regular',sans-serif] leading-[19px] relative shrink-0 text-[#848484] text-[13px] tracking-[-0.26px] w-full text-left">퇴사 후 대박 터질 타이밍 알려드립니다.</p>
                            </div>
                            <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                              <div className="h-[60px] relative shrink-0 w-[78px]">
                                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                  <img alt="" className="absolute h-full left-0 max-w-none top-0 w-full object-cover" src={img1} />
                                </div>
                              </div>
                              <div className="relative shrink-0 size-[16px]">
                                <div className="absolute contents inset-0">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                    <g id="arrow-right">
                                      <path d={svgPaths.p1c2f080} stroke="#151515" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
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

              {/* Recommended Products */}
              <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full">
                <div className="relative shrink-0 w-full">
                  <div className="flex flex-col items-center size-full">
                    <div className="content-stretch flex flex-col gap-[12px] items-center px-[20px] py-0 relative w-full">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                        <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0">
                          <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[17px] text-black tracking-[-0.34px]">이런 운세는 어때요?</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white relative shrink-0 w-full">
                  <div className="size-full">
                    <div className="content-stretch flex flex-col gap-[4px] items-start px-[20px] py-0 relative w-full">
                      {displayedProducts.map((product, index) => {
                        const isLongTitle = product.title.length > 50;
                        return (
                          <div key={`${product.id}-${index}`}>
                            {index > 0 && (
                              <div className="h-0 relative shrink-0 w-full">
                                <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
                                    <path d="M0 0.5H350" stroke="#F9F9F9" />
                                  </svg>
                                </div>
                              </div>
                            )}
                            <div
                              onClick={() => onProductClick?.(product.id)}
                              className={`content-stretch flex flex-col ${isLongTitle ? 'h-[105px]' : 'h-[78px]'} items-center justify-center px-0 py-[12px] relative rounded-[16px] shrink-0 w-full cursor-pointer`}
                            >
                              <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                                <div className="h-[54px] pointer-events-none relative rounded-[12px] shrink-0 w-[80px]">
                                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[12px] size-full" src={product.image} />
                                  <div aria-hidden="true" className="absolute border border-[#f9f9f9] border-solid inset-[-1px] rounded-[13px]" />
                                </div>
                                <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative shrink-0">
                                  <div className="relative shrink-0 w-full">
                                    <div className="flex flex-row items-center justify-center size-full">
                                      <div className="content-stretch flex items-center justify-center px-[2px] py-0 relative w-full">
                                        <p className={`${isLongTitle ? '-webkit-box h-[47px] overflow-ellipsis overflow-hidden' : ''} basis-0 font-['Pretendard_Variable:Medium',sans-serif] grow leading-[23.5px] min-h-px min-w-px relative shrink-0 text-[15px] text-black tracking-[-0.3px]`}>
                                          {product.title}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className={`${product.type === 'paid' ? 'bg-[#f0f8f8]' : 'bg-[#f9f9f9]'} content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0`}>
                                    <p className={`font-['Pretendard_Variable:Medium',sans-serif] leading-[16px] relative shrink-0 ${product.type === 'paid' ? 'text-[#41a09e]' : 'text-[#848484]'} text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre`}>
                                      {product.type === 'paid' ? '심화 해석판' : '무료 체험판'}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      
                      {/* Infinite scroll trigger */}
                      <div ref={observerTarget} className="h-[50px] flex items-center justify-center w-full">
                        {isLoading && (
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#41a09e]"></div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="fixed bottom-0 left-1/2 translate-x-[-50%] w-full max-w-[390px]">
          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
            <div className="bg-white h-[28px] relative shrink-0 w-full">
              <div className="absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
