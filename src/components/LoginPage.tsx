import React, { useEffect } from 'react';
import svgPaths from "../imports/svg-ri8vc9fk8l";
import { imgGroup, imgGroup1, imgGroup2, imgGroup3 } from "../imports/svg-il4co";
import { supabase } from '../lib/supabase';

declare global {
  interface Window {
    Kakao: any;
  }
}

function TextLoginText() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Text / Login Text">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start not-italic px-[20px] py-[64px] relative text-black text-center w-full">
          <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[35.5px] relative shrink-0 text-[24px] tracking-[-0.48px] w-full">나다운이 처음이라면</p>
          <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[39.5px] relative shrink-0 text-[27px] tracking-[-0.27px] w-full">무료로 체험해 보세요!</p>
        </div>
      </div>
    </div>
  );
}

function Img() {
  return (
    <div className="h-[218px] relative shrink-0 w-[160px]" data-name="img">
      <div className="absolute bottom-0 left-0 right-0 top-[-0.69%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 220">
          <g id="img">
            <path d={svgPaths.p2285b300} fill="var(--fill-0, #F4F4F4)" id="Vector" />
            <g id="Group">
              <path d={svgPaths.p3868b300} fill="var(--fill-0, #FDD751)" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" />
              <path d={svgPaths.p140b500} fill="var(--fill-0, #EFC748)" id="Vector_3" />
              <path d={svgPaths.pa524580} fill="var(--fill-0, #FDD751)" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" />
              <path d={svgPaths.p20deb200} fill="var(--fill-0, #EFC748)" id="Vector_5" />
            </g>
            <path d={svgPaths.p1dea6500} fill="var(--fill-0, white)" id="Vector_6" stroke="var(--stroke-0, black)" strokeMiterlimit="10" strokeWidth="3" />
            <g id="Group_2">
              <path d={svgPaths.p11797580} fill="var(--fill-0, black)" id="Vector_7" />
              <path d={svgPaths.p617d680} fill="var(--fill-0, black)" id="Vector_8" />
            </g>
            <path d={svgPaths.p1e33f100} fill="var(--fill-0, #BCD961)" id="Vector_9" stroke="var(--stroke-0, black)" strokeMiterlimit="10" strokeWidth="3" />
            <path d={svgPaths.p12a30100} fill="var(--fill-0, #BCD961)" id="Vector_10" stroke="var(--stroke-0, black)" strokeMiterlimit="10" strokeWidth="3" />
            <path d="M79.6396 41.32V24.61" id="Vector_11" stroke="var(--stroke-0, black)" strokeMiterlimit="10" strokeWidth="3" />
            <path d={svgPaths.p2dc84080} fill="var(--fill-0, #FDD751)" id="Vector_12" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <TextLoginText />
      <Img />
    </div>
  );
}

