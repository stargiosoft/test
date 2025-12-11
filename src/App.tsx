import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import svgPaths from "./imports/svg-hnds6iuzig";
import img from "figma:asset/bada0ef4d1435fa0ce6093a3b4ba6705c61d336f.png";
import img1 from "figma:asset/60488b980e0454d1287dc1dccdb92e92d6a121bf.png";
import img2 from "figma:asset/31ed117381a404a1d1dbfe7a61652b15d7f28433.png";
import img3 from "figma:asset/6012c1d69cfa986c13102e487d4744a1f018f550.png";
import ProductDetail from './components/ProductDetail';
import FreeProductDetail from './components/FreeProductDetail';
import Payment from './components/Payment';
import BirthInfoInput from './components/BirthInfoInput';
import SajuDetail from './components/SajuDetail';
import FreeSajuDetail from './components/FreeSajuDetail';

import { User } from 'lucide-react';
import ProfilePage from './components/ProfilePage';
import LoginPage from './components/LoginPage';
import TermsPage from './components/TermsPage';
import KakaoCallback from './components/KakaoCallback';
import PaymentComplete from './components/PaymentComplete';
import MasterContentList from './components/MasterContentList';
import MasterContentCreate from './components/MasterContentCreate';
import MasterContentQuestions from './components/MasterContentQuestions';
import { ContentFormData } from './components/MasterContentCreate';

// Product data types
type ProductType = 'free' | 'paid';
type Category = '전체' | '개인운세' | '연애' | '이별' | '재물' | '직업';

interface Product {
  id: number;
  title: string;
  description?: string;
  type: ProductType;
  category: Category;
  image: string;
  isFeatured?: boolean;
  fullDescription: string;
  price: number;
  discountPrice: number;
  discountPercent: number;
}

