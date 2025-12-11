import svgPaths from "./svg-n1tcnh4ukb";
type ComponentProps = {
  className?: string;
  property1?: "Default" | "체크해제";
};

function Component({ className, property1 = "Default" }: ComponentProps) {
  if (property1 === "체크해제") {
    return <div className={className} data-name="Property 1=체크해제" />;
  }
  return (
    <div className={className} data-name="Property 1=Default">
      <div className="absolute h-[7px] left-[4px] top-[5px] w-[11px]">
        <div className="absolute inset-[-9.47%_-5.54%_-17.62%_-5.65%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 9">
            <path d={svgPaths.p34c84d00} id="Vector 193" stroke="var(--stroke-0, #EFF5FE)" strokeWidth="1.8" />
          </svg>
        </div>
      </div>
    </div>
  );
}
type IconButtonProps = {
  className?: string;
  state?: "Default" | "Press" | "Disabled";
  size?: "sm" | "md" | "lg";
};

function IconButton({ className, state = "Default", size = "sm" }: IconButtonProps) {
  if (state === "Default" && size === "md") {
    return (
      <div className={className} data-name="State=Default, Size=md">
        <div className="relative shrink-0 size-[24px]" data-name="• Icons">
          <div className="absolute contents inset-0" data-name="Box">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="search-normal">
                <path d={svgPaths.p6857980} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <path d="M22 22L20 20" id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <g id="Vector_3" opacity="0"></g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (state === "Default" && size === "lg") {
    return (
      <div className={className} data-name="State=Default, Size=lg">
        <div className="relative shrink-0 size-[32px]" data-name="• Icons">
          <div className="absolute contents inset-0" data-name="Box">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="search-normal">
                <path d={svgPaths.p6857980} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <path d="M22 22L20 20" id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <g id="Vector_3" opacity="0"></g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (state === "Disabled" && size === "md") {
    return (
      <div className={className} data-name="State=Disabled, Size=md">
        <div className="relative shrink-0 size-[24px]" data-name="• Icons">
          <div className="absolute contents inset-0" data-name="Box">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="search-normal">
                <path d={svgPaths.p6857980} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <path d="M22 22L20 20" id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <g id="Vector_3" opacity="0"></g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (state === "Disabled" && size === "lg") {
    return (
      <div className={className} data-name="State=Disabled, Size=lg">
        <div className="relative shrink-0 size-[32px]" data-name="• Icons">
          <div className="absolute contents inset-0" data-name="Box">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="search-normal">
                <path d={svgPaths.p6857980} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <path d="M22 22L20 20" id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <g id="Vector_3" opacity="0"></g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (state === "Disabled" && size === "sm") {
    return (
      <div className={className} data-name="State=Disabled, Size=sm">
        <div className="relative shrink-0 size-[20px]" data-name="• Icons">
          <div className="absolute contents inset-0" data-name="Box">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="search-normal">
                <path d={svgPaths.p6857980} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <path d="M22 22L20 20" id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <g id="Vector_3" opacity="0"></g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (state === "Press" && size === "md") {
    return (
      <div className={className} data-name="State=Press, Size=md">
        <div className="relative shrink-0 size-[24px]" data-name="• Icons">
          <div className="absolute contents inset-0" data-name="Box">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="search-normal">
                <path d={svgPaths.p6857980} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <path d="M22 22L20 20" id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <g id="Vector_3" opacity="0"></g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (state === "Press" && size === "lg") {
    return (
      <div className={className} data-name="State=Press, Size=lg">
        <div className="relative shrink-0 size-[32px]" data-name="• Icons">
          <div className="absolute contents inset-0" data-name="Box">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="search-normal">
                <path d={svgPaths.p6857980} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <path d="M22 22L20 20" id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <g id="Vector_3" opacity="0"></g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (state === "Press" && size === "sm") {
    return (
      <div className={className} data-name="State=Press, Size=sm">
        <div className="relative shrink-0 size-[20px]" data-name="• Icons">
          <div className="absolute contents inset-0" data-name="Box">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="search-normal">
                <path d={svgPaths.p6857980} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <path d="M22 22L20 20" id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <g id="Vector_3" opacity="0"></g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={className} data-name="State=Default, Size=sm">
      <div className="relative shrink-0 size-[20px]" data-name="• Icons">
        <div className="absolute contents inset-0" data-name="Box">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="search-normal">
              <path d={svgPaths.p6857980} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
              <path d="M22 22L20 20" id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
              <g id="Vector_3" opacity="0"></g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component1({ className }: { className?: string }) {
  return (
    <div className={className} data-name="마스터 콘텐츠 리스트_선택">
      <div className="bg-white content-stretch flex flex-col items-start pb-[8px] pt-[4px] px-[12px] relative shrink-0 w-[430px]">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <div className="content-stretch flex items-center relative shrink-0">
            <IconButton className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px]" size="md" />
          </div>
          <p className="[white-space-collapse:collapse] basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] grow leading-[28.7px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#1b1b1b] text-[20px] text-center text-nowrap tracking-[-0.2px]">마스터 콘텐츠 리스트</p>
          <div className="content-stretch flex items-center relative shrink-0">
            <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="• Icon Button">
              <div className="flex items-center justify-center relative shrink-0">
                <div className="flex-none rotate-[180deg]">
                  <div className="relative size-[20px]" data-name="아이콘 메인">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g clipPath="url(#clip0_74_3652)" id="ìì´ì½ ë©ì¸">
                        <g id="Vector" opacity="0.36"></g>
                        <g id="Group 2472">
                          <path d={svgPaths.p367f85c0} id="Vector_2" stroke="var(--stroke-0, #030303)" strokeLinecap="round" strokeWidth="2" />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_74_3652">
                          <rect fill="white" height="20" width="20" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex items-center justify-between overflow-clip px-[20px] py-[15px] relative shrink-0 w-[430px]">
        <div className="h-[40px] relative rounded-[8px] shrink-0 w-[110px]">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex h-[40px] items-center justify-center px-[89px] py-[13px] relative w-[110px]">
              <p className="font-['Pretendard:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">선택해제</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#f0f0f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
        <div className="bg-[#48b2af] h-[40px] relative rounded-[8px] shrink-0 w-[110px]">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex h-[40px] items-center justify-center px-[89px] py-[13px] relative w-[110px]">
              <p className="font-['Pretendard:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">배포하기</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[810px] relative shrink-0 w-full" data-name="Main">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[10px] h-[810px] items-center p-[20px] relative w-full">
            <div className="bg-white h-[20px] overflow-clip relative shrink-0 w-[388px]">
              <Component className="absolute border-2 border-[#626262] border-solid left-0 rounded-[2px] size-[18px] top-px" property1="체크해제" />
              <div className="absolute flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] left-[28px] not-italic text-[16px] text-black text-nowrap top-[9.5px] translate-y-[-50%]">
                <p className="leading-[normal] whitespace-pre">전체선택</p>
              </div>
            </div>
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
              <div className="[grid-area:1_/_1] bg-[#f0f8f8] h-[53px] ml-[28px] mt-0 relative rounded-[12px] w-[360px]" data-name="Background">
                <div className="absolute contents right-[121px] top-[8px]">
                  <div className="absolute content-stretch flex flex-col items-start right-[121px] top-[8px] w-[224px]" data-name="Container">
                    <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[grey] w-full">
                      <p className="leading-[13.75px]">[유료] 2025.09.04 10:18</p>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex flex-col items-start right-[121px] top-[26px] w-[224px]" data-name="Heading 3">
                    <div className="flex flex-col font-['Pretendard_Variable:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[15px] w-full">
                      <p className="leading-[18.75px]">인생 지뢰밭 피해 가는 법</p>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex items-center left-[264px] px-0 py-[8px] top-[5px]">
                  <div className="bg-[#f0f0f0] content-stretch flex items-center justify-center overflow-clip px-[10px] py-[5px] relative rounded-[8px] shrink-0">
                    <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap">
                      <p className="leading-[normal] whitespace-pre">배포전</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="[grid-area:1_/_1] bg-[#48b2af] ml-0 mt-[17px] overflow-clip relative rounded-[2px] size-[18px]" data-name="체크박스">
                <div className="absolute h-[7px] left-[4px] top-[5px] w-[11px]">
                  <div className="absolute inset-[-9.47%_-5.54%_-17.62%_-5.65%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 9">
                      <path d={svgPaths.p34c84d00} id="Vector 193" stroke="var(--stroke-0, #EFF5FE)" strokeWidth="1.8" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
              <div className="[grid-area:1_/_1] bg-[#f0f8f8] h-[53px] ml-[28px] mt-0 relative rounded-[12px] w-[360px]" data-name="Background">
                <div className="absolute contents right-[121px] top-[8px]">
                  <div className="absolute content-stretch flex flex-col items-start right-[121px] top-[8px] w-[224px]" data-name="Container">
                    <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[grey] w-full">
                      <p className="leading-[13.75px]">[유료] 2025.09.04 10:18</p>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex flex-col items-start right-[121px] top-[26px] w-[224px]" data-name="Heading 3">
                    <div className="flex flex-col font-['Pretendard_Variable:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[15px] w-full">
                      <p className="leading-[18.75px]">인생 지뢰밭 피해 가는 법</p>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex items-center left-[264px] px-0 py-[8px] top-[5px]">
                  <div className="bg-[#f0f0f0] content-stretch flex items-center justify-center overflow-clip px-[10px] py-[5px] relative rounded-[8px] shrink-0">
                    <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap">
                      <p className="leading-[normal] whitespace-pre">배포전</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="[grid-area:1_/_1] bg-[#48b2af] ml-0 mt-[17px] overflow-clip relative rounded-[2px] size-[18px]" data-name="체크박스">
                <div className="absolute h-[7px] left-[4px] top-[5px] w-[11px]">
                  <div className="absolute inset-[-9.47%_-5.54%_-17.62%_-5.65%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 9">
                      <path d={svgPaths.p34c84d00} id="Vector 193" stroke="var(--stroke-0, #EFF5FE)" strokeWidth="1.8" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
              <div className="[grid-area:1_/_1] bg-[#f0f8f8] h-[53px] ml-[28px] mt-0 relative rounded-[12px] w-[360px]" data-name="Background">
                <div className="absolute contents right-[121px] top-[8px]">
                  <div className="absolute content-stretch flex flex-col items-start right-[121px] top-[8px] w-[224px]" data-name="Container">
                    <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[grey] w-full">
                      <p className="leading-[13.75px]">[유료] 2025.09.04 10:18</p>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex flex-col items-start right-[121px] top-[26px] w-[224px]" data-name="Heading 3">
                    <div className="flex flex-col font-['Pretendard_Variable:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[15px] w-full">
                      <p className="leading-[18.75px]">인생 지뢰밭 피해 가는 법</p>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex items-center left-[264px] px-0 py-[8px] top-[5px]">
                  <div className="bg-[#f0f0f0] content-stretch flex items-center justify-center overflow-clip px-[10px] py-[5px] relative rounded-[8px] shrink-0">
                    <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap">
                      <p className="leading-[normal] whitespace-pre">배포전</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="[grid-area:1_/_1] bg-[#48b2af] ml-0 mt-[17px] overflow-clip relative rounded-[2px] size-[18px]" data-name="체크박스">
                <div className="absolute h-[7px] left-[4px] top-[5px] w-[11px]">
                  <div className="absolute inset-[-9.47%_-5.54%_-17.62%_-5.65%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 9">
                      <path d={svgPaths.p34c84d00} id="Vector 193" stroke="var(--stroke-0, #EFF5FE)" strokeWidth="1.8" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
              <div className="[grid-area:1_/_1] bg-[#f0f8f8] h-[53px] ml-[28px] mt-0 relative rounded-[12px] w-[360px]" data-name="Background">
                <div className="absolute contents right-[121px] top-[8px]">
                  <div className="absolute content-stretch flex flex-col items-start right-[121px] top-[8px] w-[224px]" data-name="Container">
                    <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[grey] w-full">
                      <p className="leading-[13.75px]">[무료] 2025.09.04 10:18</p>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex flex-col items-start right-[121px] top-[26px] w-[224px]" data-name="Heading 3">
                    <div className="flex flex-col font-['Pretendard_Variable:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[15px] w-full">
                      <p className="leading-[18.75px]">인생 지뢰밭 피해 가는 법</p>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex items-center left-[264px] px-0 py-[8px] top-[5px]">
                  <div className="bg-[#f0f0f0] content-stretch flex items-center justify-center overflow-clip px-[10px] py-[5px] relative rounded-[8px] shrink-0">
                    <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap">
                      <p className="leading-[normal] whitespace-pre">배포전</p>
                    </div>
                  </div>
                </div>
              </div>
              <Component className="[grid-area:1_/_1] border-2 border-[#626262] border-solid ml-0 mt-[17px] rounded-[2px] size-[18px]" property1="체크해제" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Component2() {
  return <Component1 className="bg-white content-stretch flex flex-col items-start relative size-full" />;
}