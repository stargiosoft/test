import React, { useState } from 'react';
import { Home, X } from 'lucide-react';
import svgPaths from "../imports/svg-a0mkm9p61i";
import { ContentFormData } from './MasterContentCreate';

interface MasterContentQuestionsProps {
  onBack: () => void;
  onHome?: () => void;
  onSave?: (data: ContentFullData) => void;
  formData: ContentFormData | null;
}

export interface Question {
  id: string;
  type: 'saju' | 'tarot';
  content: string;
}

export interface ContentFullData {
  basicInfo: ContentFormData;
  questions: Question[];
}

// 라디오 버튼 컴포넌트
function RadioButton({ 
  checked, 
  label, 
  onChange 
}: { 
  checked: boolean; 
  label: string; 
  onChange: () => void;
}) {
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

// 질문지 카드 컴포넌트
function QuestionCard({
  question,
  index,
  onTypeChange,
  onContentChange,
  onDelete,
  canDelete,
}: {
  question: Question;
  index: number;
  onTypeChange: (type: 'saju' | 'tarot') => void;
  onContentChange: (content: string) => void;
  onDelete: () => void;
  canDelete: boolean;
}) {
  return (
    <div className="bg-white flex flex-col gap-[15px] px-[30px] py-[20px] w-full">
      {/* 제목과 삭제 버튼 */}
      <div className="flex items-center justify-between">
        <p className="font-['Pretendard_Variable:Medium',sans-serif] text-[16px] text-black">
          질문지 {index + 1}
        </p>
        {canDelete && (
          <button
            onClick={onDelete}
            className="size-[16px] flex items-center justify-center text-[#d9d9d9] hover:text-[#999999] transition-colors"
          >
            <X className="size-full" strokeWidth={2} />
          </button>
        )}
      </div>

      {/* 사주/타로 선택 */}
      <div className="flex gap-[40px]">
        <RadioButton
          checked={question.type === 'saju'}
          label="사주"
          onChange={() => onTypeChange('saju')}
        />
        <RadioButton
          checked={question.type === 'tarot'}
          label="타로"
          onChange={() => onTypeChange('tarot')}
        />
      </div>

      {/* 질문지 입력 */}
      <input
        type="text"
        value={question.content}
        onChange={(e) => onContentChange(e.target.value)}
        placeholder="콘텐츠 질문지"
        className="w-full h-[40px] rounded-[8px] border border-[gainsboro] px-[18px] font-['Pretendard_Variable:Regular',sans-serif] text-[14px] text-black placeholder:text-[#a7a7a7]"
      />
    </div>
  );
}

export default function MasterContentQuestions({
  onBack,
  onHome,
  onSave,
  formData,
}: MasterContentQuestionsProps) {
  const [questions, setQuestions] = useState<Question[]>([
    { id: '1', type: 'saju', content: '' },
  ]);

  // 질문지 추가
  const handleAddQuestion = () => {
    const newId = (Math.max(...questions.map(q => parseInt(q.id))) + 1).toString();
    setQuestions([...questions, { id: newId, type: 'saju', content: '' }]);
  };

  // 질문지 삭제
  const handleDeleteQuestion = (id: string) => {
    if (questions.length > 1) {
      setQuestions(questions.filter(q => q.id !== id));
    }
  };

  // 질문지 타입 변경
  const handleTypeChange = (id: string, type: 'saju' | 'tarot') => {
    setQuestions(questions.map(q => (q.id === id ? { ...q, type } : q)));
  };

  // 질문지 내용 변경
  const handleContentChange = (id: string, content: string) => {
    setQuestions(questions.map(q => (q.id === id ? { ...q, content } : q)));
  };

  // 저장하기
  const handleSave = () => {
    // 모든 질문지가 입력되었는지 확인
    const allFilled = questions.every(q => q.content.trim());
    if (!allFilled) {
      alert('모든 질문지를 입력해주세요.');
      return;
    }

    onSave?.({
      basicInfo: formData!,
      questions,
    });
  };

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
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 9 17"
              >
                <path
                  d={svgPaths.pdb11c00}
                  stroke="#030303"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  transform="rotate(180 4.5 8.5)"
                />
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

        {/* Questions List */}
        <div className="flex-1 flex flex-col gap-[8px] pb-[140px] overflow-y-auto mt-[8px]">
          {questions.map((question, index) => (
            <QuestionCard
              key={question.id}
              question={question}
              index={index}
              onTypeChange={(type) => handleTypeChange(question.id, type)}
              onContentChange={(content) => handleContentChange(question.id, content)}
              onDelete={() => handleDeleteQuestion(question.id)}
              canDelete={questions.length > 1}
            />
          ))}

          {/* 질문지 추가 버튼 */}
          <div className="bg-white px-[30px] py-[20px] w-full">
            <button
              onClick={handleAddQuestion}
              className="w-full h-[40px] rounded-[8px] border border-[#48b2af] flex items-center justify-center hover:bg-[#f0f8f8] transition-colors"
            >
              <p className="font-['Pretendard_Variable:Regular',sans-serif] text-[16px] text-black">
                질문지 추가
              </p>
            </button>
          </div>
        </div>

        {/* Fixed Bottom Buttons */}
        <div className="fixed bottom-0 left-0 right-0 bg-white px-[35px] py-[20px] max-w-[430px] mx-auto w-full">
          <div className="flex gap-[20px]">
            <button
              onClick={onBack}
              className="w-[170px] h-[52px] rounded-[8px] border border-[#f0f0f0] flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <p className="font-['Pretendard_Variable:Regular',sans-serif] text-[18px] text-black">
                이전
              </p>
            </button>
            <button
              onClick={handleSave}
              className="flex-1 h-[52px] rounded-[8px] bg-[#48b2af] flex items-center justify-center hover:bg-[#3fa3a0] transition-colors"
            >
              <p className="font-['Pretendard_Variable:Bold',sans-serif] text-[18px] text-white">
                저장하기
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}