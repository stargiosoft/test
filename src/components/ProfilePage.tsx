import React from 'react';
import svgPaths from "../imports/svg-b8sjovrdwf";

interface ProfilePageProps {
  onBack: () => void;
  onLogout: () => void;
  onNavigateToMasterContent?: () => void;
}

// Logo Component
function CommonLogo() {
  return (
    <div className="h-[20px] relative shrink-0 w-[59px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59 20">
        <g id="Common / Logo">
          <path d={svgPaths.p1fb34640} fill="var(--fill-0, #151515)" id="Vector" />
          <path d={svgPaths.p1bbbb200} fill="var(--fill-0, #151515)" id="Vector_2" />
          <path d={svgPaths.p11620600} fill="var(--fill-0, #151515)" id="Vector_3" />
          <path d={svgPaths.p9a70500} fill="var(--fill-0, #151515)" id="Vector_4" />
          <path d={svgPaths.p115ca080} fill="var(--fill-0, #151515)" id="Vector_5" />
          <path d={svgPaths.pb2cf980} fill="var(--fill-0, #151515)" id="Vector_6" />
          <path d={svgPaths.p211e0700} fill="var(--fill-0, #151515)" id="Vector_7" />
          <path d={svgPaths.p3088fdc0} fill="var(--fill-0, #151515)" id="Vector_8" />
          <path d={svgPaths.p2e718980} fill="var(--fill-0, #151515)" id="Vector_9" />
          <path d={svgPaths.p15169200} fill="var(--fill-0, #151515)" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

// Profile Icon
function ProfileIcon() {
  return (
    <div className="relative shrink-0 size-[62px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 62">
        <g id="Group">
          <path d={svgPaths.p961370} fill="var(--fill-0, #E4F7F7)" id="Vector" />
        </g>
      </svg>
      <div className="absolute inset-[20.11%_23.69%_18.25%_23.68%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 39">
          <g id="Profile Icon">
            <path d={svgPaths.pa9095f0} fill="var(--fill-0, #557170)" id="Vector" />
            <path d={svgPaths.p1139d800} fill="var(--fill-0, #3FB5B3)" id="Vector_2" />
            <path d={svgPaths.p4bd4980} fill="var(--fill-0, #8BE1DF)" id="Vector_3" />
            <path d={svgPaths.p36a0700} fill="var(--fill-0, #3FB5B3)" id="Vector_4" />
            <path d={svgPaths.p786fd00} fill="var(--fill-0, #3FB5B3)" id="Vector_5" />
            <path d={svgPaths.p1a321300} fill="var(--fill-0, #C8FFFD)" id="Vector_6" />
          </g>
        </svg>
      </div>
    </div>
  );
}

// Arrow Right Icon
function ArrowRightIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <g id="arrow-right">
        <path d={svgPaths.p232a3c80} stroke="var(--stroke-0, #B7B7B7)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
      </g>
    </svg>
  );
}

// Arrow Left Icon
function ArrowLeftIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <g id="arrow-left">
        <path d={svgPaths.p2a5cd480} stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
      </g>
    </svg>
  );
}

// Settings Icon
function SettingsIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <g id="setting">
        <path d={svgPaths.p3cccb600} stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
        <path d={svgPaths.p185ecc80} stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

