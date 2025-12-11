import React, { useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface KakaoCallbackProps {
  onLoginSuccess?: (user: any) => void;
  onNavigateToTerms?: () => void;
}

export default function KakaoCallback({ onLoginSuccess, onNavigateToTerms }: KakaoCallbackProps) {
  useEffect(() => {
    const handleCallback = async () => {
      console.log('🔄 Kakao callback processing...');
      
      // URL에서 인증 코드 확인
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
      const error = urlParams.get('error');
      
      if (error) {
        console.error('❌ Kakao auth error:', error);
        alert('카카오 로그인 실패: ' + error);
        window.location.href = '/';
        return;
      }
      
      if (!code) {
        console.error('❌ No authorization code found');
        alert('인증 코드가 없습니다.');
        window.location.href = '/';
        return;
      }
      
      console.log('✅ Authorization code received:', code);
      
      // Kakao SDK로 액세스 토큰 가져오기
      try {
        if (!window.Kakao || !window.Kakao.Auth) {
          throw new Error('Kakao SDK not loaded');
        }
        
        // 토큰으로 사용자 정보 가져오기
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
              const { data: existingUser, error: dbError } = await supabase
                .from('users')
                .select('*')
                .eq('provider', 'kakao')
                .eq('provider_id', kakaoUser.provider_id)
                .maybeSingle();
              
              if (dbError) {
                console.error("❌ Supabase error:", dbError);
                throw dbError;
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
              window.location.href = '/';
            }
          },
          fail: function(err: any) {
            console.error('❌ Kakao API request failed:', err);
            alert('사용자 정보를 가져오는데 실패했습니다.');
            window.location.href = '/';
          }
        });
      } catch (error) {
        console.error('❌ Callback processing error:', error);
        alert('로그인 처리 중 오류가 발생했습니다.');
        window.location.href = '/';
      }
    };
    
    handleCallback();
  }, [onLoginSuccess, onNavigateToTerms]);
  
  return (
    <div className="bg-white flex items-center justify-center min-h-screen w-full">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#41a09e]"></div>
        <p className="text-[#151515]">카카오 로그인 처리 중...</p>
      </div>
    </div>
  );
}

declare global {
  interface Window {
    Kakao: any;
  }
}
