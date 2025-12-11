import React, { useState } from 'react';
import { Home, ChevronDown } from 'lucide-react';
import svgPaths from "../imports/svg-a0mkm9p61i";

interface MasterContentCreateProps {
  onBack: () => void;
  onHome?: () => void;
  onNext?: (formData: ContentFormData) => void;
}

export interface ContentFormData {
  content_type: 'paid' | 'free';
  category_main: string;
  category_sub: string;
  questioner_info: string;
  title: string;
  description: string;
  user_concern: string;
}

const MAIN_CATEGORIES = ['개인운세', '연애', '이별', '재물', '직업', '시험/학업', '건강', '인간관계', '자녀', '이사/매매', '기타'];
const SUB_CATEGORIES: Record<string, string[]> = {
  '연애': ['썸/연애 시작', '현재 연애', '재회', '짝사랑'],
  '이별': ['이별 고민', '이별 후'],
  '재물': ['금전운', '투자', '사업', '부동산', '로또'],
  '직업': ['취업', '이직', '승진', '창업', '업무'],
  '건강': ['신체건강', '정신건강', '다이어트', '수술', '회복'],
  '시험/학업': ['시험', '진학', '유학', '학점', '졸업'],
  '개인운세': ['전체운', '오늘의운세', '주간운세', '월간운세', '연간운세'],
  '인간관계': ['가족', '친구', '직장', '이웃', '기타'],
  '자녀': ['임신', '출산', '육아', '교육', '진로'],
  '이사/매매': ['이사시기', '방향', '매매시기', '가격', '풍수'],
  '기타': ['기타'],
};

// 라디오 버튼 컴포넌트
function RadioButton({ checked, label, onChange }: { checked: boolean; label: string; onChange: () => void }) {
  return (
    <div 
      onClick={onChange}
      className="flex items-center gap-[10px] cursor-pointer"
    >
      <div className={`relative size-[20px] rounded-full ${
        checked ? 'bg-[#48b2af] border-2 border-[#48b2af]' : 'bg-[#c7c7c7] border-2 border-[#c7c7c7]'
      }`}>
        <div className={`absolute inset-0 m-auto rounded-full bg-white ${
          checked ? 'size-[12px]' : 'size-[18px]'
        }`} />
      </div>
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] text-[12px] text-black">
        {label}
      </p>
    </div>
  );
}