export default function ProfilePage({ onBack, onLogout, onNavigateToMasterContent }: ProfilePageProps) {
  // Supabase users 테이블의 role 컬럼으로 마스터 권한 체크
  const userJson = localStorage.getItem('user');
  let isMaster = false;
  
  if (userJson) {
    try {
      const user = JSON.parse(userJson);
      // role이 'master'인 경우에만 마스터 권한 부여
      isMaster = user.role === 'master';
    } catch (e) {
      console.error('Failed to parse user from local storage', e);
    }
  }

  return (
    <div className="bg-white relative w-full min-h-screen flex justify-center">
      <div className="relative w-full max-w-[390px] min-h-screen flex flex-col bg-white">
        
        {/* Top Navigation */}
        <div className="bg-white h-[52px] relative shrink-0 w-full">
          <div className="flex flex-col justify-center size-full">
            <div className="content-stretch flex flex-col h-[52px] items-start justify-center px-[12px] py-[4px] relative w-full">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <div onClick={onBack} className="content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px] cursor-pointer">
                  <div className="relative shrink-0 size-[24px]">
                    <ArrowLeftIcon />
                  </div>
                </div>
                <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[25.5px] text-[18px] text-black tracking-[-0.36px]">마이페이지</p>
                <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px] cursor-pointer">
                  <div className="relative shrink-0 size-[24px]">
                    <SettingsIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className="h-[16px] shrink-0 w-full" />

        {/* Main Content */}
        <div className="flex-1 flex flex-col px-[20px] pb-[40px]">
          
          {/* Profile Details Section */}
          <div className="content-stretch flex flex-col gap-[32px] items-start py-[32px] w-full">
            <div className="content-stretch flex flex-col items-start w-full">
              <div className="content-stretch flex flex-col gap-[28px] items-center justify-center w-full">
                <ProfileIcon />
                <div className="content-stretch flex flex-col gap-[6px] items-start text-center w-full">
                  <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[24px] text-[#151515] text-[18px] tracking-[-0.36px] w-full">사주 정보가 아직 없어요</p>
                  <p className="font-['Pretendard_Variable:Regular',sans-serif] leading-[25.5px] text-[#848484] text-[15px] tracking-[-0.3px] w-full">사주를 등록하면 운세 풀이가 시작돼요</p>
                </div>
              </div>
            </div>
            <div className="bg-[#48b2af] h-[48px] rounded-[12px] w-full cursor-pointer hover:bg-[#3fa3a0] transition-colors">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex h-[48px] items-center justify-center px-[12px] py-0 w-full">
                  <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] text-[15px] text-white tracking-[-0.45px]">사주 정보 등록하기</p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-[1px] w-full bg-[#F3F3F3] my-[20px]" />

          {/* Menu List */}
          <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
            {isMaster && (
              <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] rounded-[16px] w-full cursor-pointer hover:bg-gray-50" onClick={onNavigateToMasterContent}>
                <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[28.5px] text-[16px] text-black tracking-[-0.32px]">콘텐츠 만들기</p>
                <div className="relative shrink-0 size-[16px]">
                  <ArrowRightIcon />
                </div>
              </div>
            )}
            <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] rounded-[16px] w-full cursor-pointer hover:bg-gray-50">
              <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[28.5px] text-[16px] text-black tracking-[-0.32px]">사주 정보 관리</p>
              <div className="relative shrink-0 size-[16px]">
                <ArrowRightIcon />
              </div>
            </div>
            <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] rounded-[16px] w-full cursor-pointer hover:bg-gray-50">
              <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[28.5px] text-[16px] text-black tracking-[-0.32px]">구매 내역</p>
              <div className="relative shrink-0 size-[16px]">
                <ArrowRightIcon />
              </div>
            </div>
            <div onClick={onLogout} className="content-stretch flex items-center justify-between px-[16px] py-[12px] rounded-[16px] w-full cursor-pointer hover:bg-gray-50">
              <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[28.5px] text-[16px] text-black tracking-[-0.32px]">로그아웃</p>
              <div className="relative shrink-0 size-[16px]">
                <ArrowRightIcon />
              </div>
            </div>
            <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] rounded-[16px] w-full cursor-pointer hover:bg-gray-50">
              <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[28.5px] text-[16px] text-black tracking-[-0.32px]">의견 전달하기</p>
              <div className="relative shrink-0 size-[16px]">
                <ArrowRightIcon />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-[#f9f9f9] content-stretch flex flex-col items-start pb-[40px] pt-[32px] px-[20px] w-full mt-auto -mx-[20px]">
            <div className="content-stretch flex flex-col gap-[4px] items-start w-full">
              <div className="relative shrink-0 w-full">
                <div className="size-full">
                  <div className="content-stretch flex flex-col gap-[12px] items-start px-[8px] py-0 relative w-full">
                    <CommonLogo />
                    <div className="content-stretch flex flex-col font-['Pretendard_Variable:Regular',sans-serif] gap-[4px] items-start leading-[19px] text-[#6d6d6d] text-[13px] tracking-[-0.26px] w-full">
                      <p className="w-full">Copyright 2024@Stargiosoft All Rights Reserved.</p>
                      <p className="w-full">대표자 서지현 | 사업자등록번호 827-88-01815</p>
                      <p className="w-full">통신판매업번호 2024-서울영등포-2084</p>
                      <p className="w-full">서울시 영등포구 양평로 149, 1507호</p>
                      <p className="w-full">문의 stargiosoft@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] items-center pt-[4px]">
                <div className="content-stretch flex flex-col h-[34px] items-center justify-center px-[8px] py-0 rounded-[12px] cursor-pointer">
                  <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] text-[#848484] text-[14px] tracking-[-0.42px]">이용약관</p>
                </div>
                <div className="h-[8px] w-0 border-l border-[#D4D4D4]" />
                <div className="content-stretch flex flex-col h-[34px] items-center justify-center px-[8px] py-0 rounded-[12px] cursor-pointer">
                  <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] text-[#848484] text-[14px] tracking-[-0.42px]">개인정보 처리방침</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}