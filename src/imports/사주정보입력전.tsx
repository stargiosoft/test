import svgPaths from "./svg-av23jgc9g4";

function Container() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[25px] relative shrink-0 text-[#b7b7b7] text-[16px] text-nowrap tracking-[-0.32px] whitespace-pre">다음</p>
    </div>
  );
}

function ButtonSquareButton() {
  return (
    <div className="bg-[#f8f8f8] content-stretch flex h-[56px] items-center justify-center px-[12px] py-0 relative rounded-[16px] shrink-0 w-[358px]" data-name="Button / Square Button">
      <Container />
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Button Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[20px] py-[12px] relative w-full">
          <ButtonSquareButton />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <ButtonContainer />
    </div>
  );
}

function HomeIndicatorLight() {
  return (
    <div className="bg-white h-[28px] relative shrink-0 w-full" data-name="Home Indicator/Light">
      <div className="absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function CommonBottomButton() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-1/2 shadow-[0px_-8px_16px_0px_rgba(255,255,255,0.76)] translate-x-[-50%] w-[390px]" data-name="Common / Bottom Button">
      <Container1 />
      <HomeIndicatorLight />
    </div>
  );
}

function LabelContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] py-0 relative w-full">
          <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#848484] text-[12px] tracking-[-0.24px]">이름</p>
        </div>
      </div>
    </div>
  );
}

function InputFieldContainer() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Input Field Container">
      <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#b7b7b7] text-[15px] tracking-[-0.45px]">예: 홍길동</p>
    </div>
  );
}

function InputContainer() {
  return (
    <div className="bg-white h-[56px] relative rounded-[16px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-0 relative size-full">
          <InputFieldContainer />
        </div>
      </div>
    </div>
  );
}

function FormInput() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[20px] top-[115px] w-[350px]" data-name="Form / Input">
      <LabelContainer />
      <InputContainer />
    </div>
  );
}

function LabelContainer1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] py-0 relative w-full">
          <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#848484] text-[12px] tracking-[-0.24px]">생년월일 (양력 기준으로 입력해 주세요)</p>
        </div>
      </div>
    </div>
  );
}

function InputFieldContainer1() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Input Field Container">
      <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#b7b7b7] text-[15px] tracking-[-0.45px]">예: 1992-07-15 (양력)</p>
    </div>
  );
}

function InputContainer1() {
  return (
    <div className="bg-white h-[56px] relative rounded-[16px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-0 relative size-full">
          <InputFieldContainer1 />
        </div>
      </div>
    </div>
  );
}

function FormInput1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[20px] top-[347px] w-[350px]" data-name="Form / Input">
      <LabelContainer1 />
      <InputContainer1 />
    </div>
  );
}

function LabelContainer2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] py-0 relative w-full">
          <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#848484] text-[12px] tracking-[-0.24px]">태어난 시간</p>
        </div>
      </div>
    </div>
  );
}

function InputField() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Input field">
      <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#b7b7b7] text-[15px] tracking-[-0.45px]">예: 21:00</p>
    </div>
  );
}

function InputContainer2() {
  return (
    <div className="bg-white h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="Input container">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-0 relative size-full">
          <InputField />
        </div>
      </div>
    </div>
  );
}

function FormInput2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Form / Input">
      <LabelContainer2 />
      <InputContainer2 />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[28px]" data-name="Checkbox">
      <div aria-hidden="true" className="absolute border-2 border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SelectionControlsCheckBox() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[44px]" data-name="Selection Controls / Check Box">
      <Checkbox />
    </div>
  );
}

function ButtonContainer1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pb-0 pt-[24px] px-0 relative shrink-0" data-name="Button Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[15px] text-neutral-600 text-nowrap tracking-[-0.45px] whitespace-pre">모르겠어요</p>
      <SelectionControlsCheckBox />
    </div>
  );
}

function OptionContainer() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-start justify-end left-[20px] top-[459px] w-[350px]" data-name="Option Container">
      <FormInput2 />
      <ButtonContainer1 />
    </div>
  );
}

function LabelContainer3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] py-0 relative w-full">
          <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#848484] text-[12px] tracking-[-0.24px]">성별</p>
        </div>
      </div>
    </div>
  );
}

function Box() {
  return (
    <div className="absolute contents inset-0" data-name="Box">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="tick-circle">
          <path d="M7 11.625L10.3294 16L17 9" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Icons() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box />
    </div>
  );
}

function OptionContent() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="Option content">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[15px] text-nowrap text-white tracking-[-0.45px] whitespace-pre">여성</p>
      <Icons />
    </div>
  );
}