// 드롭다운 컴포넌트
function Dropdown({ 
  value, 
  placeholder, 
  options, 
  onChange,
  disabled = false
}: { 
  value: string; 
  placeholder: string; 
  options: string[]; 
  onChange: (value: string) => void;
  disabled?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      <div
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`h-[40px] rounded-[8px] border border-[gainsboro] flex items-center justify-between px-[18px] ${
          disabled ? 'bg-gray-50 cursor-not-allowed' : 'bg-white cursor-pointer'
        }`}
      >
        <p className={`font-['Pretendard_Variable:Regular',sans-serif] text-[14px] ${
          value ? 'text-black' : 'text-[#a7a7a7]'
        }`}>
          {value || placeholder}
        </p>
        <ChevronDown className={`size-[16px] text-[#79808a] transition-transform ${
          isOpen ? 'rotate-180' : ''
        }`} />
      </div>
      
      {isOpen && !disabled && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-[44px] left-0 right-0 bg-white border border-[gainsboro] rounded-[8px] shadow-lg z-20 max-h-[200px] overflow-y-auto">
            {options.map((option) => (
              <div
                key={option}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className="px-[18px] py-[12px] hover:bg-[#f0f8f8] cursor-pointer font-['Pretendard_Variable:Regular',sans-serif] text-[14px] text-black"
              >
                {option}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function MasterContentCreate({ onBack, onHome, onNext }: MasterContentCreateProps) {
  const [formData, setFormData] = useState<ContentFormData>({
    content_type: 'paid',
    category_main: '',
    category_sub: '',
    questioner_info: '',
    title: '',
    description: '',
    user_concern: '',
  });

  const handleMainCategoryChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      category_main: value,
      category_sub: '', // 대분류 변경 시 중분류 초기화
    }));
  };

  const handleNext = () => {
    // 필수 필드 검증
    if (!formData.category_main) {
      alert('대분류를 선택해주세요.');
      return;
    }
    if (!formData.category_sub) {
      alert('중분류를 선택해주세요.');
      return;
    }
    if (!formData.title.trim()) {
      alert('콘텐츠 제목을 입력해주세요.');
      return;
    }
    
    onNext?.(formData);
  };

  const isFormValid = formData.category_main && formData.category_sub && formData.title.trim();

  return (
    <div className="bg-[#f9f9f9] relative w-full min-h-screen flex justify-center">
      <div className="relative w-full max-w-[430px] min-h-screen flex flex-col bg-[#f9f9f9]">
        {/* Top Navigation */}
        <div className="bg-white content-stretch flex flex-col items-start shrink-0 w-full">
          <div className="h-[60px] content-stretch flex items-center justify-between relative shrink-0 w-full px-[16px]">
            <div 
              onClick={onBack}
              className="flex items-center justify-center relative shrink-0 size-[24px] cursor-pointer z-10"
            >
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 17">
                <path d={svgPaths.pdb11c00} stroke="#030303" strokeLinecap="round" strokeWidth="1.5" transform="rotate(180 4.5 8.5)" />
              </svg>
            </div>
            <p className="font-['Pretendard_Variable:SemiBold',sans-serif] text-[18px] text-[#1b1b1b] tracking-[-0.2px] absolute left-1/2 transform -translate-x-1/2">
              마스터 콘텐츠 만들기
            </p>
            <div 
              onClick={onHome}
              className="flex items-center justify-center relative shrink-0 size-[24px] cursor-pointer z-10"
            >
              <Home className="size-[22px] text-[#030303]" />
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="flex-1 bg-white mt-[8px] px-[30px] pt-[35px] pb-[120px] overflow-y-auto">
          {/* 기본 정보 타이틀 */}
          <div className="mb-[15px]">
            <p className="font-['Pretendard_Variable:Medium',sans-serif] text-[16px] text-black">
              기본 정보
            </p>
          </div>

          {/* 유료/무료 선택 */}
          <div className="flex gap-[40px] mb-[15px]">
            <RadioButton 
              checked={formData.content_type === 'paid'} 
              label="유료" 
              onChange={() => setFormData(prev => ({ ...prev, content_type: 'paid' }))}
            />
            <RadioButton 
              checked={formData.content_type === 'free'} 
              label="무료" 
              onChange={() => setFormData(prev => ({ ...prev, content_type: 'free' }))}
            />
          </div>

          {/* 대분류 */}
          <div className="mb-[15px]">
            <Dropdown
              value={formData.category_main}
              placeholder="대분류"
              options={MAIN_CATEGORIES}
              onChange={handleMainCategoryChange}
            />
          </div>

          {/* 중분류 */}
          <div className="mb-[15px]">
            <Dropdown
              value={formData.category_sub}
              placeholder="중분류"
              options={formData.category_main ? SUB_CATEGORIES[formData.category_main] : []}
              onChange={(value) => setFormData(prev => ({ ...prev, category_sub: value }))}
              disabled={!formData.category_main}
            />
          </div>

          {/* 질문자 정보 */}
          <div className="mb-[15px]">
            <textarea
              value={formData.questioner_info}
              onChange={(e) => setFormData(prev => ({ ...prev, questioner_info: e.target.value }))}
              placeholder="질문자 정보"
              className="w-full h-[60px] rounded-[8px] border border-[gainsboro] px-[18px] py-[12px] font-['Pretendard_Variable:Regular',sans-serif] text-[14px] text-black placeholder:text-[#a7a7a7] resize-none"
            />
          </div>

          {/* 콘텐츠 제목 */}
          <div className="mb-[15px]">
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              placeholder="콘텐츠 제목"
              className="w-full h-[40px] rounded-[8px] border border-[gainsboro] px-[18px] font-['Pretendard_Variable:Regular',sans-serif] text-[14px] text-black placeholder:text-[#a7a7a7]"
            />
          </div>

          {/* 콘텐츠 소개글 */}
          <div className="mb-[15px]">
            <textarea
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="콘텐츠 소개글"
              className="w-full h-[100px] rounded-[8px] border border-[gainsboro] px-[18px] py-[12px] font-['Pretendard_Variable:Regular',sans-serif] text-[14px] text-black placeholder:text-[#a7a7a7] resize-none"
            />
          </div>

          {/* 사용자 고민글 */}
          <div className="mb-[15px]">
            <textarea
              value={formData.user_concern}
              onChange={(e) => setFormData(prev => ({ ...prev, user_concern: e.target.value }))}
              placeholder="사용자 고민글"
              className="w-full h-[60px] rounded-[8px] border border-[gainsboro] px-[18px] py-[12px] font-['Pretendard_Variable:Regular',sans-serif] text-[14px] text-black placeholder:text-[#a7a7a7] resize-none"
            />
          </div>
        </div>

        {/* Fixed Bottom Button */}
        <div className="fixed bottom-0 left-0 right-0 bg-white px-[35px] py-[20px] max-w-[430px] mx-auto w-full">
          <button
            onClick={handleNext}
            disabled={!isFormValid}
            className={`w-full h-[52px] rounded-[8px] flex items-center justify-center transition-colors ${
              isFormValid 
                ? 'bg-[#48b2af] hover:bg-[#3fa3a0]' 
                : 'bg-[#e0e0e0] cursor-not-allowed'
            }`}
          >
            <p className={`font-['Pretendard_Variable:SemiBold',sans-serif] text-[18px] ${
              isFormValid ? 'text-white' : 'text-[#999999]'
            }`}>
              다음
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}