// Generate mock product data
const generateProducts = (): Product[] => {
  const products: Product[] = [
    {
      id: 1,
      title: '내 연인은 어디에 있을까?',
      type: 'paid',
      category: '연애',
      image: img,
      isFeatured: true,
      fullDescription: '달콤했던 시작과 달리, 요즘은 마음이 흔들리지 않나요? 사소한 말에도 불안해지고, 혹시 놓쳐버릴까 두려운 지금. 겉으로는 보이지 않는 사랑의 방향을 막연한 해석이 아닌, 그 사람의 본질부터 관계의 결말까지 예측하는 소름돋는 정확성을 경험하세요.',
      price: 25800,
      discountPrice: 12900,
      discountPercent: 50,
    },
    {
      id: 2,
      title: '내 곁의 사람, 다른 이에게 끌리고 있을까?',
      type: 'paid',
      category: '연애',
      image: img1,
      fullDescription: '불안한 마음, 그 감정은 단순한 기우일까요? 아니면 예감일까요? 타로와 사주로 ��신의 연인이 지금 어떤 마음을 품고 있는지, 그리고 앞으로 어떤 변화가 올지 명확하게 알려드립니다.',
      price: 25800,
      discountPrice: 12900,
      discountPercent: 50,
    },
    {
      id: 3,
      title: '혹시 내가 놓치고 있는 사랑의 기회가 있진 않을까, 운명처럼 다가올 인연은 이미 내 곁에 와 있을지도 모릅니다.',
      type: 'free',
      category: '연애',
      image: img2,
      fullDescription: '진정한 사랑을 찾고 있다면, 이미 당신 곁에 있는 인연을 놓치고 있을지도 모릅니다. 운명적인 만남의 신호를 포착하고, 놓치지 마세요.',
      price: 0,
      discountPrice: 0,
      discountPercent: 0,
    },
    {
      id: 4,
      title: '바람의 징조, 이미 시작 됐을까?',
      type: 'free',
      category: '연애',
      image: img3,
      fullDescription: '작은 변화들이 느껴지시나요? 혹시 바람피울 징조는 아닐까요? 타로가 당신의 의심을 명확하게 해소해드립니다.',
      price: 0,
      discountPrice: 0,
      discountPercent: 0,
    },
    {
      id: 5,
      title: '2025년 나의 재물운은?',
      type: 'paid',
      category: '재물',
      image: img1,
      fullDescription: '새해를 맞아 당신의 재물운이 어떻게 흘러갈지 궁금하신가요? 2025년 한 해 동안의 재물 흐름과 주의해야 할 시기를 상세히 알려드립니다.',
      price: 25800,
      discountPrice: 12900,
      discountPercent: 50,
    },
    {
      id: 6,
      title: '올해 내가 받을 횡재는?',
      type: 'free',
      category: '재물',
      image: img2,
      fullDescription: '예상치 못한 재물운이 찾아올 시기를 알려드립니다. 준비된 자에게만 찾아오는 기회를 놓치지 마세요.',
      price: 0,
      discountPrice: 0,
      discountPercent: 0,
    },
    {
      id: 7,
      title: '지금 이직해도 괜찮을까?',
      type: 'paid',
      category: '직업',
      image: img3,
      fullDescription: '이직을 고민 중이신가요? 지금이 적기인지, 더 기다려야 하는지 사주와 타로로 명확하게 답해드립니다.',
      price: 25800,
      discountPrice: 12900,
      discountPercent: 50,
    },
    {
      id: 8,
      title: '나에게 맞는 직업은 무엇일까?',
      type: 'free',
      category: '직업',
      image: img1,
      fullDescription: '당신의 타고난 재능과 기질에 맞는 직업을 알려드립니다. 적성에 맞는 일을 찾아 행복한 삶을 살아가세요.',
      price: 0,
      discountPrice: 0,
      discountPercent: 0,
    },
    {
      id: 9,
      title: '올해 나의 전반적인 운세',
      type: 'paid',
      category: '개인운세',
      image: img2,
      fullDescription: '한 해 동안의 전반적인 운세를 연애, 재물, 건강, 직업 등 다양한 분야에서 상세하게 분석해드립니다.',
      price: 25800,
      discountPrice: 12900,
      discountPercent: 50,
    },
    {
      id: 10,
      title: '오늘의 운세 확인하기',
      type: 'free',
      category: '개인운세',
      image: img3,
      fullDescription: '오늘 하루를 어떻게 보내면 좋을지, 주의해야 할 점은 무엇인지 타로로 알려드립니다.',
      price: 0,
      discountPrice: 0,
      discountPercent: 0,
    },
    {
      id: 11,
      title: '이별 후 재회 가능성은?',
      type: 'paid',
      category: '이별',
      image: img1,
      fullDescription: '헤어진 연인과의 재회, 가능할까요? 두 사람의 인연이 다시 이어질 수 있는지 타로와 사주로 정확하게 예측해드립니다.',
      price: 25800,
      discountPrice: 12900,
      discountPercent: 50,
    },
    {
      id: 12,
      title: '헤어진 연인, 아직 나를 생각할까?',
      type: 'free',
      category: '이별',
      image: img2,
      fullDescription: '이별 후에도 마음이 쓰이는 그 사람, 혹시 아직도 당신을 생각하고 있을까요? 타로가 상대의 진심을 전해드립니다.',
      price: 0,
      discountPrice: 0,
      discountPercent: 0,
    },
    {
      id: 13,
      title: '내 사주에 숨겨진 비밀',
      type: 'paid',
      category: '개인운세',
      image: img3,
      fullDescription: '당신의 사주에는 어떤 비밀이 숨겨져 있을까요? 타고난 운명과 앞으로의 길을 상세히 풀이해드립니다.',
      price: 25800,
      discountPrice: 12900,
      discountPercent: 50,
    },
    {
      id: 14,
      title: '나의 타로 운세 보기',
      type: 'free',
      category: '개인운세',
      image: img1,
      fullDescription: '타로 카드가 전하는 당신의 운세를 확인해보세요. 지금 당장 필요한 조언을 받아보실 수 있습니다.',
      price: 0,
      discountPrice: 0,
      discountPercent: 0,
    },
    {
      id: 15,
      title: '소울메이트는 언제 만날까?',
      type: 'paid',
      category: '연애',
      image: img2,
      fullDescription: '운명의 상대, 소울메이트를 언제 만날 수 있을까요? 만남의 시기와 장소, 그리고 인연을 놓치지 않는 방법을 알려드립니다.',
      price: 25800,
      discountPrice: 12900,
      discountPercent: 50,
    },
    {
      id: 16,
      title: '내 이상형은 어떤 사람?',
      type: 'free',
      category: '연애',
      image: img3,
      fullDescription: '당신에게 잘 맞는 이상형은 어떤 사람일까요? 타고난 기질을 분석하여 최적의 파트너 유형을 알려드립니다.',
      price: 0,
      discountPrice: 0,
      discountPercent: 0,
    },
    {
      id: 17,
      title: '승진 운세 확인하기',
      type: 'paid',
      category: '직업',
      image: img1,
      fullDescription: '승진의 기회가 언제 찾아올까요? 직장에서의 성공 시기와 준비해야 할 것들을 알려드립니다.',
      price: 25800,
      discountPrice: 12900,
      discountPercent: 50,
    },
    {
      id: 18,
      title: '직장 내 인간관계 운세',
      type: 'free',
      category: '직업',
      image: img2,
      fullDescription: '직장 내 인간관계로 고민이신가요? 어려운 관계를 개선하고 좋은 인연을 만드는 방법을 알려드립니다.',
      price: 0,
      discountPrice: 0,
      discountPercent: 0,
    },
    {
      id: 19,
      title: '로또 당첨 가능성은?',
      type: 'paid',
      category: '재물',
      image: img3,
      fullDescription: '로또 당첨의 꿈을 꾸고 계신가요? 당신의 재물운과 행운의 시기를 분석해드립니다.',
      price: 25800,
      discountPrice: 12900,
      discountPercent: 50,
    },
    {
      id: 20,
      title: '재물운 상승 시기는?',
      type: 'free',
      category: '재물',
      image: img1,
      fullDescription: '재물운이 상승하는 시기를 알고 계신가요? 준비된 자에게 찾아오는 기회를 놓치지 마세요.',
      price: 0,
      discountPrice: 0,
      discountPercent: 0,
    },
  ];
  
  // Generate more products for infinite scroll
  const additionalProducts: Product[] = [];
  for (let i = 21; i <= 100; i++) {
    const categories: Category[] = ['개인운세', '연애', '이별', '재물', '직업'];
    const types: ProductType[] = ['free', 'paid'];
    const images = [img1, img2, img3];
    const isPaid = types[i % 2] === 'paid';
    
    additionalProducts.push({
      id: i,
      title: `운세 상품 ${i}번`,
      type: types[i % 2],
      category: categories[i % categories.length],
      image: images[i % images.length],
      fullDescription: `운세 상품 ${i}번에 대한 상세한 설명입니다. 타로와 사주를 통해 당신의 운명을 정확하게 예측해드립니다.`,
      price: isPaid ? 25800 : 0,
      discountPrice: isPaid ? 12900 : 0,
      discountPercent: isPaid ? 50 : 0,
    });
  }
  
  return [...products, ...additionalProducts];
};