function Option() {
  return (
    <div className="basis-0 bg-[#48b2af] grow min-h-px min-w-px relative rounded-[12px] shadow-[0px_2px_7px_0px_rgba(0,0,0,0.12)] shrink-0" data-name="Option">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[12px] relative w-full">
          <OptionContent />
        </div>
      </div>
    </div>
  );
}

function Box1() {
  return (
    <div className="absolute contents inset-0" data-name="Box">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="tick-circle">
          <path d="M7 11.625L10.3294 16L17 9" id="Vector" stroke="var(--stroke-0, #E7E7E7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Icons1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box1 />
    </div>
  );
}

function OptionContent1() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="Option content">
      <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#b7b7b7] text-[15px] text-nowrap tracking-[-0.45px] whitespace-pre">남성</p>
      <Icons1 />
    </div>
  );
}

function Option1() {
  return (
    <div className="basis-0 bg-[#f9f9f9] grow min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Option">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[12px] relative w-full">
          <OptionContent1 />
        </div>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Options">
      <Option />
      <Option1 />
    </div>
  );
}

function OptionsContainer() {
  return (
    <div className="bg-[#f8f8f8] relative rounded-[16px] shrink-0 w-full" data-name="Options container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[8px] relative w-full">
          <Options />
        </div>
      </div>
    </div>
  );
}

function SelectionControlsSelectionGroup() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[20px] top-[227px] w-[350px]" data-name="Selection Controls / Selection Group">
      <LabelContainer3 />
      <OptionsContainer />
    </div>
  );
}

function LabelContainer4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] py-0 relative w-full">
          <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#848484] text-[12px] tracking-[-0.24px]">휴대폰 번호(풀이 완료 후 알림톡 발송에만 사용돼요)</p>
        </div>
      </div>
    </div>
  );
}

function InputFieldContainer2() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Input Field Container">
      <p className="basis-0 font-['Pretendard_Variable:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#b7b7b7] text-[15px] tracking-[-0.45px]">{`'-'하이픈 없이 숫자만 입력해 주세요`}</p>
    </div>
  );
}

function InputContainer3() {
  return (
    <div className="bg-white h-[56px] relative rounded-[16px] shrink-0 w-full" data-name="Input Container">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-0 relative size-full">
          <InputFieldContainer2 />
        </div>
      </div>
    </div>
  );
}

function FormInput3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[20px] top-[563px] w-[350px]" data-name="Form / Input">
      <LabelContainer4 />
      <InputContainer3 />
    </div>
  );
}

function HomeIndicatorLight1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Home Indicator/Light">
      <div className="absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function HomeIndicatorContainer() {
  return (
    <div className="absolute bottom-[-129px] content-stretch flex flex-col items-start left-1/2 overflow-clip translate-x-[-50%] w-[390px]" data-name="Home Indicator Container">
      <HomeIndicatorLight1 />
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

function Box2() {
  return (
    <div className="absolute contents inset-0" data-name="Box">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow-left">
          <path d={svgPaths.p2a5cd480} id="Vector" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
          <path d={svgPaths.p1a4bb100} id="Vector_2" opacity="0" stroke="var(--stroke-0, #848484)" />
        </g>
      </svg>
    </div>
  );
}

function Icons2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box2 />
    </div>
  );
}

function LeftAction() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="Left Action">
      <Icons2 />
    </div>
  );
}

function Box3() {
  return (
    <div className="absolute contents inset-0" data-name="Box">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="home-2">
          <path d={svgPaths.p3d07f180} id="Vector" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M12 17.99V14.99" id="Vector_2" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Vector_3" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Icons3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box3 />
    </div>
  );
}

function RightAction() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-0 p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="Right Action">
      <Icons3 />
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Icon">
      <LeftAction />
      <p className="[white-space-collapse:collapse] basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold grow leading-[25.5px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-black text-center text-nowrap tracking-[-0.36px]">사주 정보 입력</p>
      <RightAction />
    </div>
  );
}

function NavigationTopBar() {
  return (
    <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="Navigation / Top Bar">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[4px] relative size-full">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Spacer() {
  return <div className="h-[16px] shrink-0 w-full" data-name="Spacer" />;
}

function NavigationTopNavigationWidget() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[390px]" data-name="Navigation / Top Navigation (Widget)">
      <NavigationTopBar />
      <Spacer />
    </div>
  );
}

function TopNavigationContainer() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[390px]" data-name="Top Navigation Container">
      <IndependentIPhoneStatusBar />
      <NavigationTopNavigationWidget />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="사주 정보 입력 전">
      <HomeIndicatorContainer />
      <TopNavigationContainer />
      <CommonBottomButton />
      <FormInput />
      <FormInput1 />
      <OptionContainer />
      <SelectionControlsSelectionGroup />
      <FormInput3 />
    </div>
  );
}