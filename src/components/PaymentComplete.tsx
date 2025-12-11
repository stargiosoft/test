import { useEffect, useState } from 'react';

export default function PaymentComplete() {
  const [status, setStatus] = useState<'loading' | 'success' | 'fail'>('loading');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const impUid = params.get('imp_uid');
    const merchantUid = params.get('merchant_uid');
    const success = params.get('imp_success') === 'true';
    const error = params.get('error_msg');

    if (success && impUid) {
      setStatus('success');
      // TODO: 백엔드 검증 API 호출
      console.log('결제 성공:', impUid, merchantUid);
    } else {
      setStatus('fail');
      setErrorMsg(error || '결제에 실패했습니다.');
    }
  }, []);

  const handleGoBack = () => {
    window.history.back();
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  if (status === 'loading') {
    return (
      <div className="bg-white flex items-center justify-center min-h-screen">
        <p className="font-['Pretendard_Variable:Medium',sans-serif] text-[16px] text-black">결제 처리 중...</p>
      </div>
    );
  }

  if (status === 'fail') {
    return (
      <div className="bg-white flex flex-col items-center justify-center min-h-screen gap-4 px-5">
        <p className="font-['Pretendard_Variable:SemiBold',sans-serif] text-[20px] text-black">결제 실패</p>
        <p className="font-['Pretendard_Variable:Regular',sans-serif] text-[15px] text-[#848484]">{errorMsg}</p>
        <button 
          onClick={handleGoBack}
          className="bg-[#48b2af] text-white px-6 py-3 rounded-[16px] font-['Pretendard_Variable:Medium',sans-serif] text-[16px] cursor-pointer border-none"
        >
          돌아가기
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white flex flex-col items-center justify-center min-h-screen gap-4 px-5">
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] text-[20px] text-black">결제 완료!</p>
      <p className="font-['Pretendard_Variable:Regular',sans-serif] text-[15px] text-[#848484]">구매해주셔서 감사합니다.</p>
      <button 
        onClick={handleGoHome}
        className="bg-[#48b2af] text-white px-6 py-3 rounded-[16px] font-['Pretendard_Variable:Medium',sans-serif] text-[16px] cursor-pointer border-none"
      >
        홈으로 이동
      </button>
    </div>
  );
}
