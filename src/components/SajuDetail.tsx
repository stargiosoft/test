import { useState } from 'react';
import svgPaths from '../imports/svg-9u6wzlcfzn';

interface SajuDetailProps {
  recordId: string;
  onClose: () => void;
}

export default function SajuDetail({ recordId, onClose }: SajuDetailProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="bg-white relative min-h-screen w-full flex justify-center">
      <div className="w-full max-w-[390px] relative">
      {/* Top Navigation Container */}
      <div className="content-stretch flex flex-col items-start w-full">
        
        {/* Top Bar */}
        <div className="bg-white h-[52px] relative shrink-0 w-full">
          <div className="flex flex-col justify-center size-full">
            <div className="box-border content-stretch flex flex-col gap-[10px] h-[52px] items-start justify-center px-[12px] py-[4px] relative w-full">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <div className="box-border content-stretch flex gap-[10px] items-center justify-center opacity-0 p-[4px] relative rounded-[12px] shrink-0 size-[44px]">
                  <div className="relative shrink-0 size-[24px]"></div>
                </div>
                <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] grow leading-[25.5px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-black text-center text-nowrap tracking-[-0.36px]">상세 풀이</p>
                <button
                  onClick={onClose}
                  className="box-border content-stretch flex gap-[10px] items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px] bg-transparent border-none cursor-pointer"
                >
                  <div className="relative shrink-0 size-[24px]">
                    <div className="absolute contents inset-0">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <g id="Box">
                          <path d="M4 20L20 4" stroke="#848484" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                          <path d="M20 20L4 4" stroke="#848484" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[16px] shrink-0 w-full" />
      </div>

      {/* Content Area */}
      <div className="px-[20px] pb-[120px]">
        <div className="bg-[#f9f9f9] relative rounded-[16px] shrink-0 w-full">
          <div className="flex flex-row justify-center size-full">
            <div className="box-border content-stretch flex items-start justify-center px-[20px] py-[28px] relative w-full">
              <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0">
                {/* Header */}
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                  <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[28px] relative shrink-0 text-[#48b2af] text-[20px] text-center text-nowrap tracking-[-0.2px] whitespace-pre">{currentPage.toString().padStart(2, '0')}</p>
                  <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
                    <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 276 1">
                        <path d="M276 0.5H0" stroke="#E7E7E7" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Title */}
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[24px] relative shrink-0 text-[#151515] text-[18px] tracking-[-0.36px] w-full">바람으로 끝날 인연일까, 진짜 사랑일까?</p>
                </div>
                
                {/* Content */}
                <div className="font-['Pretendard_Variable:Regular',sans-serif] leading-[28.5px] relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px] w-full">
                  <p className="mb-0">이 만남은 처음부터 비교적 온화하고 안정적인 기운 속에서 시작되었습니다. 일주(日柱)의 기운과 상대방의 사주가 크게 충돌하지 않아, 첫 만남에서부터 서로에게 편안한 기류가 흐르고, 자연스럽게 가까워질 수 있는 끌림이 있었습니다.</p>
                  <p className="mb-0">당시의 관계는 불필요한 긴장감이나 갈등보다는 부드럽고 평온한 흐름으로 이어졌습니다. 겉으로 드러나는 모습만 보아도 불안정하거나 삐걱거림이 적었고, 주변 사람들에게도 '잘 어울린다'는 말을 들었을 가능성이 높습니다. 이는 사주 속 기운이 서로 상생하는 방향으로 작용했기 때문입니다.</p>
                  <p>물론 그때의 안정감이 영원히 유지된다는 뜻은 아니지만, 시작 단계에서의 분위기는 분명 긍정적이었고, 두 사람 모두 관계를 이어가고 싶다는 무의식적 의지를 품고 있었음을 보여줍니다. 마치 목(木)의 기운이 막 움트며 뿌리를 내리려는 순간처럼, 작고 여린 에너지 속에서도 미래로 뻗어나갈 가능성을 품고 있던 시기였습니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-1/2 translate-x-[-50%] w-full max-w-[390px]">
        <div className="content-stretch flex flex-col h-[88px] items-end overflow-clip relative w-full">
          <div className="content-stretch flex flex-col items-end relative shrink-0 w-full">
            <div className="bg-white h-[60px] relative shrink-0 w-full">
              <div className="flex flex-col items-end justify-center size-full">
                <div className="box-border content-stretch flex flex-col gap-[10px] h-[60px] items-end justify-center px-[28px] py-[12px] relative w-full">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                    {/* Page Indicator */}
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                      <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[36px]">
                        <div className="overflow-clip relative shrink-0 size-[20px]">
                          <div className="absolute inset-[18.75%_8.33%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 13">
                              <g id="Group">
                                <path d={svgPaths.p14150900} fill="#848484" />
                                <path clipRule="evenodd" d={svgPaths.p5097a80} fill="#848484" fillRule="evenodd" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[23.5px] relative shrink-0 text-[15px] text-nowrap tracking-[-0.3px] whitespace-pre">
                        <span className="font-['Pretendard_Variable:SemiBold',sans-serif] text-[#151515]">{currentPage.toString().padStart(2, '0')}/</span>
                        <span className="font-['Pretendard_Variable:SemiBold',sans-serif]"> </span>
                        <span className="text-[#b7b7b7]">{totalPages.toString().padStart(2, '0')}</span>
                      </p>
                    </div>
                    
                    <div className="basis-0 grow h-full min-h-px min-w-px shrink-0" />
                    
                    {/* Navigation Buttons */}
                    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0">
                      <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className="box-border content-stretch flex flex-col gap-[10px] h-[34px] items-center justify-center px-[8px] py-0 relative rounded-[12px] shrink-0 bg-transparent border-none cursor-pointer disabled:opacity-30"
                      >
                        <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
                          <div className="relative shrink-0 size-[12px]">
                            <div className="absolute contents inset-0">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                                <g id="arrow-left">
                                  <path d={svgPaths.p2679d700} stroke="#B7B7B7" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
                                </g>
                              </svg>
                            </div>
                          </div>
                          <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#b7b7b7] text-[14px] text-nowrap tracking-[-0.42px] whitespace-pre">이전</p>
                        </div>
                      </button>
                      
                      <div className="h-[12px] relative shrink-0 w-0">
                        <div className="absolute inset-[-4.17%_-0.5px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 13">
                            <path d="M0.5 0.5V12.5" stroke="#E7E7E7" strokeLinecap="round" />
                          </svg>
                        </div>
                      </div>
                      
                      <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="box-border content-stretch flex flex-col gap-[10px] h-[34px] items-center justify-center px-[8px] py-0 relative rounded-[12px] shrink-0 bg-transparent border-none cursor-pointer disabled:opacity-30"
                      >
                        <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
                          <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.42px] whitespace-pre">다음</p>
                          <div className="relative shrink-0 size-[12px]">
                            <div className="absolute contents inset-0">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                                <g id="arrow-right">
                                  <path d={svgPaths.p3117bd00} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Home Indicator */}
            <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
              <div className="bg-white h-[28px] relative shrink-0 w-full">
                <div className="absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" />
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#f3f3f3] border-[1px_0px_0px] border-solid inset-0 pointer-events-none shadow-[0px_-8px_16px_0px_rgba(255,255,255,0.76)]" />
      </div>
      </div>
    </div>
  );
}
