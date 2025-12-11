import React, { useState } from 'react';
import { Home } from 'lucide-react';
import svgPaths from "../imports/svg-4dm4hpicdx";

interface Content {
  id: string;
  type: 'free' | 'paid';           // 유료/무료
  title: string;                    // 콘텐츠 제목
  status: 'loading' | 'failed' | 'ready' | 'published';  // 로딩중/실패/배포전/배포완료
  created_at: string;               // 생성일시
}

interface MasterContentListProps {
  onBack: () => void;
  onHome?: () => void;
  onContentClick?: (id: string) => void;
  onCreateClick?: () => void;
}

// 목업 데이터
const MOCK_CONTENTS: Content[] = [
  { id: '1', type: 'paid', title: '인생 지뢰밭 피해 가는 법', status: 'loading', created_at: '2025.09.04 10:18' },
  { id: '2', type: 'paid', title: '인생 지뢰밭 피해 가는 법', status: 'failed', created_at: '2025.09.04 10:18' },
  { id: '3', type: 'free', title: '인생 지뢰밭 피해 가는 법', status: 'ready', created_at: '2025.09.04 10:18' },
  { id: '4', type: 'paid', title: '인생 지뢰밭 피해 가는 법', status: 'published', created_at: '2025.09.04 10:18' },
  { id: '5', type: 'paid', title: '2025년 새해 운세 대공개', status: 'ready', created_at: '2025.09.05 14:30' },
  { id: '6', type: 'free', title: '금전운 상승의 비밀', status: 'ready', created_at: '2025.09.06 09:15' },
];

// 체크박스 컴포넌트
function Checkbox({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <div 
      onClick={(e) => {
        e.stopPropagation();
        onChange();
      }}
      className={`relative rounded-[2px] shrink-0 size-[18px] cursor-pointer ${
        checked ? 'bg-[#48b2af] border-2 border-[#48b2af]' : 'border-2 border-[#626262]'
      }`}
    >
      {checked && (
        <div className="absolute h-[7px] left-[4px] top-[5px] w-[11px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 9">
            <path d="M1 4.5L4.5 8L12 0.5" stroke="#EFF5FE" strokeWidth="1.8" />
          </svg>
        </div>
      )}
    </div>
  );
}