function GuidanceTooltip() {
  return (
    <div className="bg-[#48b2af] content-stretch flex flex-col gap-[4px] items-start px-[16px] py-[8px] relative rounded-[999px] shadow-[0px_2px_7px_0px_rgba(0,0,0,0.12)] shrink-0" data-name="Guidance / Tooltip">
      <div className="flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.42px]">
        <p className="leading-[22px] whitespace-pre">지금 시작하면 0원!</p>
      </div>
      <div className="absolute bottom-[-5px] flex h-[6px] items-center justify-center left-1/2 translate-x-[-50%] w-[20px]">
        <div className="flex-none rotate-[180deg]">
          <div className="h-[6px] relative w-[20px]" data-name="arrow">
            <div className="absolute bottom-0 left-0 right-0 top-0" style={{ "--fill-0": "rgba(72, 178, 175, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 6">
                <path d={svgPaths.pc550080} fill="var(--fill-0, #48B2AF)" id="arrow" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconAndLabel() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icon and Label">
      <div className="h-[18.537px] relative shrink-0 w-[20.179px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 19">
          <path clipRule="evenodd" d={svgPaths.p2d30f4f0} fill="var(--fill-0, #1F1F1F)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap tracking-[-0.32px]">
        <p className="leading-[25px] whitespace-pre">카카오로 무료 체험 시작하기</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#fee500] h-[56px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#fee500] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex h-[56px] items-center justify-center p-px relative w-full">
          <IconAndLabel />
        </div>
      </div>
    </div>
  );
}

function ButtonSnsButton({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="content-stretch flex flex-col items-start relative shrink-0 w-full cursor-pointer" data-name="Button / SNS Button">
      <Button />
    </div>
  );
}

function GoogleIconContainer() {
  return (
    <div className="relative shrink-0 w-[24px] h-[24px] flex items-center justify-center" data-name="Google Icon Container">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-full h-full block">
        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6.19c4.51-4.18 7.09-10.36 7.09-17.84z"/>
        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-3.11-.76-4.82s.27-3.37.76-4.82l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 11.22l7.97-6.63z"/>
        <path fill="#34A853" d="M24 48c6.48 0 11.95-2.13 15.89-5.81l-7.73-6.19c-2.14 1.44-4.9 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
        <path fill="none" d="M0 0h48v48H0z"/>
      </svg>
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center leading-[0] relative shrink-0" data-name="Button Container">
      <GoogleIconContainer />
      <div className="flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] justify-center not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap tracking-[-0.32px]">
        <p className="leading-[25px] whitespace-pre">Google로 무료 체험 시작하기</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[56px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex h-[56px] items-center justify-center p-px relative w-full">
          <ButtonContainer />
        </div>
      </div>
    </div>
  );
}

function ButtonSnsButton1({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="content-stretch flex flex-col isolate items-start pb-[13px] pt-0 px-0 relative shrink-0 w-full cursor-pointer" data-name="Button / SNS Button">
      <Button1 />
    </div>
  );
}

function Frame2({ onKakaoLogin, onGoogleLogin }: { onKakaoLogin?: () => void; onGoogleLogin?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <ButtonSnsButton onClick={onKakaoLogin} />
      <ButtonSnsButton1 onClick={onGoogleLogin} />
      <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#999999] text-[14px] text-center tracking-[-0.42px] w-full">무료 체험 후 자동 결제되지 않아요!</p>
    </div>
  );
}

function Frame3({ onKakaoLogin, onGoogleLogin }: { onKakaoLogin?: () => void; onGoogleLogin?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[350px]">
      <GuidanceTooltip />
      <Frame2 onKakaoLogin={onKakaoLogin} onGoogleLogin={onGoogleLogin} />
    </div>
  );
}

function Frame4({ onKakaoLogin, onGoogleLogin }: { onKakaoLogin?: () => void; onGoogleLogin?: () => void }) {
  return (
    <div className="absolute content-stretch flex flex-col h-[697px] items-center justify-between left-0 top-[99px] w-[390px]">
      <Frame1 />
      <Frame3 onKakaoLogin={onKakaoLogin} onGoogleLogin={onGoogleLogin} />
    </div>
  );
}

function LeftAction({ onBack }: { onBack?: () => void }) {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0 w-[44px] h-[44px] cursor-pointer" onClick={onBack}>
      <div className="relative shrink-0 w-[24px] h-[24px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.p2a5cd480} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
        </svg>
      </div>
    </div>
  );
}

function RightAction() {
    return <div className="w-[44px] h-[44px]" />;
}

function Icon({ onBack }: { onBack?: () => void }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Icon">
      <LeftAction onBack={onBack} />
      <RightAction />
    </div>
  );
}

function NavigationTopBar({ onBack }: { onBack?: () => void }) {
  return (
    <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="Navigation / Top Bar">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col h-[52px] items-start justify-center px-[12px] py-[4px] relative w-full">
          <Icon onBack={onBack} />
        </div>
      </div>
    </div>
  );
}

function TopNavigation1Depth({ onBack }: { onBack?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Top Navigation/1depth">
      <NavigationTopBar onBack={onBack} />
    </div>
  );
}

function Frame({ onBack }: { onBack?: () => void }) {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-full">
      <TopNavigation1Depth onBack={onBack} />
    </div>
  );
}

