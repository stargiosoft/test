import svgPaths from "./svg-b8sjovrdwf";

function CommonLogo() {
  return (
    <div className="h-[20px] relative shrink-0 w-[59px]" data-name="Common / Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59 20">
        <g id="Common / Logo">
          <path d={svgPaths.p1fb34640} fill="var(--fill-0, #151515)" id="Vector" />
          <path d={svgPaths.p1bbbb200} fill="var(--fill-0, #151515)" id="Vector_2" />
          <path d={svgPaths.p11620600} fill="var(--fill-0, #151515)" id="Vector_3" />
          <path d={svgPaths.p9a70500} fill="var(--fill-0, #151515)" id="Vector_4" />
          <path d={svgPaths.p115ca080} fill="var(--fill-0, #151515)" id="Vector_5" />
          <path d={svgPaths.pb2cf980} fill="var(--fill-0, #151515)" id="Vector_6" />
          <path d={svgPaths.p211e0700} fill="var(--fill-0, #151515)" id="Vector_7" />
          <path d={svgPaths.p3088fdc0} fill="var(--fill-0, #151515)" id="Vector_8" />
          <path d={svgPaths.p2e718980} fill="var(--fill-0, #151515)" id="Vector_9" />
          <path d={svgPaths.p15169200} fill="var(--fill-0, #151515)" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard_Variable:Regular',sans-serif] gap-[4px] items-start leading-[19px] not-italic relative shrink-0 text-[#6d6d6d] text-[13px] tracking-[-0.26px] w-full">
      <p className="relative shrink-0 w-full">Copyright 2024@Stargiosoft All Rights Reserved.</p>
      <p className="relative shrink-0 w-full">대표자 서지현 | 사업자등록번호 827-88-01815</p>
      <p className="relative shrink-0 w-full">통신판매업번호 2024-서울영등포-2084</p>
      <p className="relative shrink-0 w-full">서울시 영등포구 양평로 149, 1507호</p>
      <p className="relative shrink-0 w-full">문의 stargiosoft@gmail.com</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start px-[8px] py-0 relative w-full">
          <CommonLogo />
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#848484] text-[14px] text-nowrap tracking-[-0.42px] whitespace-pre">이용약관</p>
    </div>
  );
}

function ButtonTextButton() {
  return (
    <div className="content-stretch flex flex-col h-[34px] items-center justify-center px-[8px] py-0 relative rounded-[12px] shrink-0" data-name="Button / Text Button">
      <Container />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#848484] text-[14px] text-nowrap tracking-[-0.42px] whitespace-pre">개인정보 처리방침</p>
    </div>
  );
}

function ButtonTextButton1() {
  return (
    <div className="content-stretch flex flex-col h-[34px] items-center justify-center px-[8px] py-0 relative rounded-[12px] shrink-0" data-name="Button / Text Button">
      <Container1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <ButtonTextButton />
      <div className="h-[8px] relative shrink-0 w-0">
        <div className="absolute inset-[-6.25%_-0.5px]" style={{ "--stroke-0": "rgba(212, 212, 212, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 9">
            <path d="M0.5 0.5V8.5" id="Vector 65" stroke="var(--stroke-0, #D4D4D4)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <ButtonTextButton1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#f9f9f9] bottom-0 content-stretch flex flex-col items-start left-0 pb-[40px] pt-[32px] px-[20px] w-[390px]" data-name="Footer">
      <Frame3 />
    </div>
  );
}

function ProfileIcon() {
  return (
    <div className="absolute inset-[20.11%_23.69%_18.25%_23.68%]" data-name="Profile Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 39">
        <g id="Profile Icon">
          <path d={svgPaths.pa9095f0} fill="var(--fill-0, #557170)" id="Vector" />
          <path d={svgPaths.p1139d800} fill="var(--fill-0, #3FB5B3)" id="Vector_2" />
          <path d={svgPaths.p4bd4980} fill="var(--fill-0, #8BE1DF)" id="Vector_3" />
          <path d={svgPaths.p36a0700} fill="var(--fill-0, #3FB5B3)" id="Vector_4" />
          <path d={svgPaths.p786fd00} fill="var(--fill-0, #3FB5B3)" id="Vector_5" />
          <path d={svgPaths.p1a321300} fill="var(--fill-0, #C8FFFD)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Icons() {
  return (
    <div className="relative shrink-0 size-[62px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 62">
        <g id="Group">
          <path d={svgPaths.p961370} fill="var(--fill-0, #E4F7F7)" id="Vector" />
        </g>
      </svg>
      <ProfileIcon />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 text-center w-full" data-name="Container">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[24px] relative shrink-0 text-[#151515] text-[18px] tracking-[-0.36px] w-full">사주 정보가 아직 없어요</p>
      <p className="font-['Pretendard_Variable:Regular',sans-serif] leading-[25.5px] relative shrink-0 text-[#848484] text-[15px] tracking-[-0.3px] w-full">사주를 등록하면 운세 풀이가 시작돼요</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Icons />
      <Container2 />
    </div>
  );
}

function TextTextPageComponent() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text / Text Page Component">
      <Container3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white tracking-[-0.45px] whitespace-pre">사주 정보 등록하기</p>
    </div>
  );
}

function ButtonSquareButton() {
  return (
    <div className="bg-[#48b2af] h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="Button / Square Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex h-[48px] items-center justify-center px-[12px] py-0 relative w-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function ProfileDetails() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[20px] top-[147px] w-[350px]" data-name="Profile Details">
      <TextTextPageComponent />
      <ButtonSquareButton />
    </div>
  );
}

function Box() {
  return (
    <div className="absolute contents inset-0" data-name="Box">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-right">
          <path d={svgPaths.p232a3c80} id="Vector" stroke="var(--stroke-0, #B7B7B7)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Icons1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <Box />
    </div>
  );
}

function Container5() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[28.5px] not-italic relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.32px] whitespace-pre">콘텐츠 만들기</p>
      <Icons1 />
    </div>
  );
}

