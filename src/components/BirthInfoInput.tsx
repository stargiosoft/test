import { useState, useEffect } from 'react';
import svgPaths from '../imports/svg-pz5xolnd4t';
import { saveSajuRecord } from '../lib/supabase';
import Loading from './Loading';

interface BirthInfoInputProps {
  productId: string;
  onBack: () => void;
  onComplete: (recordId: string, userName: string) => void;
}

export default function BirthInfoInput({ productId, onBack, onComplete }: BirthInfoInputProps) {
  const [name, setName] = useState('');
  const [gender, setGender] = useState<'female' | 'male'>('female');
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [unknownTime, setUnknownTime] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  
  const [errors, setErrors] = useState({
    birthDate: '',
    birthTime: '',
    phoneNumber: ''
  });

  const validateBirthDate = (value: string) => {
    const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
    if (!dateRegex.test(value)) {
      return '생년월일을 정확하게 입력해주세요.';
    }
    
    const [year, month, day] = value.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    
    if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
      return '생년월일을 정확하게 입력해주세요.';
    }
    
    return '';
  };

  const validateBirthTime = (value: string) => {
    const timeRegex = /^(오전|오후) (0[0-9]|1[0-2]):([0-5][0-9])$/;
    if (!timeRegex.test(value)) {
      return '태어난 시를 정확하게 입력해주세요.';
    }
    return '';
  };

  const validatePhoneNumber = (value: string) => {
    const phoneRegex = /^01[0-9]\d{7,8}$/;
    if (!phoneRegex.test(value)) {
      return '전화번호를 정확하게 입력해주세요.';
    }
    return '';
  };

  const handleBirthDateChange = (value: string) => {
    // 숫자만 추출
    const onlyNumbers = value.replace(/[^\d]/g, '');
    
    // 최대 8자리 숫자까지만 허용 (YYYYMMDD)
    const limitedNumbers = onlyNumbers.slice(0, 8);
    
    // 자동으로 하이픈 추가
    let formatted = '';
    if (limitedNumbers.length > 0) {
      formatted = limitedNumbers.slice(0, 4);
      if (limitedNumbers.length > 4) {
        formatted += '-' + limitedNumbers.slice(4, 6);
      }
      if (limitedNumbers.length > 6) {
        formatted += '-' + limitedNumbers.slice(6, 8);
      }
    }
    
    setBirthDate(formatted);
    if (formatted.length === 10) {
      const error = validateBirthDate(formatted);
      setErrors(prev => ({ ...prev, birthDate: error }));
    } else {
      setErrors(prev => ({ ...prev, birthDate: '' }));
    }
  };

  const handleBirthTimeChange = (value: string) => {
    // 숫자만 추출
    const onlyNumbers = value.replace(/[^\d]/g, '');
    
    // 최대 4자리까지만 허용 (HHMM)
    const limitedNumbers = onlyNumbers.slice(0, 4);
    
    let formatted = '';
    
    if (limitedNumbers.length >= 1) {
      // 4자리가 입력되면 자동으로 오전/오후 HH:MM 형식으로 변환
      if (limitedNumbers.length === 4) {
        const hours = parseInt(limitedNumbers.slice(0, 2), 10);
        const minutes = limitedNumbers.slice(2, 4);
        
        // 유효한 시간인지 체크
        if (hours >= 0 && hours <= 23 && parseInt(minutes, 10) >= 0 && parseInt(minutes, 10) <= 59) {
          const period = hours < 12 ? '오전' : '오후';
          const displayHours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
          formatted = `${period} ${displayHours.toString().padStart(2, '0')}:${minutes}`;
        } else {
          // 유효하지 않은 시간이면 그냥 숫자만 표시
          formatted = limitedNumbers;
        }
      } else {
        // 4자리가 아니면 숫자만 표시
        formatted = limitedNumbers;
      }
    }
    
    setBirthTime(formatted);
    if (formatted && !unknownTime) {
      const error = validateBirthTime(formatted);
      setErrors(prev => ({ ...prev, birthTime: error }));
    } else {
      setErrors(prev => ({ ...prev, birthTime: '' }));
    }
  };

  const handleUnknownTimeChange = (checked: boolean) => {
    setUnknownTime(checked);
    if (checked) {
      setErrors(prev => ({ ...prev, birthTime: '' }));
    }
  };

  const handlePhoneNumberChange = (value: string) => {
    // 숫자만 추출
    const onlyNumbers = value.replace(/[^\d]/g, '');
    
    // 최대 11자리까지만 허용
    const limitedNumbers = onlyNumbers.slice(0, 11);
    
    setPhoneNumber(limitedNumbers);
    if (limitedNumbers.length >= 10) {
      const error = validatePhoneNumber(limitedNumbers);
      setErrors(prev => ({ ...prev, phoneNumber: error }));
    } else {
      setErrors(prev => ({ ...prev, phoneNumber: '' }));
    }
  };

  const isFormValid = () => {
    return name.trim() !== '' && 
           birthDate !== '' && 
           !errors.birthDate &&
           (unknownTime || (birthTime !== '' && !errors.birthTime)) &&
           !errors.phoneNumber;
  };

  const handleSubmit = async () => {
    if (!isFormValid() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      // Save saju record to database
      const data = await saveSajuRecord({
        productId,
        name,
        gender,
        birthDate,
        birthTime,
        unknownTime,
        phoneNumber
      });

      console.log('Saju record saved successfully:', data);
      
      // Show loading screen for 1.5 seconds before navigating
      setShowLoading(true);
      setTimeout(() => {
        onComplete(data.id, name);
      }, 1500);
      
    } catch (error) {
      console.error('Error saving saju record:', error);
      alert('사주 정보 저장 중 오류가 발생했습니다. 다시 시도해주세요.');
      setIsSubmitting(false);
    }
  };

  if (showLoading) {
    return <Loading name={name} />;
  }

  return (
    <div className="bg-white relative min-h-screen w-full flex justify-center">
      <div className="w-full max-w-[390px] relative">
      {/* Top Navigation */}
      <div className="content-stretch flex flex-col items-start w-full">
        
        {/* Top Bar */}
        <div className="bg-white h-[52px] relative shrink-0 w-full">
          <div className="flex flex-col justify-center size-full">
            <div className="box-border content-stretch flex flex-col gap-[10px] h-[52px] items-start justify-center px-[12px] py-[4px] relative w-full">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <button
                  onClick={onBack}
                  className="box-border content-stretch flex gap-[10px] items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px] bg-transparent border-none cursor-pointer"
                >
                  <div className="relative shrink-0 size-[24px]">
                    <div className="absolute contents inset-0">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <g id="arrow-left">
                          <path d={svgPaths.p2a5cd480} stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </button>
                <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] grow leading-[25.5px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-black text-center text-nowrap tracking-[-0.36px]">사주 정보 입력</p>
                <div className="box-border content-stretch flex gap-[10px] items-center justify-center opacity-0 p-[4px] relative rounded-[12px] shrink-0 size-[44px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[16px] shrink-0 w-full" />
      </div>

      {/* Form Content */}
      <div className="px-[20px] pb-[120px]">
        {/* Name Input */}
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full mb-[28px]">
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="box-border content-stretch flex gap-[10px] items-center px-[4px] py-0 relative w-full">
                <p className="basis-0 font-['Inter:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#848484] text-[12px] tracking-[-0.24px]">이름</p>
              </div>
            </div>
          </div>
          <div className={`${name ? 'bg-[#f8f8f8]' : 'bg-white'} h-[56px] relative rounded-[16px] shrink-0 w-full`}>
            {!name && <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[16px]" />}
            <div className="flex flex-row items-center size-full">
              <div className="box-border content-stretch flex gap-[10px] h-[56px] items-center px-[12px] py-0 relative w-full">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="예: 홍길동"
                  className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[15px] tracking-[-0.45px] bg-transparent border-none outline-none text-black placeholder:text-[#b7b7b7]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Gender Selection */}
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full mb-[28px]">
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="box-border content-stretch flex gap-[10px] items-center px-[4px] py-0 relative w-full">
                <p className="basis-0 font-['Inter:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#848484] text-[12px] tracking-[-0.24px]">성별</p>
              </div>
            </div>
          </div>
          <div className="bg-[#f8f8f8] relative rounded-[16px] shrink-0 w-full">
            <div className="size-full">
              <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[8px] relative w-full">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                  <button
                    onClick={() => setGender('female')}
                    className={`basis-0 grow min-h-px min-w-px relative rounded-[12px] shrink-0 border-none cursor-pointer ${gender === 'female' ? 'bg-[#48b2af] shadow-[0px_2px_7px_0px_rgba(0,0,0,0.12)]' : 'bg-[#f9f9f9]'}`}
                  >
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[12px] relative w-full">
                        <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
                          <p className={`font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] relative shrink-0 text-[15px] text-nowrap tracking-[-0.45px] whitespace-pre ${gender === 'female' ? 'text-white' : 'text-[#b7b7b7]'}`}>여성</p>
                          <div className="relative shrink-0 size-[24px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                              <g id="tick-circle">
                                <path d="M7 11.625L10.3294 16L17 9" stroke={gender === 'female' ? 'white' : '#E7E7E7'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                  <button
                    onClick={() => setGender('male')}
                    className={`basis-0 grow min-h-px min-w-px relative rounded-[12px] shrink-0 border-none cursor-pointer ${gender === 'male' ? 'bg-[#48b2af] shadow-[0px_2px_7px_0px_rgba(0,0,0,0.12)]' : 'bg-[#f9f9f9]'}`}
                  >
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[12px] relative w-full">
                        <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
                          <p className={`font-['Pretendard_Variable:Regular',sans-serif] leading-[20px] relative shrink-0 text-[15px] text-nowrap tracking-[-0.45px] whitespace-pre ${gender === 'male' ? 'text-white font-medium' : 'text-[#b7b7b7]'}`}>남성</p>
                          <div className="relative shrink-0 size-[24px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                              <g id="tick-circle">
                                <path d="M7 11.625L10.3294 16L17 9" stroke={gender === 'male' ? 'white' : '#E7E7E7'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Birth Date Input */}
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full mb-[28px]">
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="box-border content-stretch flex gap-[10px] items-center px-[4px] py-0 relative w-full">
                <p className="basis-0 font-['Inter:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#848484] text-[12px] tracking-[-0.24px]">생년월일 (양력 기준으로 입력해 주세요)</p>
              </div>
            </div>
          </div>
          <div className={`${birthDate && !errors.birthDate ? 'bg-[#f8f8f8]' : 'bg-white'} h-[56px] relative rounded-[16px] shrink-0 w-full`}>
            <div aria-hidden="true" className={`absolute border ${errors.birthDate ? 'border-[#fa5b4a]' : 'border-[#e7e7e7]'} border-solid inset-0 pointer-events-none rounded-[16px]`} />
            <div className="flex flex-row items-center size-full">
              <div className="box-border content-stretch flex gap-[10px] h-[56px] items-center px-[12px] py-0 relative w-full">
                <input
                  type="text"
                  value={birthDate}
                  onChange={(e) => handleBirthDateChange(e.target.value)}
                  placeholder="예: 1992-07-15 (양력)"
                  className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[15px] tracking-[-0.45px] bg-transparent border-none outline-none text-black placeholder:text-[#b7b7b7]"
                />
              </div>
            </div>
          </div>
          {errors.birthDate && (
            <div className="relative shrink-0 w-full">
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex gap-[10px] items-center px-[4px] py-0 relative w-full">
                  <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
                    <div className="relative shrink-0 size-[16px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <g id="info-circle">
                          <path d="M8 1.33333C4.32667 1.33333 1.33333 4.32667 1.33333 8C1.33333 11.6733 4.32667 14.6667 8 14.6667C11.6733 14.6667 14.6667 11.6733 14.6667 8C14.6667 4.32667 11.6733 1.33333 8 1.33333ZM7.5 5.33333C7.5 5.06 7.72667 4.83333 8 4.83333C8.27333 4.83333 8.5 5.06 8.5 5.33333V8.66667C8.5 8.94 8.27333 9.16667 8 9.16667C7.72667 9.16667 7.5 8.94 7.5 8.66667V5.33333ZM8.61333 10.92C8.58 11.0067 8.53333 11.0733 8.47333 11.14C8.40667 11.2 8.33333 11.2467 8.25333 11.28C8.17333 11.3133 8.08667 11.3333 8 11.3333C7.91333 11.3333 7.82667 11.3133 7.74667 11.28C7.66667 11.2467 7.59333 11.2 7.52667 11.14C7.46667 11.0733 7.42 11.0067 7.38667 10.92C7.35333 10.84 7.33333 10.7533 7.33333 10.6667C7.33333 10.58 7.35333 10.4933 7.38667 10.4133C7.42 10.3333 7.46667 10.26 7.52667 10.1933C7.59333 10.1333 7.66667 10.0867 7.74667 10.0533C7.90667 9.98667 8.09333 9.98667 8.25333 10.0533C8.33333 10.0867 8.40667 10.1333 8.47333 10.1933C8.53333 10.26 8.58 10.3333 8.61333 10.4133C8.64667 10.4933 8.66667 10.58 8.66667 10.6667C8.66667 10.7533 8.64667 10.84 8.61333 10.92Z" fill="#FA5B4A" />
                        </g>
                      </svg>
                    </div>
                    <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] grow leading-[22px] min-h-px min-w-px relative shrink-0 text-[#fa5b4a] text-[13px]">{errors.birthDate}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Birth Time Input */}
        <div className="content-stretch flex gap-[24px] items-start justify-end relative shrink-0 w-full mb-[28px]">
          <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
            <div className="relative shrink-0 w-full">
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex gap-[10px] items-center px-[4px] py-0 relative w-full">
                  <p className="basis-0 font-['Inter:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#848484] text-[12px] tracking-[-0.24px]">태어난 시간</p>
                </div>
              </div>
            </div>
            <div className={`${birthTime && !errors.birthTime ? 'bg-[#f8f8f8]' : 'bg-white'} h-[48px] relative rounded-[12px] shrink-0 w-full`}>
              <div aria-hidden="true" className={`absolute border ${errors.birthTime ? 'border-[#fa5b4a]' : 'border-[#e7e7e7]'} border-solid inset-0 pointer-events-none rounded-[12px]`} />
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex gap-[10px] h-[48px] items-center px-[12px] py-0 relative w-full">
                  <input
                    type="text"
                    value={birthTime}
                    onChange={(e) => handleBirthTimeChange(e.target.value)}
                    placeholder="예: 21:00"
                    disabled={unknownTime}
                    className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[15px] tracking-[-0.45px] bg-transparent border-none outline-none placeholder:text-[#b7b7b7] disabled:text-neutral-300"
                    style={{ color: birthTime && !unknownTime ? '#000' : undefined }}
                  />
                </div>
              </div>
            </div>
            {errors.birthTime && (
              <div className="relative shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <div className="box-border content-stretch flex gap-[10px] items-center px-[4px] py-0 relative w-full">
                    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
                      <div className="relative shrink-0 size-[16px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <g id="info-circle">
                            <path d="M8 1.33333C4.32667 1.33333 1.33333 4.32667 1.33333 8C1.33333 11.6733 4.32667 14.6667 8 14.6667C11.6733 14.6667 14.6667 11.6733 14.6667 8C14.6667 4.32667 11.6733 1.33333 8 1.33333ZM7.5 5.33333C7.5 5.06 7.72667 4.83333 8 4.83333C8.27333 4.83333 8.5 5.06 8.5 5.33333V8.66667C8.5 8.94 8.27333 9.16667 8 9.16667C7.72667 9.16667 7.5 8.94 7.5 8.66667V5.33333ZM8.61333 10.92C8.58 11.0067 8.53333 11.0733 8.47333 11.14C8.40667 11.2 8.33333 11.2467 8.25333 11.28C8.17333 11.3133 8.08667 11.3333 8 11.3333C7.91333 11.3333 7.82667 11.3133 7.74667 11.28C7.66667 11.2467 7.59333 11.2 7.52667 11.14C7.46667 11.0733 7.42 11.0067 7.38667 10.92C7.35333 10.84 7.33333 10.7533 7.33333 10.6667C7.33333 10.58 7.35333 10.4933 7.38667 10.4133C7.42 10.3333 7.46667 10.26 7.52667 10.1933C7.59333 10.1333 7.66667 10.0867 7.74667 10.0533C7.90667 9.98667 8.09333 9.98667 8.25333 10.0533C8.33333 10.0867 8.40667 10.1333 8.47333 10.1933C8.53333 10.26 8.58 10.3333 8.61333 10.4133C8.64667 10.4933 8.66667 10.58 8.66667 10.6667C8.66667 10.7533 8.64667 10.84 8.61333 10.92Z" fill="#FA5B4A" />
                          </g>
                        </svg>
                      </div>
                      <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] grow leading-[22px] min-h-px min-w-px relative shrink-0 text-[#fa5b4a] text-[13px]">{errors.birthTime}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <button
            onClick={() => handleUnknownTimeChange(!unknownTime)}
            className="box-border content-stretch flex gap-[4px] items-center pb-0 pt-[24px] px-0 relative shrink-0 bg-transparent border-none cursor-pointer"
          >
            <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] relative shrink-0 text-[15px] text-neutral-600 text-nowrap tracking-[-0.45px] whitespace-pre">모르겠어요</p>
            <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 size-[44px]">
              {unknownTime ? (
                <div className="bg-[#48b2af] content-stretch flex gap-[10px] items-center justify-center relative rounded-[8px] shrink-0 size-[28px]">
                  <div className="relative shrink-0 size-[24px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g id="tick-circle">
                        <path d="M7 11.625L10.3294 16L17 9" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                      </g>
                    </svg>
                  </div>
                </div>
              ) : (
                <div className="bg-white relative rounded-[8px] shrink-0 size-[28px]">
                  <div aria-hidden="true" className="absolute border-2 border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
                </div>
              )}
            </div>
          </button>
        </div>

        {/* Phone Number Input */}
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full mb-[28px]">
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="box-border content-stretch flex gap-[10px] items-center px-[4px] py-0 relative w-full">
                <p className="basis-0 font-['Inter:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#848484] text-[12px] tracking-[-0.24px]">휴대폰 번호(풀이 완료 후 알림톡 발송에만 사용돼요)</p>
              </div>
            </div>
          </div>
          <div className={`${phoneNumber && !errors.phoneNumber ? 'bg-[#f8f8f8]' : 'bg-white'} h-[56px] relative rounded-[16px] shrink-0 w-full`}>
            <div aria-hidden="true" className={`absolute border ${errors.phoneNumber ? 'border-[#fa5b4a]' : 'border-[#e7e7e7]'} border-solid inset-0 pointer-events-none rounded-[16px]`} />
            <div className="flex flex-row items-center size-full">
              <div className="box-border content-stretch flex gap-[10px] h-[56px] items-center px-[12px] py-0 relative w-full">
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => handlePhoneNumberChange(e.target.value)}
                  placeholder="'-'하이픈 없이 숫자만 입력해 주세요"
                  className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[15px] tracking-[-0.45px] bg-transparent border-none outline-none text-black placeholder:text-[#b7b7b7]"
                />
              </div>
            </div>
          </div>
          {errors.phoneNumber && (
            <div className="relative shrink-0 w-full">
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex gap-[10px] items-center px-[4px] py-0 relative w-full">
                  <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
                    <div className="relative shrink-0 size-[16px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <g id="info-circle">
                          <path d="M8 1.33333C4.32667 1.33333 1.33333 4.32667 1.33333 8C1.33333 11.6733 4.32667 14.6667 8 14.6667C11.6733 14.6667 14.6667 11.6733 14.6667 8C14.6667 4.32667 11.6733 1.33333 8 1.33333ZM7.5 5.33333C7.5 5.06 7.72667 4.83333 8 4.83333C8.27333 4.83333 8.5 5.06 8.5 5.33333V8.66667C8.5 8.94 8.27333 9.16667 8 9.16667C7.72667 9.16667 7.5 8.94 7.5 8.66667V5.33333ZM8.61333 10.92C8.58 11.0067 8.53333 11.0733 8.47333 11.14C8.40667 11.2 8.33333 11.2467 8.25333 11.28C8.17333 11.3133 8.08667 11.3333 8 11.3333C7.91333 11.3333 7.82667 11.3133 7.74667 11.28C7.66667 11.2467 7.59333 11.2 7.52667 11.14C7.46667 11.0733 7.42 11.0067 7.38667 10.92C7.35333 10.84 7.33333 10.7533 7.33333 10.6667C7.33333 10.58 7.35333 10.4933 7.38667 10.4133C7.42 10.3333 7.46667 10.26 7.52667 10.1933C7.59333 10.1333 7.66667 10.0867 7.74667 10.0533C7.90667 9.98667 8.09333 9.98667 8.25333 10.0533C8.33333 10.0867 8.40667 10.1333 8.47333 10.1933C8.53333 10.26 8.58 10.3333 8.61333 10.4133C8.64667 10.4933 8.66667 10.58 8.66667 10.6667C8.66667 10.7533 8.64667 10.84 8.61333 10.92Z" fill="#FA5B4A" />
                        </g>
                      </svg>
                    </div>
                    <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] grow leading-[22px] min-h-px min-w-px relative shrink-0 text-[#fa5b4a] text-[13px]">{errors.phoneNumber}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Button */}
      <div className="fixed bottom-0 box-border content-stretch flex flex-col items-start left-1/2 shadow-[0px_-8px_16px_0px_rgba(255,255,255,0.76)] translate-x-[-50%] w-full max-w-[390px]">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <div className="bg-white relative shrink-0 w-full">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[20px] py-[12px] relative w-full">
                <button
                  onClick={handleSubmit}
                  disabled={!isFormValid() || isSubmitting}
                  className={`box-border content-stretch flex gap-[10px] h-[56px] items-center justify-center px-[12px] py-0 relative rounded-[16px] shrink-0 w-full border-none cursor-pointer ${isFormValid() && !isSubmitting ? 'bg-[#48b2af]' : 'bg-[#f8f8f8]'}`}
                >
                  <p className={`font-['Pretendard_Variable:Medium',sans-serif] leading-[25px] relative shrink-0 text-[16px] text-nowrap tracking-[-0.32px] whitespace-pre ${isFormValid() && !isSubmitting ? 'text-white' : 'text-[#b7b7b7]'}`}>
                    {isSubmitting ? '저장 중...' : '다음'}
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-[28px] relative shrink-0 w-full">
          <div className="absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" />
        </div>
      </div>
      </div>
    </div>
  );
}