function HomeIndicatorLight() {
  return (
    <div className="absolute bg-white bottom-0 h-[28px] left-0 w-[390px]" data-name="Home Indicator/Light">
      <div className="absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

interface LoginPageProps {
  onBack?: () => void;
  onLoginSuccess?: (user: any) => void;
  onNavigateToTerms?: () => void;
}

export default function LoginPage({ onBack, onLoginSuccess, onNavigateToTerms }: LoginPageProps) {
  const [isSdkLoaded, setIsSdkLoaded] = React.useState(false);
  const [sdkError, setSdkError] = React.useState<string | null>(null);

  useEffect(() => {
    // 1. 카카오 SDK 초기화 (v1 사용)
    const scriptId = 'kakao-sdk';
    
    // 기존 스크립트 제거
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = scriptId;
    // SDK 1.x 사용 (login 메서드 포함)
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    
    script.onload = () => {
      console.log('✅ Kakao SDK v1 script loaded');
      
      // SDK가 로드될 때까지 대기 (최대 5초)
      let attempts = 0;
      const maxAttempts = 50; // 50 * 100ms = 5초
      
      const checkKakao = () => {
        attempts++;
        
        if (window.Kakao) {
          console.log('✅ Kakao object found');
          console.log('Kakao properties:', Object.keys(window.Kakao));
          
          try {
            if (!window.Kakao.isInitialized()) {
              window.Kakao.init('da0e07cca0c104a3b59f79a24911587c');
              console.log('✅ Kakao SDK initialized');
            }
            
            // Auth 모듈 확인
            if (window.Kakao.Auth) {
              console.log('✅ Kakao.Auth available');
              console.log('Auth methods:', Object.keys(window.Kakao.Auth));
            } else {
              console.warn('⚠️ Kakao.Auth not available');
            }
            
            setIsSdkLoaded(true);
            setSdkError(null);
          } catch (error) {
            console.error('❌ Kakao SDK initialization error:', error);
            setSdkError('SDK 초기화 실패: ' + error);
          }
        } else {
          if (attempts < maxAttempts) {
            console.warn(`⚠️ Kakao object not available yet, retrying... (${attempts}/${maxAttempts})`);
            setTimeout(checkKakao, 100);
          } else {
            console.error('❌ Kakao SDK load timeout after 5 seconds');
            setSdkError('SDK 로드 시간 초과');
          }
        }
      };
      
      checkKakao();
    };
    
    script.onerror = (error) => {
      console.error('❌ Kakao SDK load error:', error);
      console.error('❌ Error details:', {
        src: script.src,
        id: script.id,
        error: error
      });
      setSdkError('SDK 로드 실패 - 네트워크를 확인해주세요');
    };
    
    console.log('🔄 Loading Kakao SDK v1 from:', script.src);
    document.head.appendChild(script);
    
    return () => {
      // Cleanup: script는 유지하되 재초기화 방지
    };
  }, []);

  const handleKakaoLogin = () => {
    const currentDomain = window.location.origin;
    console.log('🌍 Current Domain:', currentDomain);
    console.log('🔐 Kakao login button clicked');
    
    // 개발 편의를 위해 현재 도메인을 알림으로 표시 (나중에 삭제 가능)
    // alert(`현재 도메인: ${currentDomain}\n\n이 도메인이 카카오 개발자 센터 > 플랫폼 > Web > 사이트 도메인에 등록되어 있어야 합니다.`);

    console.log('SDK loaded:', isSdkLoaded);
    console.log('Kakao object exists:', !!window.Kakao);
    console.log('Kakao initialized:', window.Kakao?.isInitialized());
    console.log('Kakao.Auth exists:', !!window.Kakao?.Auth);
    console.log('Available Auth methods:', window.Kakao?.Auth ? Object.keys(window.Kakao.Auth) : 'none');
    console.log('SDK Error:', sdkError);
    
    if (!window.Kakao || !window.Kakao.isInitialized()) {
      const errorMsg = sdkError 
        ? `카카오 SDK 오류: ${sdkError}\n\n페이지를 새로고침 후 다시 시도해주세요.`
        : `카카오 SDK가 아직 초기화되지 않았습니다.\n\n현재 도메인: ${currentDomain}\n이 도메인을 카카오 개발자 센터에 등록했는지 확인해주세요.`;
      
      alert(errorMsg);
      console.error('❌ Kakao SDK not ready:', { 
        kakaoExists: !!window.Kakao, 
        isInitialized: window.Kakao?.isInitialized(),
        sdkError 
      });
      return;
    }

    if (!window.Kakao.Auth) {
      alert('카카오 인증 모듈이 준비되지 않았습니다.\n페이지를 새로고침 후 다시 시도해주세요.');
      console.error('❌ Kakao.Auth not available');
      return;
    }

    try {
      console.log('🚀 Starting Kakao Auth.login (v1)...');
      
      // SDK 1.x에서는 login 메서드 사용
      window.Kakao.Auth.login({
        success: function(authObj: any) {
          console.log('✅ Kakao auth success:', authObj);
          // 사용자 정보 가져오기
          window.Kakao.API.request({
            url: '/v2/user/me',
            success: async function(res: any) {
              console.log('✅ Kakao user info:', res);
              const kakaoUser = {
                provider: 'kakao',
                provider_id: String(res.id),
                email: res.kakao_account?.email || null,
                nickname: res.properties?.nickname || null,
                profile_image: res.properties?.profile_image || null,
              };
              
              try {
                // Supabase에서 기존 사용자 확인
                const { data: existingUser, error } = await supabase
                  .from('users')
                  .select('*')
                  .eq('provider', 'kakao')
                  .eq('provider_id', kakaoUser.provider_id)
                  .maybeSingle();
                
                if (error) {
                    console.error("❌ Supabase error:", error);
                    throw error;
                }

                if (existingUser) {
                  console.log('✅ Existing user found:', existingUser);
                  // 기존 사용자: last_login_at 업데이트 후 홈으로
                  await supabase
                    .from('users')
                    .update({ last_login_at: new Date().toISOString() })
                    .eq('id', existingUser.id);
                  
                  localStorage.setItem('user', JSON.stringify(existingUser));
                  
                  if (onLoginSuccess) onLoginSuccess(existingUser);
                } else {
                  console.log('ℹ️ New user, navigating to terms');
                  // 신규 사용자: 임시 저장 후 약관 동의 페이지로
                  sessionStorage.setItem('pendingUser', JSON.stringify(kakaoUser));
                  if (onNavigateToTerms) onNavigateToTerms();
                }
              } catch (err) {
                console.error('❌ Login process error:', err);
                alert('로그인 처리 중 오류가 발생했습니다.');
              }
            },
            fail: function(err: any) {
                console.error('❌ Kakao API request failed:', err);
                alert('사용자 정보를 가져오는데 실패했습니다.');
            }
          });
        },
        fail: function(err: any) {
          console.error('❌ 카카오 로그인 실패:', err);
          alert('로그인 실패: ' + (err.error_description || JSON.stringify(err)));
        }
      });
      
    } catch (error) {
      console.error('❌ Kakao login exception:', error);
      console.error('❌ Exception details:', {
        message: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
      });
      alert('로그인 중 오류가 발생했습니다.\n페이지를 새로고침 후 다시 시도해주세요.\n\n오류: ' + error);
    }
  };

  const handleGoogleLogin = () => {
      alert("구글 로그인은 준비중입니다.");
  };

  return (
    <div className="bg-white relative w-full min-h-screen flex justify-center" data-name="첫 로그인 (카카오)">
      <div className="relative w-full max-w-[390px] min-h-screen flex flex-col bg-white">
        <Frame onBack={onBack} />
        <div className="flex-1 flex flex-col items-center justify-between pt-[52px] pb-[28px] px-[20px]">
          <Frame1 />
          <Frame3 onKakaoLogin={handleKakaoLogin} onGoogleLogin={handleGoogleLogin} />
        </div>
      </div>
    </div>
  );
}