import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import svgPaths from "./imports/svg-3bee5ss8uf";

// --- SVG Components ---

function ArrowDownIcon({ className }: { className?: string }) {
  return (
    <svg className={`block size-full ${className}`} fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <g id="arrow-down">
        <path d={svgPaths.p3993d9c0} id="Vector" stroke="var(--stroke-0, #B7B7B7)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
      </g>
    </svg>
  );
}

function CheckboxIcon({ checked }: { checked: boolean }) {
  return (
    <div className={`relative rounded-[8px] shrink-0 size-[28px] ${checked ? 'bg-[#48b2af] border-none' : 'bg-white border-2 border-[#e7e7e7] border-solid'}`}>
      {checked && (
        <svg className="absolute inset-0 m-auto w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      )}
    </div>
  );
}

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
            <path d={svgPaths.p2d05aa80} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, black)" />
            <path d={svgPaths.p1fcfdd80} fill="var(--fill-0, black)" id="Combined Shape" opacity="0.4" />
            <path d={svgPaths.p12636800} fill="var(--fill-0, black)" id="Rectangle_2" />
          </g>
          <path d={svgPaths.p10be8f00} fill="var(--fill-0, black)" id="Wifi" />
          <path d={svgPaths.p3cc2d900} fill="var(--fill-0, black)" id="Mobile Signal" />
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

function LeftSide() {
  return (
    <div className="absolute contents left-[21px] top-[12px]" data-name="Left Side">
      <Time />
    </div>
  );
}

function IndependentIPhoneStatusBar() {
  return (
    <div className="bg-white h-[47px] overflow-clip relative shrink-0 w-[390px]" data-name="Independent / iPhone Status Bar">
      <Notch />
      <RightSide />
      <LeftSide />
    </div>
  );
}

function ArrowLeftIcon() {
    return (
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="arrow-left">
                <path d={svgPaths.p2a5cd480} id="Vector" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
            </g>
        </svg>
    );
}

// --- Main Components ---

interface TermsPageProps {
  onBack: () => void;
  onComplete: () => void;
}

export default function TermsPage({ onBack, onComplete }: TermsPageProps) {
  const [agreements, setAgreements] = useState({
    age14: false,
    terms: false,
    privacy: false,
    marketing: false,
    ads: false,
  });

  const [expanded, setExpanded] = useState({
    terms: false,
    privacy: false,
    marketing: false,
    ads: false,
  });

  const toggleAgreement = (key: keyof typeof agreements) => {
    setAgreements(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleExpanded = (key: keyof typeof expanded) => {
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const allAgreed = Object.values(agreements).every(Boolean);
  
  const handleAllAgree = () => {
    const newValue = !allAgreed;
    setAgreements({
      age14: newValue,
      terms: newValue,
      privacy: newValue,
      marketing: newValue,
      ads: newValue,
    });
  };

  const requiredAgreed = agreements.age14 && agreements.terms && agreements.privacy;

  const handleSubmit = async () => {
    if (!requiredAgreed) return;

    try {
      const pendingUserJson = sessionStorage.getItem('pendingUser');
      if (!pendingUserJson) {
        alert('잘못된 접근입니다.');
        onBack();
        return;
      }

      const pendingUser = JSON.parse(pendingUserJson);

      const { data: newUser, error } = await supabase
        .from('users')
        .insert({
          provider: pendingUser.provider,
          provider_id: pendingUser.provider_id,
          email: pendingUser.email,
          nickname: pendingUser.nickname,
          profile_image: pendingUser.profile_image,
          role: 'user', // 신규 사용자는 기본적으로 'user' 역할
          terms_agreed: true,
          privacy_agreed: true,
          marketing_agreed: agreements.marketing,
          ads_agreed: agreements.ads,
          terms_agreed_at: new Date().toISOString(),
        })
        .select()
        .single();

      if (error) {
        console.error('Error creating user:', error);
        alert('회원가입에 실패했습니다. 다시 시도해주세요.');
        return;
      }

      localStorage.setItem('user', JSON.stringify(newUser));
      sessionStorage.removeItem('pendingUser');
      
      onComplete();
    } catch (err) {
      console.error('Unexpected error:', err);
      alert('오류가 발생했습니다.');
    }
  };

  return (
    <div className="bg-white relative w-full min-h-screen flex justify-center" data-name="약관 동의 _ 390">
      <div className="relative w-full max-w-[390px] min-h-screen flex flex-col bg-white">
        {/* Top Navigation */}
        <div className="absolute left-0 top-0 w-full z-10 bg-white">
          <div className="h-[52px] relative shrink-0 w-full">
            <div className="flex flex-col justify-center size-full">
              <div className="content-stretch flex flex-col h-[52px] items-start justify-center px-[12px] py-[4px] relative w-full">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <div onClick={onBack} className="content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px] cursor-pointer">
                    <div className="relative shrink-0 size-[24px]">
                      <ArrowLeftIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-between pt-[52px] pb-8 w-full">
          <div className="bg-white relative shrink-0 w-full" data-name="Text / Login Text">
            <div className="size-full">
              <div className="content-stretch flex flex-col gap-[4px] items-start not-italic px-[20px] py-[64px] relative text-black text-center w-full">
                <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[35.5px] relative shrink-0 text-[24px] tracking-[-0.48px] w-full">바로 만나기 전</p>
                <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[39.5px] relative shrink-0 text-[27px] tracking-[-0.27px] w-full">잠깐, 약관에 동의해 주세요!</p>
              </div>
            </div>
          </div>

          <div className="content-stretch flex flex-col gap-[28px] items-center relative shrink-0 w-full px-[20px]">
            <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full gap-[12px]" data-name="Disclosure / Checklist">
              
              {/* Age 14 (Mandatory) */}
              <div className="relative shrink-0 w-full flex flex-row items-center justify-between px-[16px]">
                  <div className="content-stretch flex gap-[12px] items-center leading-[28.5px] not-italic relative shrink-0 text-[16px] text-nowrap tracking-[-0.32px] whitespace-pre">
                      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] relative shrink-0 text-[#48b2af]">필수</p>
                      <p className="font-['Pretendard_Variable:Regular',sans-serif] relative shrink-0 text-black">만 14세 이상입니다</p>
                  </div>
                  <div onClick={() => toggleAgreement('age14')} className="cursor-pointer">
                      <CheckboxIcon checked={agreements.age14} />
                  </div>
              </div>

              {/* Terms (Mandatory) */}
              <div className="relative shrink-0 w-full flex flex-col">
                  <div className="flex flex-row items-center justify-between px-[16px]">
                      <div onClick={() => toggleExpanded('terms')} className="content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 cursor-pointer">
                          <div className="content-stretch flex gap-[12px] items-center leading-[28.5px] not-italic relative shrink-0 text-[16px] text-nowrap tracking-[-0.32px] whitespace-pre">
                              <p className="font-['Pretendard_Variable:SemiBold',sans-serif] relative shrink-0 text-[#48b2af]">필수</p>
                              <p className="font-['Pretendard_Variable:Regular',sans-serif] relative shrink-0 text-black">이용약관 동의</p>
                          </div>
                          <div className={`relative shrink-0 size-[16px] transition-transform ${expanded.terms ? 'rotate-180' : ''}`}>
                              <ArrowDownIcon />
                          </div>
                      </div>
                      <div onClick={() => toggleAgreement('terms')} className="cursor-pointer">
                          <CheckboxIcon checked={agreements.terms} />
                      </div>
                  </div>
                  {expanded.terms && (
                      <div className="px-[16px] py-2 text-sm text-gray-500 bg-gray-50 mt-2 rounded">
                          이용약관 내용이 여기에 들어갑니다...
                      </div>
                  )}
              </div>

              {/* Privacy (Mandatory) */}
              <div className="relative shrink-0 w-full flex flex-col">
                  <div className="flex flex-row items-center justify-between px-[16px]">
                      <div onClick={() => toggleExpanded('privacy')} className="content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 cursor-pointer">
                          <div className="content-stretch flex gap-[12px] items-center leading-[28.5px] not-italic relative shrink-0 text-[16px] text-nowrap tracking-[-0.32px] whitespace-pre">
                              <p className="font-['Pretendard_Variable:SemiBold',sans-serif] relative shrink-0 text-[#48b2af]">필수</p>
                              <p className="font-['Pretendard_Variable:Regular',sans-serif] relative shrink-0 text-black">개인정보 처리방침 동의</p>
                          </div>
                           <div className={`relative shrink-0 size-[16px] transition-transform ${expanded.privacy ? 'rotate-180' : ''}`}>
                              <ArrowDownIcon />
                          </div>
                      </div>
                      <div onClick={() => toggleAgreement('privacy')} className="cursor-pointer">
                          <CheckboxIcon checked={agreements.privacy} />
                      </div>
                  </div>
                  {expanded.privacy && (
                      <div className="px-[16px] py-2 text-sm text-gray-500 bg-gray-50 mt-2 rounded">
                          개인정보 처리방침 내용이 여기에 들어갑니다...
                      </div>
                  )}
              </div>

              {/* Marketing (Optional) */}
              <div className="relative shrink-0 w-full flex flex-col">
                  <div className="flex flex-row items-center justify-between px-[16px]">
                      <div onClick={() => toggleExpanded('marketing')} className="content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 cursor-pointer">
                          <div className="content-stretch flex gap-[12px] items-center leading-[28.5px] not-italic relative shrink-0 text-[16px] text-nowrap tracking-[-0.32px] whitespace-pre">
                              <p className="font-['Pretendard_Variable:SemiBold',sans-serif] relative shrink-0 text-[#999999]">선택</p>
                              <p className="font-['Pretendard_Variable:Regular',sans-serif] relative shrink-0 text-black">마케팅 활용 동의</p>
                          </div>
                           <div className={`relative shrink-0 size-[16px] transition-transform ${expanded.marketing ? 'rotate-180' : ''}`}>
                              <ArrowDownIcon />
                          </div>
                      </div>
                      <div onClick={() => toggleAgreement('marketing')} className="cursor-pointer">
                          <CheckboxIcon checked={agreements.marketing} />
                      </div>
                  </div>
                  {expanded.marketing && (
                      <div className="px-[16px] py-2 text-sm text-gray-500 bg-gray-50 mt-2 rounded">
                          마케팅 활용 동의 내용이 여기에 들어갑니다...
                      </div>
                  )}
              </div>

              {/* Ads (Optional) */}
              <div className="relative shrink-0 w-full flex flex-col">
                  <div className="flex flex-row items-center justify-between px-[16px]">
                      <div onClick={() => toggleExpanded('ads')} className="content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0 cursor-pointer">
                           <div className="content-stretch flex gap-[12px] items-center leading-[28.5px] not-italic relative shrink-0 text-[16px] text-nowrap tracking-[-0.32px] whitespace-pre">
                              <p className="font-['Pretendard_Variable:SemiBold',sans-serif] relative shrink-0 text-[#999999]">선택</p>
                              <p className="font-['Pretendard_Variable:Regular',sans-serif] relative shrink-0 text-black">광고성 정보 수신 동의</p>
                          </div>
                           <div className={`relative shrink-0 size-[16px] transition-transform ${expanded.ads ? 'rotate-180' : ''}`}>
                              <ArrowDownIcon />
                          </div>
                      </div>
                      <div onClick={() => toggleAgreement('ads')} className="cursor-pointer">
                          <CheckboxIcon checked={agreements.ads} />
                      </div>
                  </div>
                  {expanded.ads && (
                      <div className="px-[16px] py-2 text-sm text-gray-500 bg-gray-50 mt-2 rounded">
                          광고성 정보 수신 동의 내용이 여기에 들어갑니다...
                      </div>
                  )}
              </div>

              {/* All Agree */}
              <div className="bg-[#f7f8f9] relative rounded-[12px] shrink-0 w-full mt-4 cursor-pointer" onClick={handleAllAgree}>
                  <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[12px] items-center justify-between px-[16px] py-[8px] relative w-full">
                          <div className="content-stretch flex items-center relative shrink-0">
                              <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[28.5px] not-italic relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.32px] whitespace-pre">약관 전체 동의</p>
                          </div>
                          <div className="content-stretch flex items-center justify-center relative shrink-0 size-[44px]">
                              <CheckboxIcon checked={allAgreed} />
                          </div>
                      </div>
                  </div>
              </div>

            </div>

            <div className="content-stretch flex flex-col items-start relative shadow-[0px_-8px_16px_0px_rgba(255,255,255,0.76)] shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="bg-white relative shrink-0 w-full">
                      <div className="flex flex-col items-center justify-center size-full">
                          <div className="content-stretch flex flex-col items-center justify-center py-[12px] relative w-full">
                              <div 
                                  onClick={handleSubmit}
                                  className={`${requiredAgreed ? 'bg-[#48b2af] cursor-pointer' : 'bg-[#f8f8f8] cursor-not-allowed'} h-[56px] relative rounded-[16px] shrink-0 w-full transition-colors`}
                              >
                                  <div className="flex flex-row items-center justify-center size-full">
                                      <div className="content-stretch flex h-[56px] items-center justify-center px-[12px] py-0 relative w-full">
                                          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                                              <p className={`font-['Pretendard_Variable:Medium',sans-serif] leading-[25px] not-italic relative shrink-0 ${requiredAgreed ? 'text-white' : 'text-[#b7b7b7]'} text-[16px] text-nowrap tracking-[-0.32px] whitespace-pre`}>다음 단계로 이동하기</p>
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
        </div>
      </div>
    </div>
  );
}