const allProducts = generateProducts();

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
            <path d={svgPaths.p3c576cf0} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, black)" />
            <path d={svgPaths.p1667d738} fill="var(--fill-0, black)" id="Combined Shape" opacity="0.4" />
            <path d={svgPaths.p18fdac00} fill="var(--fill-0, black)" id="Rectangle_2" />
          </g>
          <path d={svgPaths.p344d52f0} fill="var(--fill-0, black)" id="Wifi" />
          <path d={svgPaths.p3694c600} fill="var(--fill-0, black)" id="Mobile Signal" />
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

function User() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <g id="user">
        <g id="Vector" opacity="0"></g>
      </g>
    </svg>
  );
}

function Box() {
  return (
    <div className="absolute contents inset-0" data-name="Box">
      <User />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute h-[19px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 19">
        <g id="Icon">
          <path d={svgPaths.p1ceabf00} fill="var(--fill-0, #848484)" id="Vector" />
          <path d={svgPaths.p6324f00} fill="var(--fill-0, #848484)" id="Rectangle 569" />
        </g>
      </svg>
    </div>
  );
}

function Icon1({ onUserIconClick }: { onUserIconClick?: () => void }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Icon">
      <div className="h-[27px] relative shrink-0 w-[80px]" data-name="Common / Logo">
        <div className="absolute bottom-[28.44%] left-0 right-[79.05%] top-[6.7%]" data-name="Vector">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(21, 21, 21, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 18">
              <path d={svgPaths.p125e7500} fill="var(--fill-0, #151515)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[7.75%_51.93%_28.16%_27.15%]" data-name="Vector">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(21, 21, 21, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 18">
              <path d={svgPaths.p6d74400} fill="var(--fill-0, #151515)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[2.2%_47.26%_21.76%_43.61%]" data-name="Vector">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(21, 21, 21, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 21">
              <path d={svgPaths.p3a63c900} fill="var(--fill-0, #151515)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[2.2%_74.17%_21.76%_16.7%]" data-name="Vector">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(21, 21, 21, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 21">
              <path d={svgPaths.p38191700} fill="var(--fill-0, #151515)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[39.15%_22.23%_31.85%_52.48%]" data-name="Vector">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(21, 21, 21, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 8">
              <path d={svgPaths.pe66ed00} fill="var(--fill-0, #151515)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[63.35%] left-[54.55%] right-[24.53%] top-0" data-name="Vector">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(21, 21, 21, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 10">
              <path d={svgPaths.p1fd9a700} fill="var(--fill-0, #151515)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[21.76%] left-[94.83%] right-0 top-[2.23%]" data-name="Vector">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(21, 21, 21, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 21">
              <path d={svgPaths.p21594500} fill="var(--fill-0, #151515)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[2.63%_5.75%_22.23%_85.73%]" data-name="Vector">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(21, 21, 21, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 21">
              <path d={svgPaths.p1b6f5680} fill="var(--fill-0, #151515)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[4.28%_11.29%_24.97%_75.49%]" data-name="Vector">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(21, 21, 21, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 20">
              <path d={svgPaths.p131a3380} fill="var(--fill-0, #151515)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-0 left-[54.48%] right-[14.07%] top-[56.28%]" data-name="Vector">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(21, 21, 21, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 12">
              <path d={svgPaths.p1cfcff80} fill="var(--fill-0, #151515)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div 
        onClick={onUserIconClick}
        className="box-border content-stretch flex gap-[10px] items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px] cursor-pointer" 
        data-name="Right Action"
      >
        <div className="relative shrink-0 size-[24px]" data-name="Icons">
          <Box />
          <Icon />
        </div>
      </div>
    </div>
  );
}

interface TabContainerProps {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
}

function TabContainer({ selectedCategory, onCategoryChange }: TabContainerProps) {
  const categories: Category[] = ['전체', '개인운세', '연애', '이별', '재물', '직업'];
  
  return (
    <div className="content-stretch flex items-center overflow-x-auto relative shrink-0 w-full" data-name="Tab Container">
      {categories.map((category) => (
        <div
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[8px] relative rounded-[12px] shrink-0 cursor-pointer ${
            selectedCategory === category ? 'bg-[#f8f8f8]' : ''
          }`}
          data-name="Navigation / Tab Item"
        >
          <p
            className={`${
              selectedCategory === category
                ? "font-['Pretendard_Variable:SemiBold',sans-serif] text-[#151515]"
                : "font-['Pretendard_Variable:Medium',sans-serif] text-[#999999]"
            } leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap tracking-[-0.45px] whitespace-pre`}
          >
            {category}
          </p>
        </div>
      ))}
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[8px] relative rounded-[12px] shrink-0" data-name="Navigation / Tab Item">
        <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#999999] text-[15px] text-nowrap tracking-[-0.45px] whitespace-pre">Tab Item</p>
      </div>
    </div>
  );
}

interface SegmentedControlProps {
  selectedType: 'all' | 'paid' | 'free';
  onTypeChange: (type: 'all' | 'paid' | 'free') => void;
}

function SegmentedControl({ selectedType, onTypeChange }: SegmentedControlProps) {
  return (
    <div className="bg-[#f9f9f9] relative rounded-[16px] shrink-0 w-full" data-name="Segmented Control">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start p-[6px] relative w-full">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
            <div
              onClick={() => onTypeChange('all')}
              className={`basis-0 grow min-h-px min-w-px relative rounded-[12px] shrink-0 cursor-pointer ${
                selectedType === 'all' ? 'bg-white shadow-[6px_7px_12px_0px_rgba(0,0,0,0.04),-3px_-3px_12px_0px_rgba(0,0,0,0.04)]' : ''
              }`}
            >
              <div className="flex flex-row items-center justify-center size-full">
                <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative w-full">
                  <div
                    className={`flex flex-col ${
                      selectedType === 'all'
                        ? "font-['Pretendard_Variable:SemiBold',sans-serif] text-[#151515]"
                        : "font-['Pretendard_Variable:Medium',sans-serif] text-[#999999]"
                    } justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap tracking-[-0.42px]`}
                  >
                    <p className="leading-[22px] whitespace-pre">종합</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={() => onTypeChange('paid')}
              className={`basis-0 grow min-h-px min-w-px relative rounded-[12px] shrink-0 cursor-pointer ${
                selectedType === 'paid' ? 'bg-white shadow-[6px_7px_12px_0px_rgba(0,0,0,0.04),-3px_-3px_12px_0px_rgba(0,0,0,0.04)]' : ''
              }`}
            >
              <div className="flex flex-row items-center justify-center size-full">
                <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative w-full">
                  <div
                    className={`flex flex-col ${
                      selectedType === 'paid'
                        ? "font-['Pretendard_Variable:SemiBold',sans-serif] text-[#151515]"
                        : "font-['Pretendard_Variable:Medium',sans-serif] text-[#999999]"
                    } justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap tracking-[-0.42px]`}
                  >
                    <p className="leading-[22px] whitespace-pre">심화 해석판</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={() => onTypeChange('free')}
              className={`basis-0 grow min-h-px min-w-px relative rounded-[12px] shrink-0 cursor-pointer ${
                selectedType === 'free' ? 'bg-white shadow-[6px_7px_12px_0px_rgba(0,0,0,0.04),-3px_-3px_12px_0px_rgba(0,0,0,0.04)]' : ''
              }`}
            >
              <div className="flex flex-row items-center justify-center size-full">
                <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] relative w-full">
                  <div
                    className={`flex flex-col ${
                      selectedType === 'free'
                        ? "font-['Pretendard_Variable:SemiBold',sans-serif] text-[#151515]"
                        : "font-['Pretendard_Variable:Medium',sans-serif] text-[#999999]"
                    } justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap tracking-[-0.42px]`}
                  >
                    <p className="leading-[22px] whitespace-pre">무료 체험판</p>
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

function TopNavigationContainer({
  selectedCategory,
  onCategoryChange,
  selectedType,
  onTypeChange,
  onUserIconClick
}: {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
  selectedType: 'all' | 'paid' | 'free';
  onTypeChange: (type: 'all' | 'paid' | 'free') => void;
  onUserIconClick?: () => void;
}) {
  return (
    <div className="fixed content-stretch flex flex-col items-start left-1/2 -translate-x-1/2 top-0 w-full max-w-[390px] z-10" data-name="Top Navigation Container">
      
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Navigation / Top Navigation (Widget)">
        <div className="bg-white box-border content-stretch flex flex-col gap-[10px] h-[52px] items-start justify-center pl-[20px] pr-[16px] py-[4px] relative shrink-0 w-full" data-name="Navigation / Navigation">
          <Icon1 onUserIconClick={onUserIconClick} />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="Navigation / Tab Bar">
          <div aria-hidden="true" className="absolute border-[#f3f3f3] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
          <div className="size-full">
            <div className="box-border content-stretch flex flex-col items-start px-[16px] py-[8px] relative w-full">
              <TabContainer selectedCategory={selectedCategory} onCategoryChange={onCategoryChange} />
            </div>
          </div>
        </div>
        <div className="bg-white box-border content-stretch flex flex-col gap-[10px] items-start px-[20px] py-[12px] relative shrink-0 w-full" data-name="Selected=Left">
          <SegmentedControl selectedType={selectedType} onTypeChange={onTypeChange} />
        </div>
      </div>
    </div>
  );
}

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

function ProductCard({ product, onClick }: ProductCardProps) {
  const isPaid = product.type === 'paid';
  
  if (product.isFeatured) {
    return (
      <div onClick={onClick} className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full cursor-pointer" data-name="Featured Card">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-center justify-center px-0 py-[12px] relative shrink-0 w-full" data-name="Card / Browse Card">
          <div className="aspect-[350/220] pointer-events-none relative rounded-[16px] shrink-0 w-full" data-name="Thumbnail">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[16px] size-full" src={product.image} />
            <div aria-hidden="true" className="absolute border border-[#f9f9f9] border-solid inset-[-1px] rounded-[17px]" />
          </div>
          <div className="relative shrink-0 w-full" data-name="Container">
            <div className="size-full">
              <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-[4px] py-0 relative w-full">
                <div className="relative shrink-0 w-full" data-name="Container">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[2px] py-0 relative w-full">
                      <p className="basis-0 font-['Pretendard_Variable:Medium',sans-serif] grow leading-[28.5px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-black tracking-[-0.32px]">
                        {product.title}
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`${isPaid ? 'bg-[#f0f8f8]' : 'bg-[#f9f9f9]'} box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative rounded-[8px] shrink-0`} data-name="Label Box">
                  <p className={`font-['Pretendard_Variable:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 ${isPaid ? 'text-[#41a09e]' : 'text-[#848484]'} text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre`}>
                    {isPaid ? '심화 해석판' : '무료 체험판'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  const isLongDescription = product.title.length > 50;
  
  return (
    <div onClick={onClick} className={`box-border content-stretch flex flex-col gap-[10px] ${isLongDescription ? 'h-[105px]' : 'h-[78px]'} items-center justify-center px-0 py-[12px] relative rounded-[16px] shrink-0 w-full cursor-pointer`} data-name="Card / Browse Card">
      <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
        <div className="h-[54px] pointer-events-none relative rounded-[12px] shrink-0 w-[80px]" data-name="Gemini_Generated_Image_e2poh7e2poh7e2po 4">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[12px] size-full" src={product.image} />
          <div aria-hidden="true" className="absolute border border-[#f9f9f9] border-solid inset-[-1px] rounded-[13px]" />
        </div>
        <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
          <div className="relative shrink-0 w-full" data-name="Container">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[2px] py-0 relative w-full">
                <p 
                  className={`basis-0 font-['Pretendard_Variable:Medium',sans-serif] grow leading-[23.5px] min-h-px min-w-px not-italic relative shrink-0 text-[15px] text-black tracking-[-0.3px] break-words ${isLongDescription ? 'line-clamp-2' : ''}`}
                  style={isLongDescription ? { 
                    display: '-webkit-box', 
                    WebkitLineClamp: 2, 
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  } : undefined}
                >
                  {product.title}
                </p>
              </div>
            </div>
          </div>
          <div className={`${isPaid ? 'bg-[#f0f8f8]' : 'bg-[#f9f9f9]'} box-border content-stretch flex gap-[10px] items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0`} data-name="Label Box">
            <p className={`font-['Pretendard_Variable:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 ${isPaid ? 'text-[#41a09e]' : 'text-[#848484]'} text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre`}>
              {isPaid ? '심화 해석판' : '무료 체험판'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Divider">
      <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]" style={{ "--stroke-0": "rgba(249, 249, 249, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
          <path d="M0 0.5H350" id="Vector 10" stroke="var(--stroke-0, #F9F9F9)" />
        </svg>
      </div>
    </div>
  );
}

function HomeIndicatorLight() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Home Indicator/Light">
      <div className="absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function Home({ onProductClick, onUserIconClick }: { onProductClick: (productId: number) => void; onUserIconClick: () => void }) {
  const [selectedCategory, setSelectedCategory] = useState<Category>('전체');
  const [selectedType, setSelectedType] = useState<'all' | 'paid' | 'free'>('all');
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const observerTarget = useRef<HTMLDivElement>(null);
  
  const ITEMS_PER_PAGE = 10;
  
  // Filter products based on selected category and type
  const filteredProducts = useMemo(() => {
    let filtered = allProducts;
    
    // Filter by category
    if (selectedCategory !== '전체') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }
    
    // Filter by type
    if (selectedType === 'paid') {
      filtered = filtered.filter(p => p.type === 'paid');
    } else if (selectedType === 'free') {
      filtered = filtered.filter(p => p.type === 'free');
    }
    
    return filtered;
  }, [selectedCategory, selectedType]);
  
  // Load more products
  const loadMoreProducts = useCallback(() => {
    if (isLoading || !hasMore) return;
    
    setIsLoading(true);
    const startIndex = currentPage * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const newProducts = filteredProducts.slice(startIndex, endIndex);
    
    if (newProducts.length === 0) {
      setHasMore(false);
      setIsLoading(false);
      return;
    }
    
    setDisplayedProducts(prev => {
      // Prevent duplicates by checking IDs
      const existingIds = new Set(prev.map(p => p.id));
      const uniqueNewProducts = newProducts.filter(p => !existingIds.has(p.id));
      return [...prev, ...uniqueNewProducts];
    });
    
    setCurrentPage(prev => prev + 1);
    
    if (endIndex >= filteredProducts.length) {
      setHasMore(false);
    }
    setIsLoading(false);
  }, [currentPage, filteredProducts, hasMore, isLoading]);
  
  // Reset when filters change
  useEffect(() => {
    setDisplayedProducts([]);
    setCurrentPage(0);
    setHasMore(true);
  }, [selectedCategory, selectedType]);
  
  // Infinite scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMoreProducts();
        }
      },
      { threshold: 0.1 }
    );
    
    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }
    
    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [hasMore, isLoading, loadMoreProducts]);
  
  return (
    <div className="bg-white relative min-h-screen w-full flex justify-center" data-name="홈 _ 441">
      <div className="w-full max-w-[390px] relative">
        <TopNavigationContainer
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedType={selectedType}
          onTypeChange={setSelectedType}
          onUserIconClick={onUserIconClick}
        />
        
        <div className="bg-white box-border content-stretch flex flex-col gap-[4px] items-start px-[20px] py-0 pt-[225px] pb-[100px] w-full" data-name="Card / Browse Card List">
          {displayedProducts.map((product, index) => (
            <div key={product.id} className="w-full">
              <ProductCard product={product} onClick={() => onProductClick(product.id)} />
              {index < displayedProducts.length - 1 && <Divider />}
            </div>
          ))}
          
          {hasMore && (
            <div ref={observerTarget} className="h-[50px] flex items-center justify-center w-full">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#41a09e]"></div>
            </div>
          )}
          
          {!hasMore && displayedProducts.length > 0 && (
            <div className="text-center py-8 text-[#999999] w-full">
              <p>모든 상품을 확인했습니다</p>
            </div>
          )}
          
          {!hasMore && displayedProducts.length === 0 && (
            <div className="text-center py-8 text-[#999999] w-full">
              <p>해당 조건의 상품이 없습니다</p>
            </div>
          )}
        </div>
        
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 content-stretch flex flex-col items-start overflow-clip w-full max-w-[390px]" data-name="Home Indicator Container">
          <HomeIndicatorLight />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'detail' | 'payment' | 'birthinfo' | 'sajudetail' | 'freesajudetail' | 'profile' | 'login' | 'terms' | 'callback' | 'paymentcomplete' | 'mastercontent' | 'mastercontentcreate' | 'mastercontentquestions'>('home');
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [sajuRecordId, setSajuRecordId] = useState<string | null>(null);
  const [userName, setUserName] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [contentFormData, setContentFormData] = useState<ContentFormData | null>(null);

  useEffect(() => {
    // Check if we're on the callback URL
    if (window.location.pathname === '/oauth/kakao/callback') {
      setCurrentView('callback');
      return;
    }

    // Check if we're on the payment complete URL
    if (window.location.pathname === '/payment/complete') {
      setCurrentView('paymentcomplete');
      return;
    }
    
    // Check local storage for user
    const userJson = localStorage.getItem('user');
    if (userJson) {
      try {
        const user = JSON.parse(userJson);
        setIsLoggedIn(true);
        setUserName(user.nickname || '사용자');
      } catch (e) {
        console.error('Failed to parse user from local storage', e);
        localStorage.removeItem('user');
      }
    }

    // Check URL params for toast
    const params = new URLSearchParams(window.location.search);
    if (params.get('showLoginToast') === 'true') {
      setShowToast(true);
      // Clean up URL
      window.history.replaceState({}, '', '/');
      
      // Hide toast after 2.2 seconds
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 2200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleUserIconClick = () => {
    if (isLoggedIn) {
      setCurrentView('profile');
    } else {
      setCurrentView('login');
    }
    window.scrollTo(0, 0);
  };

  const handleLoginSuccess = (user: any) => {
    setIsLoggedIn(true);
    setUserName(user.nickname || '사용자');
    // If not already on home (e.g. from login page), navigate to home
    // Also trigger toast
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2200);
    setCurrentView('home');
    window.scrollTo(0, 0);
  };

  const handleNavigateToTerms = () => {
    setCurrentView('terms');
    window.scrollTo(0, 0);
  };

  const handleTermsComplete = () => {
    // Reload user from local storage to update state
    const userJson = localStorage.getItem('user');
    if (userJson) {
      const user = JSON.parse(userJson);
      setIsLoggedIn(true);
      setUserName(user.nickname || '사용자');
    }
    
    // Navigate to home with toast
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2200);
    setCurrentView('home');
    window.scrollTo(0, 0);
  };

  const handleLogin = () => {
    // Legacy mock login - redirect to actual login page instead
    setCurrentView('login');
    window.scrollTo(0, 0);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUserName('');
    setCurrentView('home'); // Go to home or login page
    window.scrollTo(0, 0);
  };

  const handleProductClick = (productId: number) => {
    setSelectedProductId(productId);
    setCurrentView('detail');
    window.scrollTo(0, 0);
  };



  const handleGoToPayment = (productId: number) => {
    setSelectedProductId(productId);
    setCurrentView('payment');
    window.scrollTo(0, 0);
  };

  const handleBackToDetail = () => {
    setCurrentView('detail');
  };

  const handleGoToBirthInfo = (productId: number) => {
    setSelectedProductId(productId);
    setCurrentView('birthinfo');
    window.scrollTo(0, 0);
  };

  const handleBackToPayment = () => {
    setCurrentView('payment');
  };

  const handleGoToSajuDetail = (recordId: string, userName?: string) => {
    setSajuRecordId(recordId);
    if (userName) {
      setUserName(userName);
    }
    const product = allProducts.find(p => p.id === selectedProductId);
    if (product?.type === 'free') {
      setCurrentView('freesajudetail');
    } else {
      setCurrentView('sajudetail');
    }
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedProductId(null);
    setSajuRecordId(null);
    setUserName('');
  };

  const handleBannerClick = () => {
    // Navigate to a specific paid fortune product (대박 운세)
    // Using product ID 5 (2025년 나의 재물운은?) as an example for 대박 related fortune
    const fortuneProduct = allProducts.find(p => p.id === 5 || (p.type === 'paid' && p.category === '재물'));
    if (fortuneProduct) {
      handleProductClick(fortuneProduct.id);
    }
  };

  const handleBannerClickInDetail = () => {
    // 재물 카테고리의 유료 상품 중 하나를 찾아서 이동
    const fortuneProduct = allProducts.find(p => p.id === 5 || (p.type === 'paid' && p.category === '재물'));
    if (fortuneProduct) {
      setSelectedProductId(fortuneProduct.id);
      setCurrentView('detail');
      window.scrollTo(0, 0);
    }
  };

  const handlePurchase = (productId: number) => {
    const product = allProducts.find(p => p.id === productId);
    if (product?.type === 'free') {
      handleGoToBirthInfo(productId);
    } else {
      handleGoToPayment(productId);
    }
  };

  // Get recommended paid products
  const getRecommendedProducts = () => {
    return allProducts.filter(p => p.type === 'paid');
  };

  if (currentView === 'freesajudetail' && sajuRecordId !== null && selectedProductId !== null) {
    const product = allProducts.find(p => p.id === selectedProductId);
    
    if (!product) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <p className="text-[#999999] mb-4">상품을 찾을 수 없습니다</p>
            <button 
              onClick={handleBackToHome}
              className="bg-[#48b2af] text-white px-6 py-2 rounded-lg"
            >
              홈으로 돌아가기
            </button>
          </div>
        </div>
      );
    }

    // Get recommended products for the recommendation section
    const recommendedProducts = allProducts
      .filter(p => p.id !== selectedProductId && (p.category === product.category || p.type === 'paid'))
      .slice(0, 6)
      .map(p => ({
        id: p.id,
        title: p.title,
        type: p.type,
        image: p.image
      }));

    return (
      <FreeSajuDetail 
        recordId={sajuRecordId} 
        userName={userName}
        productTitle={product.title}
        productImage={product.image}
        onClose={handleBackToHome}
        recommendedProducts={recommendedProducts}
        onProductClick={handleProductClick}
        onBannerClick={handleBannerClickInDetail}
        onUserIconClick={handleUserIconClick}
      />
    );
  }

  if (currentView === 'profile') {
    return <ProfilePage onBack={handleBackToHome} onLogout={handleLogout} onNavigateToMasterContent={() => {
      setCurrentView('mastercontent');
      window.scrollTo(0, 0);
    }} />;
  }

  if (currentView === 'terms') {
    return <TermsPage onBack={() => setCurrentView('login')} onComplete={handleTermsComplete} />;
  }

  if (currentView === 'login') {
    return (
      <LoginPage 
        onBack={handleBackToHome} 
        onLoginSuccess={handleLoginSuccess}
        onNavigateToTerms={handleNavigateToTerms} 
      />
    );
  }

  if (currentView === 'sajudetail' && sajuRecordId !== null) {
    return <SajuDetail recordId={sajuRecordId} onClose={handleBackToHome} />;
  }

  if (currentView === 'birthinfo' && selectedProductId !== null) {
    return <BirthInfoInput productId={selectedProductId.toString()} onBack={handleBackToPayment} onComplete={handleGoToSajuDetail} />;
  }

  if (currentView === 'payment' && selectedProductId !== null) {
    const product = allProducts.find(p => p.id === selectedProductId);
    
    if (!product) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <p className="text-[#999999] mb-4">상품을 찾을 수 없습니다</p>
            <button 
              onClick={handleBackToHome}
              className="bg-[#48b2af] text-white px-6 py-2 rounded-lg"
            >
              홈으로 돌아가기
            </button>
          </div>
        </div>
      );
    }
    
    return <Payment product={product} onBack={handleBackToDetail} onPurchase={() => handleGoToBirthInfo(product.id)} />;
  }

  if (currentView === 'detail' && selectedProductId !== null) {
    const product = allProducts.find(p => p.id === selectedProductId);
    
    if (!product) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <p className="text-[#999999] mb-4">상품을 찾을 수 없습니다</p>
            <button 
              onClick={handleBackToHome}
              className="bg-[#48b2af] text-white px-6 py-2 rounded-lg"
            >
              홈으로 돌아가기
            </button>
          </div>
        </div>
      );
    }
    
    // Use FreeProductDetail for free products, ProductDetail for paid products
    if (product.type === 'free') {
      return (
        <FreeProductDetail 
          product={product} 
          onBack={handleBackToHome}
          onProductClick={handleProductClick}
          onBannerClick={handleBannerClickInDetail}
          recommendedProducts={getRecommendedProducts()}
          onPurchase={handlePurchase}
        />
      );
    }
    
    return <ProductDetail product={product} onBack={handleBackToHome} onPurchase={handleGoToPayment} />;
  }

  if (currentView === 'callback') {
    return <KakaoCallback onLoginSuccess={handleLoginSuccess} />;
  }

  if (currentView === 'paymentcomplete') {
    return <PaymentComplete />;
  }

  if (currentView === 'mastercontent') {
    return <MasterContentList 
      onBack={() => {
        setCurrentView('profile');
        window.scrollTo(0, 0);
      }} 
      onHome={() => {
        setCurrentView('home');
        window.scrollTo(0, 0);
      }}
      onContentClick={(id) => {
        console.log('Content clicked:', id);
        // TODO: Navigate to content edit page
      }}
      onCreateClick={() => {
        setCurrentView('mastercontentcreate');
        window.scrollTo(0, 0);
      }}
    />;
  }

  if (currentView === 'mastercontentcreate') {
    return <MasterContentCreate 
      onBack={() => {
        setCurrentView('mastercontent');
        window.scrollTo(0, 0);
      }} 
      onHome={() => {
        setCurrentView('home');
        window.scrollTo(0, 0);
      }}
      onNext={(formData) => {
        console.log('Form data:', formData);
        setContentFormData(formData);
        setCurrentView('mastercontentquestions');
        window.scrollTo(0, 0);
      }}
    />;
  }

  if (currentView === 'mastercontentquestions') {
    return <MasterContentQuestions 
      onBack={() => {
        setCurrentView('mastercontentcreate');
        window.scrollTo(0, 0);
      }} 
      onHome={() => {
        setCurrentView('home');
        window.scrollTo(0, 0);
      }}
      formData={contentFormData}
      onSave={(data) => {
        console.log('Content full data:', data);
        // TODO: Save to Supabase
        alert('콘텐츠가 저장되었습니다.');
        setContentFormData(null);
        setCurrentView('mastercontent');
        window.scrollTo(0, 0);
      }}
    />;
  }

  return (
    <>
      <Home onProductClick={handleProductClick} onUserIconClick={handleUserIconClick} />
      {showToast && (
        <div className="fixed bottom-[50px] left-1/2 -translate-x-1/2 bg-[#333333] text-white px-5 py-3 rounded-[99px] text-[14px] font-medium z-50 shadow-lg whitespace-nowrap animate-in fade-in slide-in-from-bottom-5 duration-300">
          로그인 되었어요, 반가워요
        </div>
      )}
    </>
  );
}