// 확인 다이얼로그 컴포넌트
function ConfirmDialog({ 
  message, 
  onConfirm, 
  onCancel 
}: { 
  message: string; 
  onConfirm: () => void; 
  onCancel: () => void; 
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-[16px] p-[24px] max-w-[320px] mx-[20px]">
        <p className="font-['Pretendard_Variable:SemiBold',sans-serif] text-[16px] text-[#1b1b1b] text-center mb-[24px]">
          {message}
        </p>
        <div className="flex gap-[12px]">
          <button
            onClick={onCancel}
            className="flex-1 h-[44px] rounded-[8px] border border-[#e0e0e0] font-['Pretendard_Variable:Regular',sans-serif] text-[14px] text-[#1b1b1b]"
          >
            아니요
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 h-[44px] rounded-[8px] bg-[#48b2af] font-['Pretendard_Variable:SemiBold',sans-serif] text-[14px] text-white"
          >
            예
          </button>
        </div>
      </div>
    </div>
  );
}

function ContentItem({ 
  content, 
  onClick, 
  isDeployMode, 
  isSelected, 
  onToggleSelect 
}: { 
  content: Content; 
  onClick: () => void;
  isDeployMode: boolean;
  isSelected: boolean;
  onToggleSelect: () => void;
}) {
  const getStatusText = (status: Content['status']) => {
    switch (status) {
      case 'loading': return '로딩중';
      case 'failed': return '실패';
      case 'ready': return '배포전';
      case 'published': return '배포완료';
      default: return '';
    }
  };

  const getTypeText = (type: Content['type']) => {
    return type === 'paid' ? '유료' : '무료';
  };

  return (
    <div 
      onClick={isDeployMode ? onToggleSelect : onClick}
      className={`bg-[#f0f8f8] min-h-[70px] relative rounded-[12px] shrink-0 w-full cursor-pointer hover:bg-[#e6f3f3] transition-colors ${
        isDeployMode ? 'pl-[48px] pr-[15px]' : 'px-[15px]'
      } py-[12px]`}
    >
      {/* 체크박스 (배포모드일 때만) */}
      {isDeployMode && (
        <div className="absolute left-[15px] top-1/2 -translate-y-1/2">
          <Checkbox checked={isSelected} onChange={onToggleSelect} />
        </div>
      )}
      
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <p className="font-['Pretendard_Variable:Regular',sans-serif] text-[11px] text-[#999999] mb-[6px]">
            [{getTypeText(content.type)}] {content.created_at}
          </p>
          <p className="font-['Pretendard_Variable:SemiBold',sans-serif] text-[15px] text-[#1b1b1b]">
            {content.title}
          </p>
        </div>
        <div className={`flex ${isDeployMode ? 'gap-0' : 'gap-[10px]'} items-center ml-[12px]`}>
          <div className="bg-[#f3f3f3] px-[12px] py-[6px] rounded-[8px]">
            <p className="font-['Pretendard_Variable:Regular',sans-serif] text-[13px] text-[#666666] whitespace-nowrap">
              {getStatusText(content.status)}
            </p>
          </div>
          {!isDeployMode && (
            <div className="rotate-180 shrink-0">
              <svg className="block size-[14px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g clipPath="url(#clip0_73_3248)">
                  <path d={svgPaths.pde8da40} stroke="#1B1B1B" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                  <path d="M14.917 8H1.91699" stroke="#1B1B1B" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                </g>
                <defs>
                  <clipPath id="clip0_73_3248">
                    <rect fill="white" height="16" width="16" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function MasterContentList({ onBack, onHome, onContentClick, onCreateClick }: MasterContentListProps) {
  const [contents, setContents] = useState<Content[]>(MOCK_CONTENTS);
  const [isDeployMode, setIsDeployMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // 배포전 콘텐츠만 필터링
  const readyContents = contents.filter(c => c.status === 'ready');
  
  // 표시할 콘텐츠 (배포모드일 때는 배포전만, 아니면 전체)
  const displayContents = isDeployMode ? readyContents : contents;
  
  // 전체선택 상태
  const isAllSelected = readyContents.length > 0 && selectedIds.size === readyContents.length;

  // 배포선택 모드 진입
  const handleEnterDeployMode = () => {
    setIsDeployMode(true);
    setSelectedIds(new Set());
  };

  // 배포선택 모드 해제
  const handleExitDeployMode = () => {
    setIsDeployMode(false);
    setSelectedIds(new Set());
  };

  // 전체선택 토글
  const handleToggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(readyContents.map(c => c.id)));
    }
  };

  // 개별 선택 토글
  const handleToggleSelect = (id: string) => {
    const newSelected = new Set(selectedIds);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedIds(newSelected);
  };

  // 배포하기 버튼 클릭
  const handleDeployClick = () => {
    if (selectedIds.size === 0) return;
    setShowConfirmDialog(true);
  };

  // 배포 실행
  const handleConfirmDeploy = () => {
    setShowConfirmDialog(false);
    
    // 배포 시뮬레이션 (실제로는 API 호출)
    const success = Math.random() > 0.1; // 90% 성공률
    
    if (success) {
      // 성공: 선택된 콘텐츠 상태를 '배포완료'로 변경
      setContents(prev => prev.map(content => 
        selectedIds.has(content.id) 
          ? { ...content, status: 'published' as const }
          : content
      ));
      setToastMessage('배포에 성공했어요.');
    } else {
      setToastMessage('배포에 실패했어요.');
    }
    
    // 토스트 표시
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2200);
    
    // 배포선택 모드 해제
    setIsDeployMode(false);
    setSelectedIds(new Set());
  };

  return (
    <div className="bg-white relative w-full min-h-screen flex justify-center">
      <div className="relative w-full max-w-[430px] min-h-screen flex flex-col bg-white">
        {/* Top Navigation - Fixed */}
        <div className="bg-white content-stretch flex flex-col items-start shrink-0 w-full sticky top-0 z-20 border-b border-[#f3f3f3]">
          <div className="h-[60px] content-stretch flex items-center justify-between relative shrink-0 w-full px-[16px]">
            <div 
              onClick={onBack}
              className="flex items-center justify-center relative shrink-0 size-[24px] cursor-pointer z-10"
            >
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d={svgPaths.p367f85c0} stroke="#030303" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
            <p className="font-['Pretendard_Variable:SemiBold',sans-serif] text-[18px] text-[#1b1b1b] tracking-[-0.2px] absolute left-1/2 transform -translate-x-1/2">
              마스터 콘텐츠 리스트
            </p>
            <div 
              onClick={onHome}
              className="flex items-center justify-center relative shrink-0 size-[24px] cursor-pointer z-10"
            >
              <Home className="size-[22px] text-[#030303]" />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="bg-white content-stretch flex items-center gap-[10px] px-[20px] py-[15px] shrink-0 w-full">
          {isDeployMode ? (
            <>
              <button 
                onClick={handleExitDeployMode}
                className="h-[42px] rounded-[8px] px-[24px] border border-[#e0e0e0] flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <p className="font-['Pretendard_Variable:Regular',sans-serif] text-[14px] text-[#1b1b1b] whitespace-nowrap">선택해제</p>
              </button>
              <button 
                onClick={handleDeployClick}
                disabled={selectedIds.size === 0}
                className={`h-[42px] rounded-[8px] flex-1 flex items-center justify-center transition-colors ${
                  selectedIds.size > 0 
                    ? 'bg-[#48b2af] hover:bg-[#3fa3a0]' 
                    : 'bg-[#e0e0e0] cursor-not-allowed'
                }`}
              >
                <p className={`font-['Pretendard_Variable:SemiBold',sans-serif] text-[14px] whitespace-nowrap ${
                  selectedIds.size > 0 ? 'text-white' : 'text-[#999999]'
                }`}>
                  배포하기
                </p>
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={handleEnterDeployMode}
                className="h-[42px] rounded-[8px] px-[24px] border border-[#e0e0e0] flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <p className="font-['Pretendard_Variable:Regular',sans-serif] text-[14px] text-[#1b1b1b] whitespace-nowrap">배포선택</p>
              </button>
              <button className="bg-[#48b2af] h-[42px] rounded-[8px] flex-1 flex items-center justify-center hover:bg-[#3fa3a0] transition-colors">
                <p className="font-['Pretendard_Variable:SemiBold',sans-serif] text-[14px] text-white whitespace-nowrap">파일로 등록하기</p>
              </button>
            </>
          )}
        </div>

        {/* 전체선택 (배포모드일 때만) */}
        {isDeployMode && (
          <div className="bg-white px-[20px] py-[10px]">
            <div 
              onClick={handleToggleSelectAll}
              className="flex items-center gap-[10px] cursor-pointer"
            >
              <Checkbox checked={isAllSelected} onChange={handleToggleSelectAll} />
              <p className="font-['Pretendard_Variable:Regular',sans-serif] text-[16px] text-black">
                전체선택
              </p>
            </div>
          </div>
        )}

        {/* Content List */}
        <div className="flex-1 flex flex-col gap-[10px] px-[20px] pb-[100px] overflow-y-auto">
          {displayContents.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-[80px]">
              <p className="font-['Pretendard_Variable:Regular',sans-serif] text-[14px] text-[#999999]">
                {isDeployMode ? '배포 가능한 콘텐츠가 없습니다' : '등록된 콘텐츠가 없습니다'}
              </p>
            </div>
          ) : (
            displayContents.map((content) => (
              <ContentItem 
                key={content.id} 
                content={content} 
                onClick={() => onContentClick?.(content.id)}
                isDeployMode={isDeployMode}
                isSelected={selectedIds.has(content.id)}
                onToggleSelect={() => handleToggleSelect(content.id)}
              />
            ))
          )}
        </div>

        {/* FAB (배포모드가 아닐 때만) */}
        {!isDeployMode && (
          <div className="fixed bottom-[40px] left-1/2 transform -translate-x-1/2 z-10">
            <button 
              onClick={onCreateClick}
              className="bg-[#48b2af] flex gap-[8px] h-[48px] items-center justify-center px-[24px] py-[12px] rounded-[30px] shadow-lg hover:bg-[#3fa3a0] transition-colors"
            >
              <span className="text-[18px]">✏️</span>
              <p className="font-['Pretendard_Variable:SemiBold',sans-serif] text-[15px] text-white whitespace-nowrap">콘텐츠 만들기</p>
            </button>
          </div>
        )}
      </div>

      {/* 확인 다이얼로그 */}
      {showConfirmDialog && (
        <ConfirmDialog
          message="선택한 콘텐츠를 운영 서버에 배포하시겠어요?"
          onConfirm={handleConfirmDeploy}
          onCancel={() => setShowConfirmDialog(false)}
        />
      )}

      {/* 토스트 메시지 */}
      {showToast && (
        <div className="fixed bottom-[50px] left-1/2 -translate-x-1/2 bg-[#333333] text-white px-5 py-3 rounded-[99px] text-[14px] font-medium z-50 shadow-lg whitespace-nowrap animate-in fade-in slide-in-from-bottom-5 duration-300">
          {toastMessage}
        </div>
      )}
    </div>
  );
}