function ButtonListItemButton() {
  return (
    <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative rounded-[16px] shrink-0 w-[350px]" data-name="Button / List Item Button">
      <Container5 />
    </div>
  );
}

function Box1() {
  return (
    <div className="absolute contents inset-0" data-name="Box">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-right">
          <path d={svgPaths.p232a3c80} id="Vector" stroke="var(--stroke-0, #B7B7B7)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Icons2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <Box1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[28.5px] not-italic relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.32px] whitespace-pre">사주 정보 관리</p>
      <Icons2 />
    </div>
  );
}

function ButtonListItemButton1() {
  return (
    <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative rounded-[16px] shrink-0 w-[350px]" data-name="Button / List Item Button">
      <Container6 />
    </div>
  );
}

function Box2() {
  return (
    <div className="absolute contents inset-0" data-name="Box">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-right">
          <path d={svgPaths.p232a3c80} id="Vector" stroke="var(--stroke-0, #B7B7B7)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Icons3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <Box2 />
    </div>
  );
}

function Container7() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[28.5px] not-italic relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.32px] whitespace-pre">구매 내역</p>
      <Icons3 />
    </div>
  );
}

function ButtonListItemButton2() {
  return (
    <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative rounded-[16px] shrink-0 w-[350px]" data-name="Button / List Item Button">
      <Container7 />
    </div>
  );
}

function Box3() {
  return (
    <div className="absolute contents inset-0" data-name="Box">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-right">
          <path d={svgPaths.p232a3c80} id="Vector" stroke="var(--stroke-0, #B7B7B7)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Icons4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <Box3 />
    </div>
  );
}

function Container8() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[28.5px] not-italic relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.32px] whitespace-pre">로그아웃</p>
      <Icons4 />
    </div>
  );
}

function ButtonListItemButton3() {
  return (
    <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative rounded-[16px] shrink-0 w-[350px]" data-name="Button / List Item Button">
      <Container8 />
    </div>
  );
}

function Box4() {
  return (
    <div className="absolute contents inset-0" data-name="Box">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-right">
          <path d={svgPaths.p232a3c80} id="Vector" stroke="var(--stroke-0, #B7B7B7)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Icons5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <Box4 />
    </div>
  );
}

function Container9() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0" data-name="Container">
      <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[28.5px] not-italic relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.32px] whitespace-pre">의견 전달하기</p>
      <Icons5 />
    </div>
  );
}

function ButtonListItemButton4() {
  return (
    <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative rounded-[16px] shrink-0 w-[350px]" data-name="Button / List Item Button">
      <Container9 />
    </div>
  );
}

function ButtonListContainer() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[20px] top-[427px]" data-name="Button List Container">
      <ButtonListItemButton />
      <ButtonListItemButton1 />
      <ButtonListItemButton2 />
      <ButtonListItemButton3 />
      <ButtonListItemButton4 />
    </div>
  );
}

function HomeIndicatorLight() {
  return (
    <div className="absolute bottom-0 h-[28px] left-0 w-[390px]" data-name="Home Indicator/Light">
      <div className="absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
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

function Box5() {
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

function Icons6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box5 />
    </div>
  );
}

function LeftAction() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="Left Action">
      <Icons6 />
    </div>
  );
}

function Box6() {
  return (
    <div className="absolute contents inset-0" data-name="Box">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="setting">
          <path d={svgPaths.p3cccb600} id="Vector" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d={svgPaths.p185ecc80} id="Vector_2" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <g id="Vector_3" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Icons7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <Box6 />
    </div>
  );
}

function RightAction() {
  return (
    <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="Right Action">
      <Icons7 />
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Icon">
      <LeftAction />
      <p className="[white-space-collapse:collapse] basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] grow leading-[25.5px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-black text-center text-nowrap tracking-[-0.36px]">마이페이지</p>
      <RightAction />
    </div>
  );
}

function NavigationTopBar() {
  return (
    <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="Navigation / Top Bar">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col h-[52px] items-start justify-center px-[12px] py-[4px] relative w-full">
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
    <div className="bg-white relative size-full" data-name="사주정보 미등록">
      <HomeIndicatorContainer />
      <TopNavigationContainer />
      <Footer />
      <ProfileDetails />
      <div className="absolute h-0 left-1/2 top-[407px] translate-x-[-50%] w-[390px]">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]" style={{ "--stroke-0": "rgba(243, 243, 243, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 390 1">
            <path d="M0 0.5H390" id="Vector 18" stroke="var(--stroke-0, #F3F3F3)" />
          </svg>
        </div>
      </div>
      <ButtonListContainer />
      <HomeIndicatorLight />
    </div>
  );
}