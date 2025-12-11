import svgPaths from "./svg-e15u41g853";
import img from "figma:asset/5615ff21216f93eb47cac8ee15adee136174d7be.png";
import img1 from "figma:asset/b236509a5f2172bc63b883ba8abf132659ed54d9.png";
import img2 from "figma:asset/67f3616aab1dcdea805228bdd4e698e8f57dd487.png";
import { imgGroup } from "./svg-e1rzv";
type ButtonIconButtonProps = {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg";
  state?: "Default" | "Pressed (Scale Down)" | "Disabled";
};

function ButtonIconButton({ className, size = "xs", state = "Default" }: ButtonIconButtonProps) {
  if (size === "md" && state === "Default") {
    return (
      <div className={className} data-name="Size=md, State=Default">
        <div className="relative shrink-0 size-[24px]" data-name="Icons">
          <div className="absolute contents inset-0" data-name="Box">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="search-normal">
                <path d={svgPaths.p6857980} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <path d="M22 22L20 20" id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <g id="Vector_3" opacity="0"></g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (size === "md" && state === "Pressed (Scale Down)") {
    return (
      <div className={className} data-name="Size=md, State=Pressed (Scale Down)">
        <div className="relative shrink-0 size-[22.118px]" data-name="Icons">
          <div className="absolute contents inset-0" data-name="Box">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="search-normal">
                <path d={svgPaths.p6857980} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <path d="M22 22L20 20" id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <g id="Vector_3" opacity="0"></g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (size === "lg" && state === "Default") {
    return (
      <div className={className} data-name="Size=lg, State=Default">
        <div className="relative shrink-0 size-[32px]" data-name="Icons">
          <div className="absolute contents inset-0" data-name="Box">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="search-normal">
                <path d={svgPaths.p6857980} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <path d="M22 22L20 20" id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <g id="Vector_3" opacity="0"></g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (size === "lg" && state === "Pressed (Scale Down)") {
    return (
      <div className={className} data-name="Size=lg, State=Pressed (Scale Down)">
        <div className="relative shrink-0 size-[30.72px]" data-name="Icons">
          <div className="absolute contents inset-0" data-name="Box">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="search-normal">
                <path d={svgPaths.p6857980} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <path d="M22 22L20 20" id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <g id="Vector_3" opacity="0"></g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (size === "sm" && state === "Default") {
    return (
      <div className={className} data-name="Size=sm, State=Default">
        <div className="relative shrink-0 size-[20px]" data-name="Icons">
          <div className="absolute contents inset-0" data-name="Box">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="search-normal">
                <path d={svgPaths.p6857980} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <path d="M22 22L20 20" id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <g id="Vector_3" opacity="0"></g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (size === "sm" && state === "Pressed (Scale Down)") {
    return (
      <div className={className} data-name="Size=sm, State=Pressed (Scale Down)">
        <div className="relative shrink-0 size-[19.2px]" data-name="Icons">
          <div className="absolute contents inset-0" data-name="Box">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="search-normal">
                <path d={svgPaths.p6857980} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <path d="M22 22L20 20" id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <g id="Vector_3" opacity="0"></g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (size === "xs" && state === "Pressed (Scale Down)") {
    return (
      <div className={className} data-name="Size=xs, State=Pressed (Scale Down)">
        <div className="relative shrink-0 size-[15.36px]" data-name="Icons">
          <div className="absolute contents inset-0" data-name="Box">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="search-normal">
                <path d={svgPaths.p6857980} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <path d="M22 22L20 20" id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <g id="Vector_3" opacity="0"></g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (size === "md" && state === "Disabled") {
    return (
      <div className={className} data-name="Size=md, State=Disabled">
        <div className="relative shrink-0 size-[24px]" data-name="Icons">
          <div className="absolute contents inset-0" data-name="Box">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="search-normal">
                <path d={svgPaths.p6857980} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <path d="M22 22L20 20" id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <g id="Vector_3" opacity="0"></g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (size === "lg" && state === "Disabled") {
    return (
      <div className={className} data-name="Size=lg, State=Disabled">
        <div className="relative shrink-0 size-[32px]" data-name="Icons">
          <div className="absolute contents inset-0" data-name="Box">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="search-normal">
                <path d={svgPaths.p6857980} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <path d="M22 22L20 20" id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <g id="Vector_3" opacity="0"></g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (size === "sm" && state === "Disabled") {
    return (
      <div className={className} data-name="Size=sm, State=Disabled">
        <div className="relative shrink-0 size-[20px]" data-name="Icons">
          <div className="absolute contents inset-0" data-name="Box">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="search-normal">
                <path d={svgPaths.p6857980} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <path d="M22 22L20 20" id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <g id="Vector_3" opacity="0"></g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (size === "xs" && state === "Disabled") {
    return (
      <div className={className} data-name="Size=xs, State=Disabled">
        <div className="relative shrink-0 size-[16px]" data-name="Icons">
          <div className="absolute contents inset-0" data-name="Box">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="search-normal">
                <path d={svgPaths.p6857980} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <path d="M22 22L20 20" id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                <g id="Vector_3" opacity="0"></g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={className} data-name="Size=xs, State=Default">
      <div className="relative shrink-0 size-[16px]" data-name="Icons">
        <div className="absolute contents inset-0" data-name="Box">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="search-normal">
              <path d={svgPaths.p6857980} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
              <path d="M22 22L20 20" id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
              <g id="Vector_3" opacity="0"></g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
type IndependentIPhoneStatusBarProps = {
  className?: string;
  size?: "375" | "390" | "440";
};

function IndependentIPhoneStatusBar({ className, size = "375" }: IndependentIPhoneStatusBarProps) {
  if (size === "390") {
    return (
      <div className={className} data-name="Size=390">
        <div className="absolute h-[30px] left-[103px] top-[-2px] w-[183px]" data-name="Notch">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 183 30">
            <g id="Notch">
              <path d={svgPaths.pf91bfc0} fill="var(--fill-0, black)" id="Notch_2" />
            </g>
          </svg>
        </div>
        <div className="absolute h-[11.336px] right-[14.67px] top-[17.33px] w-[66.662px]" data-name="Right Side">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 12">
            <g id="Right Side">
              <g id="Battery">
                <path d={svgPaths.p21180080} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, black)" />
                <path d={svgPaths.p39d1ca00} fill="var(--fill-0, black)" id="Combined Shape" opacity="0.4" />
                <path d={svgPaths.p3a294980} fill="var(--fill-0, black)" id="Rectangle_2" />
              </g>
              <path d={svgPaths.p3ce0f00} fill="var(--fill-0, black)" id="Wifi" />
              <path d={svgPaths.p349d7c60} fill="var(--fill-0, black)" id="Mobile Signal" />
            </g>
          </svg>
        </div>
        <div className="absolute contents left-[21px] top-[12px]" data-name="Left Side">
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
        </div>
      </div>
    );
  }
  if (size === "440") {
    return (
      <div className={className} data-name="Size=440">
        <div className="absolute h-[30px] left-[128px] top-[-2px] w-[183px]" data-name="Notch">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 183 30">
            <g id="Notch">
              <path d={svgPaths.pf91bfc0} fill="var(--fill-0, black)" id="Notch_2" />
            </g>
          </svg>
        </div>
        <div className="absolute h-[11.335px] right-[14.67px] top-[17.33px] w-[66.662px]" data-name="Right Side">
          <div className="absolute bottom-[-0.01%] left-0 right-0 top-0">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 12">
              <g id="Right Side">
                <g id="Battery">
                  <path d={svgPaths.p31b9c500} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, black)" />
                  <path d={svgPaths.p332c1f00} fill="var(--fill-0, black)" id="Combined Shape" opacity="0.4" />
                  <path d={svgPaths.p2212ee80} fill="var(--fill-0, black)" id="Rectangle_2" />
                </g>
                <path d={svgPaths.p27981200} fill="var(--fill-0, black)" id="Wifi" />
                <path d={svgPaths.p32942f00} fill="var(--fill-0, black)" id="Mobile Signal" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute contents left-[21px] top-[12px]" data-name="Left Side">
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
        </div>
      </div>
    );
  }
  return (
    <div className={className} data-name="Size=375">
      <div className="absolute h-[30px] left-[96px] top-[-2px] w-[183px]" data-name="Notch">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 183 30">
          <g id="Notch">
            <path d={svgPaths.pf91bfc0} fill="var(--fill-0, black)" id="Notch_2" />
          </g>
        </svg>
      </div>
      <div className="absolute h-[10.088px] right-[14.67px] top-[17.33px] w-[59.328px]" data-name="Right Side">
        <div className="absolute bottom-[-0.01%] left-0 right-0 top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 11">
            <g id="Right Side">
              <g id="Battery">
                <path d={svgPaths.p3c5ff600} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, black)" strokeWidth="0.889983" />
                <path d={svgPaths.p6e5a580} fill="var(--fill-0, black)" id="Combined Shape" opacity="0.4" />
                <path d={svgPaths.p4493100} fill="var(--fill-0, black)" id="Rectangle_2" />
              </g>
              <path d={svgPaths.p14b42800} fill="var(--fill-0, black)" id="Wifi" />
              <path d={svgPaths.p72f8400} fill="var(--fill-0, black)" id="Mobile Signal" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute contents left-[15px] top-[12px]" data-name="Left Side">
        <div className="absolute h-[21px] left-[15px] top-[12px] w-[54px]" data-name="Time">
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
      </div>
    </div>
  );
}
type IconsProps = {
  className?: string;
  type?: "linear" | "bold" | "desing";
  icons?: "traffic" | "cloud-error" | "page-error" | "document-error" | "wrench" | "wifi-error" | "crystalball 2" | "star duotone" | "lock2" | "magnifying-glass" | "directions" | "crystalball 1" | "Wave" | "Sprout" | "arrow-right" | "arrow-left" | "arrow-up" | "arrow-down" | "search" | "menu" | "Check" | "crown" | "notification" | "refresh" | "send" | "share" | "setting" | "bag2" | "close" | "home1" | "plus" | "download" | "user 2" | "user-circle" | "add-circle" | "minus-cirlce" | "close-cirlce" | "info-circle" | "tick-circle" | "eye" | "eye-slash" | "home2" | "money" | "notification2" | "user 1" | "bag1" | "flash" | "coupon-fill" | "ticket-x" | "ellipsis" | "list" | "lock1" | "Right arrow" | "direct-normal" | "pen" | "trash";
};

function Icons({ className, type = "linear", icons = "arrow-right" }: IconsProps) {
  if (type === "linear" && icons === "arrow-up") {
    return (
      <div className={className} data-name="Type=linear, Icons=arrow-up">
        <div className="absolute contents inset-0" data-name="Box">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="arrow-up">
              <path d={svgPaths.p1bcb1840} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
              <g id="Vector_2" opacity="0"></g>
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (type === "linear" && icons === "search") {
    return (
      <div className={className} data-name="Type=linear, Icons=search">
        <div className="absolute contents inset-0" data-name="Box">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="search-normal">
              <path d={svgPaths.p6857980} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
              <path d="M22 22L20 20" id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
              <g id="Vector_3" opacity="0"></g>
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (type === "linear" && icons === "arrow-down") {
    return (
      <div className={className} data-name="Type=linear, Icons=arrow-down">
        <div className="absolute contents inset-0" data-name="Box">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="arrow-down">
              <path d={svgPaths.p336ed396} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
              <g id="Vector_2" opacity="0"></g>
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (type === "linear" && icons === "arrow-left") {
    return (
      <div className={className} data-name="Type=linear, Icons=arrow-left">
        <div className="absolute contents inset-0" data-name="Box">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="arrow-left">
              <path d={svgPaths.p2a5cd480} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
              <g id="Vector_2" opacity="0"></g>
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (type === "linear" && icons === "menu") {
    return (
      <div className={className} data-name="Type=linear, Icons=menu">
        <div className="absolute contents inset-0" data-name="Box">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="menu">
              <path d="M3 5H21" id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeWidth="1.7" />
              <path d="M3 12H21" id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeWidth="1.7" />
              <path d="M3 19H21" id="Vector_3" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeWidth="1.7" />
              <g id="Vector_4" opacity="0"></g>
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (type === "bold" && icons === "add-circle") {
    return (
      <div className={className} data-name="Type=bold, Icons=add-circle">
        <div className="absolute contents inset-0" data-name="Box">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="add-circle">
              <path d={svgPaths.p28c8d600} fill="var(--fill-0, #151515)" id="Vector" />
              <g id="Vector_2" opacity="0"></g>
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (type === "bold" && icons === "tick-circle") {
    return (
      <div className={className} data-name="Type=bold, Icons=tick-circle">
        <div className="absolute contents inset-0" data-name="Box">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="tick-circle">
              <path d={svgPaths.p19b5fe00} fill="var(--fill-0, #151515)" id="Vector" />
              <g id="Vector_2" opacity="0"></g>
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (type === "bold" && icons === "close-cirlce") {
    return (
      <div className={className} data-name="Type=bold, Icons=close-cirlce">
        <div className="absolute contents inset-0" data-name="Box">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="close-circle">
              <path d={svgPaths.p1d9eac80} fill="var(--fill-0, #151515)" id="Vector" />
              <g id="Vector_2" opacity="0"></g>
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (type === "bold" && icons === "minus-cirlce") {
    return (
      <div className={className} data-name="Type=bold, Icons=minus-cirlce">
        <div className="absolute contents inset-0" data-name="Box">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="minus-cirlce">
              <path d={svgPaths.p3f770370} fill="var(--fill-0, #151515)" id="Vector" />
              <g id="Vector_2" opacity="0"></g>
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (type === "bold" && icons === "info-circle") {
    return (
      <div className={className} data-name="Type=bold, Icons=info-circle">
        <div className="absolute contents inset-0" data-name="Box">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="info-circle">
              <path d={svgPaths.pabc3300} fill="var(--fill-0, #151515)" id="Vector" />
              <g id="Vector_2" opacity="0"></g>
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (type === "bold" && icons === "eye") {
    return (
      <div className={className} data-name="Type=bold, Icons=eye">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Box">
            <path d={svgPaths.p1eb95680} fill="var(--fill-0, #151515)" id="Vector" />
            <path d={svgPaths.p2e23c480} fill="var(--fill-0, #151515)" id="Vector_2" />
            <g id="Vector_3" opacity="0"></g>
          </g>
        </svg>
      </div>
    );
  }
  if (type === "bold" && icons === "eye-slash") {
    return (
      <div className={className} data-name="Type=bold, Icons=eye-slash">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Box">
            <path d={svgPaths.p9e0b100} fill="var(--fill-0, #151515)" id="Vector" />
            <path d={svgPaths.pbe38a00} fill="var(--fill-0, #151515)" id="Vector_2" />
            <path d={svgPaths.pe774f00} fill="var(--fill-0, #151515)" id="Vector_3" />
            <path d={svgPaths.p14cd6880} fill="var(--fill-0, #151515)" id="Vector_4" />
            <path d={svgPaths.paf74580} fill="var(--fill-0, #151515)" id="Vector_5" />
            <g id="Vector_6" opacity="0"></g>
          </g>
        </svg>
      </div>
    );
  }
  if (type === "linear" && icons === "Check") {
    return (
      <div className={className} data-name="Type=linear, Icons=Check">
        <div className="absolute contents inset-0" data-name="Box">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="tick-circle">
              <path d="M7 11.625L10.3294 16L17 9" id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
              <g id="Vector_2" opacity="0"></g>
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (type === "bold" && icons === "home2") {
    return (
      <div className={className} data-name="Type=bold, Icons=home2">
        <div className="absolute contents inset-0" data-name="Box">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="home-2">
              <path d={svgPaths.pd335a00} fill="var(--fill-0, #151515)" id="Vector" />
              <g id="Vector_2" opacity="0"></g>
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (type === "bold" && icons === "money") {
    return (
      <div className={className} data-name="Type=bold, Icons=money">
        <div className="absolute contents inset-0" data-name="Box">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="user">
              <g id="Vector" opacity="0"></g>
            </g>
          </svg>
        </div>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Group 427318514">
            <path d={svgPaths.p110faf70} fill="var(--fill-0, #151515)" id="Vector" />
            <path d={svgPaths.p33438080} fill="var(--fill-0, #151515)" id="Vector_2" />
            <path d={svgPaths.p2da15f00} fill="var(--fill-0, #151515)" id="Vector_3" />
          </g>
        </svg>
      </div>
    );
  }
  if (type === "linear" && icons === "notification") {
    return (
      <div className={className} data-name="Type=linear, Icons=notification">
        <div className="absolute contents inset-0" data-name="Box">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="notification-bing">
              <path d={svgPaths.p92ab300} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.7" />
              <path d={svgPaths.p26b7780} id="Vector_2" stroke="var(--stroke-0, #151515)" strokeMiterlimit="10" strokeWidth="1.7" />
              <g id="Vector_3" opacity="0"></g>
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (type === "linear" && icons === "crown") {
    return (
      <div className={className} data-name="Type=linear, Icons=crown">
        <div className="absolute contents inset-0" data-name="Box">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="crown">
              <path d={svgPaths.p30bd3080} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
              <g id="Vector_2" opacity="0"></g>
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (type === "linear" && icons === "refresh") {
    return (
      <div className={className} data-name="Type=linear, Icons=refresh">
        <div className="absolute contents inset-0" data-name="Box">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="refresh-2">
              <path d={svgPaths.p26d97b00} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <g id="Vector_2" opacity="0"></g>
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (type === "bold" && icons === "notification2") {
    return (
      <div className={className} data-name="Type=bold, Icons=notification2">
        <div className="absolute contents inset-0" data-name="Box">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="notification-bing">
              <path d={svgPaths.p1e185d00} fill="var(--fill-0, #151515)" id="Vector" />
              <path d={svgPaths.p2767dee0} fill="var(--fill-0, #151515)" id="Vector_2" />
              <g id="Vector_3" opacity="0"></g>
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (type === "linear" && icons === "send") {
    return (
      <div className={className} data-name="Type=linear, Icons=send">
        <div className="absolute contents inset-0" data-name="Box">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="send-2">
              <path d={svgPaths.p329d5d00} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d={svgPaths.p36997980} id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <g id="Vector_3" opacity="0"></g>
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (type === "linear" && icons === "share") {
    return (
      <div className={className} data-name="Type=linear, Icons=share">
        <div className="absolute inset-[12.5%_20.83%_12.5%_16.67%]" data-name="Group">
          <div className="absolute inset-[-4.17%_-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 20">
              <g id="Group">
                <path d={svgPaths.p3f9c0a80} id="Vector" stroke="var(--stroke-0, #151515)" strokeWidth="1.5" />
                <path d={svgPaths.p4f3c00} id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeWidth="1.5" />
                <path d={svgPaths.p63c2700} id="Vector_3" stroke="var(--stroke-0, #151515)" strokeWidth="1.5" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (type === "bold" && icons === "Sprout") {
    return (
      <div className={className} data-name="Type=bold, Icons=Sprout">
        <div className="absolute inset-[10.44%_7.15%_10.44%_7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 23">
            <g id="Group 427318524">
              <path d={svgPaths.p1fd7b880} fill="var(--fill-0, #8BE1DF)" id="Vector" />
              <path d={svgPaths.p2520a100} fill="var(--fill-0, #48B2AF)" id="Vector_2" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (type === "bold" && icons === "user 1") {
    return (
      <div className={className} data-name="Type=bold, Icons=user 1">
        <div className="absolute contents inset-0" data-name="Box">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="user">
              <g id="Vector" opacity="0"></g>
            </g>
          </svg>
        </div>
        <div className="absolute h-[19px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[18px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 19">
            <g id="Frame 427320467">
              <path d={svgPaths.p1ceabf00} fill="var(--fill-0, #151515)" id="Vector" />
              <path d={svgPaths.p6324f00} fill="var(--fill-0, #151515)" id="Rectangle 569" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (type === "linear" && icons === "setting") {
    return (
      <div className={className} data-name="Type=linear, Icons=setting">
        <div className="absolute contents inset-0" data-name="Box">
          <div className="absolute bottom-0 left-[-3.13%] right-[-3.13%] top-0">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 24">
              <g id="setting">
                <path d={svgPaths.pcc9ce00} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                <path d={svgPaths.p2cdab80} id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
                <g id="Vector_3" opacity="0"></g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (type === "bold" && icons === "bag1") {
    return (
      <div className={className} data-name="Type=bold, Icons=bag1">
        <div className="absolute contents inset-0" data-name="Box">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="bag-2">
              <path d={svgPaths.p2e0bf100} fill="var(--fill-0, #151515)" id="Vector" />
              <g id="Vector_2" opacity="0"></g>
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (type === "linear" && icons === "bag2") {
    return (
      <div className={className} data-name="Type=linear, Icons=bag2">
        <div className="absolute contents inset-0" data-name="Box">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="bag-2">
              <path d={svgPaths.p25b3cd00} fill="var(--fill-0, #151515)" id="Vector" />
              <path d={svgPaths.p3beaaf00} fill="var(--fill-0, #151515)" id="Vector_2" />
              <path d={svgPaths.p36b74300} fill="var(--fill-0, #151515)" id="Vector_3" />
              <path d={svgPaths.p186b6800} fill="var(--fill-0, #151515)" id="Vector_4" />
              <g id="Vector_5" opacity="0"></g>
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (type === "bold" && icons === "flash") {
    return (
      <div className={className} data-name="Type=bold, Icons=flash">
        <div className="absolute contents inset-0" data-name="Box">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="flash">
              <path d={svgPaths.p1fead200} fill="var(--fill-0, #292D32)" id="Vector" />
              <g id="Vector_2" opacity="0"></g>
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (type === "linear" && icons === "close") {
    return (
      <div className={className} data-name="Type=linear, Icons=close">
        <div className="absolute contents inset-0" data-name="linear/close">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="Box">
              <path d="M4 20L20 4" id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              <path d="M20 20L4 4" id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              <g id="Vector_3" opacity="0"></g>
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (type === "bold" && icons === "coupon-fill") {
    return (
      <div className={className} data-name="Type=bold, Icons=coupon-fill">
        <div className="absolute inset-[16.67%_8.33%_0.77%_8.33%]" data-name="Box">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="Box">
              <g id="Vector"></g>
              <path d={svgPaths.p5fda680} fill="var(--fill-0, #151515)" id="Vector_2" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (type === "bold" && icons === "ticket-x") {
    return (
      <div className={className} data-name="Type=bold, Icons=ticket-x">
        <div className="absolute contents inset-0" data-name="Box">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="ticket">
              <path d={svgPaths.pfcb7280} fill="var(--fill-0, #151515)" id="Subtract" />
              <g id="Vector" opacity="0"></g>
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (type === "bold" && icons === "lock1") {
    return (
      <div className={className} data-name="Type=bold, Icons=lock1">
        <div className="absolute inset-[12.5%_12.5%_8.33%_12.5%]" data-name="Box">
          <div className="absolute bottom-0 left-0 right-0 top-[-5.26%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
              <g id="Box">
                <path clipRule="evenodd" d={svgPaths.p2d885200} fill="var(--fill-0, #151515)" fillRule="evenodd" id="Vector" />
                <path d={svgPaths.p19cdc700} id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (type === "bold" && icons === "ellipsis") {
    return (
      <div className={className} data-name="Type=bold, Icons=ellipsis">
        <div className="absolute inset-[39.58%_8.33%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 5">
            <path d={svgPaths.p249e1e00} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (type === "bold" && icons === "list") {
    return (
      <div className={className} data-name="Type=bold, Icons=list">
        <div className="absolute inset-[18.75%_8.33%]" data-name="Group">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 15">
            <g id="Group">
              <path d={svgPaths.p3b1bf9f0} fill="var(--fill-0, #151515)" id="Vector" />
              <path clipRule="evenodd" d={svgPaths.p5f2c000} fill="var(--fill-0, #151515)" fillRule="evenodd" id="Vector_2" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (type === "linear" && icons === "home1") {
    return (
      <div className={className} data-name="Type=linear, Icons=home1">
        <div className="absolute contents inset-0" data-name="Box">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="home-2">
              <path d={svgPaths.p3f45000} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M12 17.99V14.99" id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              <g id="Vector_3" opacity="0"></g>
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (type === "desing" && icons === "page-error") {
    return (
      <div className={className} data-name="Type=desing, Icons=page-error">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76 76">
          <g id="Group">
            <path d={svgPaths.p17261880} fill="var(--fill-0, #E4F7F7)" id="Vector" />
          </g>
        </svg>
        <div className="absolute aspect-[16/16] left-[21.05%] overflow-clip right-[21.05%] top-[16px]" data-name="document-error">
          <div className="absolute inset-[6.25%_12.5%_6.26%_6.25%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(72, 178, 175, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 39">
                <path d={svgPaths.p3693cb00} fill="var(--fill-0, #48B2AF)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "desing" && icons === "document-error") {
    return (
      <div className={className} data-name="Type=desing, Icons=document-error">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(228, 247, 247, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76 76">
            <path d={svgPaths.p17261880} fill="var(--fill-0, #E4F7F7)" id="Vector" />
          </svg>
        </div>
        <div className="absolute bottom-[24.55%] left-[44.74%] right-[45.02%] top-1/4" data-name="Vector">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(72, 178, 175, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 39">
              <path d={svgPaths.p19566300} fill="var(--fill-0, #48B2AF)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (type === "desing" && icons === "wrench") {
    return (
      <div className={className} data-name="Type=desing, Icons=wrench">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76 76">
          <g id="Group">
            <path d={svgPaths.p17261880} fill="var(--fill-0, #E4F7F7)" id="Vector" />
          </g>
        </svg>
        <div className="absolute aspect-[24/24] left-[19.74%] overflow-clip right-[19.74%] top-[15px]" data-name="wrench">
          <div className="absolute inset-[9.37%_9.58%_9.58%_9.38%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(72, 178, 175, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
                <path d={svgPaths.p541d2f0} fill="var(--fill-0, #48B2AF)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "desing" && icons === "traffic") {
    return (
      <div className={className} data-name="Type=desing, Icons=traffic">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76 76">
          <g id="Group">
            <path d={svgPaths.p17261880} fill="var(--fill-0, #E4F7F7)" id="Vector" />
          </g>
        </svg>
        <div className="absolute aspect-[14/14] left-[23.68%] overflow-clip right-[23.68%] top-[calc(50%-1px)] translate-y-[-50%]" data-name="traffic">
          <div className="absolute contents inset-[3.79%_0.45%_2.46%_0.44%]" data-name="Group">
            <div className="absolute inset-[3.79%_16%_7.81%_16%]" data-name="Vector">
              <div className="absolute inset-0" style={{ "--fill-0": "rgba(126, 212, 210, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 36">
                  <path clipRule="evenodd" d={svgPaths.p149a6300} fill="var(--fill-0, #7ED4D2)" fillRule="evenodd" id="Vector" />
                </svg>
              </div>
            </div>
            <div className="absolute inset-[32.14%_0.45%_2.46%_0.44%]" data-name="Vector">
              <div className="absolute inset-0" style={{ "--fill-0": "rgba(72, 178, 175, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 27">
                  <path clipRule="evenodd" d={svgPaths.p24fdc880} fill="var(--fill-0, #48B2AF)" fillRule="evenodd" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "desing" && icons === "crystalball 2") {
    return (
      <div className={className} data-name="Type=desing, Icons=crystalball 2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76 76">
          <g id="Group">
            <path d={svgPaths.p17261880} fill="var(--fill-0, #E4F7F7)" id="Vector" />
          </g>
        </svg>
        <div className="absolute inset-[20.11%_23.69%_18.25%_23.68%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 47">
            <g id="Group 427318581">
              <path d={svgPaths.p3c614d00} fill="var(--fill-0, #557170)" id="Vector" />
              <path d={svgPaths.p18b6ef00} fill="var(--fill-0, #3FB5B3)" id="Vector_2" />
              <path d={svgPaths.p3c72f600} fill="var(--fill-0, #8BE1DF)" id="Vector_3" />
              <path d={svgPaths.p1b0f700} fill="var(--fill-0, #3FB5B3)" id="Vector_4" />
              <path d={svgPaths.p3aa54400} fill="var(--fill-0, #3FB5B3)" id="Vector_5" />
              <path d={svgPaths.p320f2280} fill="var(--fill-0, #C8FFFD)" id="Vector_6" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (type === "desing" && icons === "star duotone") {
    return (
      <div className={className} data-name="Type=desing, Icons=star duotone">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76 76">
          <g id="Group">
            <path d={svgPaths.p17261880} fill="var(--fill-0, #E4F7F7)" id="Vector" />
          </g>
        </svg>
        <div className="absolute aspect-[24/24] left-[13.16%] overflow-clip right-[13.16%] top-[9px]" data-name="star duotone">
          <div className="absolute inset-[29.5%_21.97%_8.33%_8.33%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(72, 178, 175, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 35">
                <path d={svgPaths.p2a521a80} fill="var(--fill-0, #48B2AF)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[8.33%_8.34%_29.16%_33.33%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(72, 178, 175, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 35">
                <path d={svgPaths.p58a5d00} fill="var(--fill-0, #48B2AF)" id="Vector" opacity="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "desing" && icons === "cloud-error") {
    return (
      <div className={className} data-name="Type=desing, Icons=cloud-error">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76 76">
          <g id="Group">
            <path d={svgPaths.p17261880} fill="var(--fill-0, #E4F7F7)" id="Vector" />
          </g>
        </svg>
        <div className="absolute aspect-[24/24] left-[15.79%] overflow-clip right-[15.79%] top-1/2 translate-y-[-50%]" data-name="cloud-error">
          <div className="absolute inset-[18.75%_6.29%_18.75%_6.24%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(72, 178, 175, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 33">
                <path clipRule="evenodd" d={svgPaths.p213c1700} fill="var(--fill-0, #48B2AF)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "desing" && icons === "wifi-error") {
    return (
      <div className={className} data-name="Type=desing, Icons=wifi-error">
        <div className="absolute aspect-[24/24] left-[18.42%] overflow-clip right-[18.42%] top-1/2 translate-y-[-50%]" data-name="iconoir:wifi-error">
          <div className="absolute inset-[15.1%_8.33%_10.98%_8.33%]" data-name="Vector">
            <div className="absolute inset-[-7.05%_-6.25%]" style={{ "--stroke-0": "rgba(72, 178, 175, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 41">
                <path d={svgPaths.p34b2b380} id="Vector" stroke="var(--stroke-0, #48B2AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
              </svg>
            </div>
          </div>
        </div>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76 76">
          <g id="Group">
            <path d={svgPaths.p17261880} fill="var(--fill-0, #E4F7F7)" id="Vector" />
          </g>
        </svg>
      </div>
    );
  }
  if (type === "desing" && icons === "lock2") {
    return (
      <div className={className} data-name="Type=desing, Icons=lock2">
        <div className="absolute inset-[8.93%_21.63%_31.82%_25.16%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 15">
            <path d={svgPaths.p37dbae00} fill="var(--fill-0, #A0D2D1)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[43.81%_9.27%_2.84%_12.81%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 13">
            <path d={svgPaths.p1ef4aaf0} fill="var(--fill-0, #48B2AF)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[51.74%_75.84%_10.77%_18.04%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 9">
            <path d={svgPaths.p10aa5400} fill="var(--fill-0, #8BD4D2)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (type === "desing" && icons === "magnifying-glass") {
    return (
      <div className={className} data-name="Type=desing, Icons=magnifying-glass">
        <div className="absolute inset-[54.7%_23.92%_23.69%_54.48%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p2b9fdf90} fill="var(--fill-0, #48B2AF)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[62.9%_0.27%_0.04%_62.67%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
            <path d={svgPaths.p349d8f80} fill="var(--fill-0, #557170)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[0.47%_24.76%_24.53%_0.24%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p3896100} fill="var(--fill-0, #48B2AF)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[11.58%_35.87%_35.64%_11.35%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <path d={svgPaths.p23aa4b00} fill="var(--fill-0, #E7FFFE)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (type === "desing" && icons === "directions") {
    return (
      <div className={className} data-name="Type=desing, Icons=directions">
        <div className="absolute contents inset-0" data-name="Group">
          <div className="absolute contents inset-0" data-name="Clip path group">
            <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[24px_24px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="Group">
                  <path d={svgPaths.p31f5d800} fill="var(--fill-0, #8BE1DF)" id="Vector" />
                  <path d={svgPaths.p21631380} fill="var(--fill-0, #7FD5D3)" id="Vector_2" />
                  <path d={svgPaths.p5ae1b00} fill="var(--fill-0, #557170)" id="Vector_3" />
                  <path d={svgPaths.p25bcb800} fill="var(--fill-0, #557170)" id="Vector_4" />
                  <g id="Vector_5"></g>
                  <path d={svgPaths.p1266a880} fill="var(--fill-0, #E7FFFE)" id="Vector_6" />
                  <g id="Vector_7"></g>
                  <g id="Vector_8"></g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "desing" && icons === "crystalball 1") {
    return (
      <div className={className} data-name="Type=desing, Icons=crystalball 1">
        <div className="absolute inset-[68.77%_22.2%_1.08%_20.47%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 8">
            <path d={svgPaths.p6949280} fill="var(--fill-0, #557170)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[1.35%_10.15%_15.33%_6.53%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p4f1db80} fill="var(--fill-0, #3FB5B3)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[1.35%_11.83%_18.45%_8.41%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.pbc87d00} fill="var(--fill-0, #8BE1DF)" id="Vector" />
          </svg>
        </div>
        <div className="absolute bottom-1/2 left-[61.67%] right-[28.33%] top-[40%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p39a43140} fill="var(--fill-0, #3FB5B3)" id="Vector" />
          </svg>
        </div>
        <div className="absolute flex inset-[45%_62.53%_44.2%_26.67%] items-center justify-center">
          <div className="flex-none rotate-[31.148deg] size-[1.888px]">
            <div className="relative size-full" data-name="Vector">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
                <path d={svgPaths.p127ff100} fill="var(--fill-0, #3FB5B3)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute inset-[12.5%_44.99%_76.24%_43.75%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p3488f780} fill="var(--fill-0, #C8FFFD)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (type === "linear" && icons === "plus") {
    return (
      <div className={className} data-name="Type=linear, Icons=plus">
        <div className="absolute inset-[16.66%_16.67%_16.67%_16.67%]" data-name="Vector">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(21, 21, 21, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d={svgPaths.p3fffcc00} fill="var(--fill-0, #151515)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (type === "bold" && icons === "Right arrow") {
    return (
      <div className={className} data-name="Type=bold, Icons=Right arrow">
        <div className="absolute h-[24px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[30px]" data-name="Vector">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(212, 212, 212, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 24">
              <path d={svgPaths.p25f6fa00} fill="var(--fill-0, #D4D4D4)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (type === "bold" && icons === "direct-normal") {
    return (
      <div className={className} data-name="Type=bold, Icons=direct-normal">
        <div className="absolute contents inset-0" data-name="vuesax/bold/direct-normal">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="direct-normal">
              <path d={svgPaths.p1139d600} fill="var(--fill-0, #151515)" id="Vector" />
              <path d={svgPaths.p1f982b00} fill="var(--fill-0, #151515)" id="Vector_2" />
              <g id="Vector_3" opacity="0"></g>
              <g id="Vector_4" opacity="0"></g>
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (type === "linear" && icons === "download") {
    return (
      <div className={className} data-name="Type=linear, Icons=download">
        <div className="absolute inset-[6.25%_17.19%_6.25%_14.06%]" data-name="Vector">
          <div className="absolute inset-[-5.36%_-6.82%]" style={{ "--stroke-0": "rgba(21, 21, 21, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 16">
              <path d={svgPaths.p27eba400} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (type === "linear" && icons === "user 2") {
    return (
      <div className={className} data-name="Type=linear, Icons=user 2">
        <div className="absolute bottom-[-245.83%] contents left-[-77px] top-0" data-name="vuesax/linear/user">
          <div className="absolute bottom-[-245.83%] left-[-320.83%] right-0 top-0" data-name="user">
            <div className="absolute bottom-[-0.9%] left-[-0.3%] right-0 top-0">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 102 84">
                <g id="user">
                  <path d={svgPaths.p2efcc400} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d={svgPaths.p16811880} id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <g id="Vector_3" opacity="0"></g>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute inset-[10.42%_33.33%_56.25%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-9.38%]" style={{ "--stroke-0": "rgba(21, 21, 21, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
              <path d={svgPaths.pf83c980} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute h-[8px] left-[16.67%] right-[16.67%] top-[calc(50%+6px)] translate-y-[-50%]" data-name="Vector">
          <div className="absolute inset-[-9.38%_-4.69%]" style={{ "--stroke-0": "rgba(21, 21, 21, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 10">
              <path d={svgPaths.p31866380} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (type === "linear" && icons === "user-circle") {
    return (
      <div className={className} data-name="Type=linear, Icons=user-circle">
        <div className="absolute inset-[4.17%]" data-name="Group">
          <div className="absolute inset-[-3.41%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Group">
                <path d={svgPaths.p3ecd9480} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path d={svgPaths.p9ed5380} id="Vector_2" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (type === "bold" && icons === "pen") {
    return (
      <div className={className} data-name="Type=bold, Icons=pen">
        <div className="absolute inset-[88.54%_13.54%_5.21%_13.54%]" data-name="Vector">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(109, 109, 109, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 2">
              <path clipRule="evenodd" d={svgPaths.p702f800} fill="var(--fill-0, #6D6D6D)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[16.66%] right-[16.67%] top-[8.33%]" data-name="Vector">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(109, 109, 109, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d={svgPaths.p3d803680} fill="var(--fill-0, #6D6D6D)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (type === "bold" && icons === "trash") {
    return (
      <div className={className} data-name="Type=bold, Icons=trash">
        <div className="absolute inset-[8.35%_10.69%]" data-name="Vector">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(250, 91, 74, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 20">
              <path d={svgPaths.p2ac10400} fill="var(--fill-0, #FA5B4A)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (type === "desing" && icons === "Wave") {
    return (
      <div className={className} data-name="Type=desing, Icons=Wave">
        <div className="absolute inset-[15.23%_1.22%_25.82%_1.19%]" data-name="Vector">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(72, 178, 175, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 15">
              <path d={svgPaths.p8bd0d80} fill="var(--fill-0, #48B2AF)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[62.68%_1.17%_4.3%_1.11%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 8">
            <path d={svgPaths.p27b97600} fill="var(--fill-0, #8BE1DF)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  return (
    <div className={className} data-name="Type=linear, Icons=arrow-right">
      <div className="absolute contents inset-0" data-name="Box">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="arrow-right">
            <path d={svgPaths.p1c2f080} id="Vector" stroke="var(--stroke-0, #151515)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
            <g id="Vector_2" opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component({ className }: { className?: string }) {
  return (
    <div className={className} data-name="상세 풀이">
      <div className="absolute bottom-[-907px] content-stretch flex flex-col items-start left-1/2 overflow-clip translate-x-[-50%] w-[390px]">
        <div className="h-[28px] relative shrink-0 w-full" data-name="Home Indicator/Light">
          <div className="absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-0 top-0">
        <IndependentIPhoneStatusBar className="bg-white h-[47px] overflow-clip relative shrink-0 w-[390px]" size="390" />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[390px]" data-name="Navigation / Top Navigation (Widget)">
          <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="Navigation / Top Bar">
            <div className="flex flex-col justify-center size-full">
              <div className="content-stretch flex flex-col h-[52px] items-start justify-center px-[12px] py-[4px] relative w-full">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Icon">
                  <ButtonIconButton className="content-stretch flex items-center justify-center opacity-0 p-[4px] relative rounded-[12px] shrink-0 size-[44px]" size="md" />
                  <p className="[white-space-collapse:collapse] basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold grow leading-[25.5px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-black text-center text-nowrap tracking-[-0.36px]">상세 풀이</p>
                  <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px]" data-name="Right Action">
                    <div className="relative shrink-0 size-[24px]" data-name="Icons">
                      <div className="absolute contents inset-0" data-name="linear/close">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                          <g id="Box">
                            <path d="M4 20L20 4" id="Vector" stroke="var(--stroke-0, #868686)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                            <path d="M20 20L4 4" id="Vector_2" stroke="var(--stroke-0, #868686)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                            <g id="Vector_3" opacity="0"></g>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-0 top-[99px] w-[390px]">
        <div className="bg-[#f7f8f9] relative shrink-0 w-full" data-name="List / Contents Product card">
          <div className="size-full">
            <div className="content-stretch flex flex-col items-start px-[20px] py-[12px] relative w-full">
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[350px]" data-name="Container">
                <div className="h-[54px] pointer-events-none relative rounded-[12px] shrink-0 w-[80px]" data-name="Gemini_Generated_Image_e2poh7e2poh7e2po 4">
                  <div className="absolute inset-0 overflow-hidden rounded-[12px]">
                    <img alt="" className="absolute h-[124.5%] left-[-4.05%] max-w-none top-[-12.25%] w-[108.11%]" src={img} />
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#f9f9f9] border-solid inset-[-1px] rounded-[13px]" />
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
                  <div className="bg-[#e7e7e7] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Label Box">
                    <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#6d6d6d] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre">무료 체험판</p>
                  </div>
                  <div className="relative shrink-0 w-full" data-name="Container">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center px-[2px] py-0 relative w-full">
                        <p className="basis-0 font-['Pretendard_Variable:Medium',sans-serif] font-medium grow leading-[23.5px] min-h-px min-w-px relative shrink-0 text-[15px] text-black tracking-[-0.3px]">내 곁의 사람, 다른 이에게 끌리고 있을까?</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[52px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
            <div className="relative shrink-0 w-full" data-name="Text Component 3">
              <div className="size-full">
                <div className="content-stretch flex flex-col items-start px-[20px] py-0 relative w-full">
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
                    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
                      <div className="bg-[#f0f8f8] content-stretch flex items-center justify-center px-[6px] py-px relative rounded-[8px] shrink-0" data-name="Label Box">
                        <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#41a09e] text-[13px] text-nowrap whitespace-pre">Q1</p>
                      </div>
                      <div className="relative shrink-0 w-full" data-name="Container">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center px-[2px] py-0 relative w-full">
                            <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Container">
                              <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[17px] text-black tracking-[-0.34px]">지금 그의 마음은 여전히 내 곁에 머물고 있을까?</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                      <div className="relative shrink-0 w-full" data-name="Container">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center px-[2px] py-0 relative w-full">
                            <p className="basis-0 font-['Pretendard_Variable:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal grow leading-[28.5px] min-h-px min-w-px relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">사주 흐름을 보면 기본적으로 인연의 끌림은 유지되고 있습니다. 다만 월운(月運)의 기운이 변하는 시기라, 마음이 흔들리거나 외부에 시선이 갈 가능성이 있습니다. 그러나 이는 일시적인 기류일 뿐, 본질적인 마음은 여전히 당신 곁에 머무르는 모습이 강하게 보입니다.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#f3f3f3] h-px shrink-0 w-full" />
            <div className="relative shrink-0 w-full" data-name="Text Component 3">
              <div className="size-full">
                <div className="content-stretch flex flex-col items-start px-[20px] py-0 relative w-full">
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
                    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
                      <div className="bg-[#f0f8f8] content-stretch flex items-center justify-center px-[6px] py-px relative rounded-[8px] shrink-0" data-name="Label Box">
                        <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#41a09e] text-[13px] text-nowrap whitespace-pre">Q2</p>
                      </div>
                      <div className="relative shrink-0 w-full" data-name="Container">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center px-[2px] py-0 relative w-full">
                            <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Container">
                              <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[17px] text-black tracking-[-0.34px]">혹시 다른 사람에게 마음이 기울고 있는 건 아닐까?</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                      <div className="relative shrink-0 w-full" data-name="Container">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center px-[2px] py-0 relative w-full">
                            <p className="basis-0 font-['Pretendard_Variable:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal grow leading-[28.5px] min-h-px min-w-px relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">상대방의 사주 속 정인(正印)과 관성(官星) 흐름을 보면, 기본적으로 안정과 책임감을 중시하는 기운이 있습니다. 다른 사람에게 쉽게 빠지는 성향은 강하지 않지만, 작은 유혹이나 새로운 자극에는 흔들릴 수 있는 약한 틈이 있습니다. 신뢰를 유지하고 대화를 이어가는 것이 중요합니다.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#f3f3f3] h-px shrink-0 w-full" />
            <div className="relative shrink-0 w-full" data-name="Text Component 4">
              <div className="size-full">
                <div className="content-stretch flex flex-col items-start px-[20px] py-0 relative w-full">
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
                    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
                      <div className="bg-[#f0f8f8] content-stretch flex items-center justify-center px-[6px] py-px relative rounded-[8px] shrink-0" data-name="Label Box">
                        <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#41a09e] text-[13px] text-nowrap whitespace-pre">Q3</p>
                      </div>
                      <div className="relative shrink-0 w-full" data-name="Container">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center px-[2px] py-0 relative w-full">
                            <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Container">
                              <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[17px] text-black tracking-[-0.34px]">앞으로 우리의 관계는 안정적으로 이어질까, 흔들리게 될까?</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                      <div className="relative shrink-0 w-full" data-name="Container">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center px-[2px] py-0 relative w-full">
                            <p className="basis-0 font-['Pretendard_Variable:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal grow leading-[28.5px] min-h-px min-w-px relative shrink-0 text-[#151515] text-[16px] tracking-[-0.32px]">세운(歲運)의 기운은 전반적으로 평온한 흐름을 보입니다. 다만 작은 사건이나 오해가 생기면 균열로 번질 수 있으니, 지금은 서로의 마음을 자주 확인하고 안정감을 주는 것이 필요합니다. 올바른 신뢰를 쌓는다면 장기적으로는 안정된 인연으로 이어질 가능성이 큽니다.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#f8f8f8] relative shrink-0 w-full" data-name="Promotion / Promo Banner">
            <div className="size-full">
              <div className="content-stretch flex flex-col items-start p-[20px] relative w-full">
                <div className="bg-white relative rounded-[16px] shadow-[6px_7px_12px_0px_rgba(0,0,0,0.04),-3px_-3px_12px_0px_rgba(0,0,0,0.04)] shrink-0 w-full" data-name="Container">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center px-[20px] py-[12px] relative w-full">
                      <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Content">
                        <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Text Block">
                          <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[23.5px] relative shrink-0 text-[#151515] text-[15px] tracking-[-0.3px] w-full">월급쟁이에서 벗어나, 대박의 길로</p>
                          <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#848484] text-[13px] tracking-[-0.26px] w-full">퇴사 후 대박 터질 타이밍 알려드립니다.</p>
                        </div>
                        <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Image and Icon">
                          <div className="h-[60px] relative shrink-0 w-[78px]" data-name="111133 1">
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                              <img alt="" className="absolute h-[109.46%] left-[-135.91%] max-w-none top-[-5.41%] w-[235.36%]" src={img1} />
                            </div>
                          </div>
                          <Icons className="relative shrink-0 size-[16px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full">
            <div className="relative shrink-0 w-full" data-name="Text / Section Title">
              <div className="flex flex-col items-center size-full">
                <div className="content-stretch flex flex-col gap-[12px] items-center px-[20px] py-0 relative w-full">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Title Container">
                      <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[17px] text-black tracking-[-0.34px]">이런 운세는 어때요?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white relative shrink-0 w-full" data-name="Card / Browse Card List">
              <div className="size-full">
                <div className="content-stretch flex flex-col gap-[4px] items-start px-[20px] py-0 relative w-full">
                  <div className="h-0 relative shrink-0 w-[350px]">
                    <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]" style={{ "--stroke-0": "rgba(249, 249, 249, 1)" } as React.CSSProperties}>
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
                        <path d="M0 0.5H350" id="Vector 10" stroke="var(--stroke-0, #F9F9F9)" />
                      </svg>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col h-[78px] items-center justify-center px-0 py-[12px] relative rounded-[16px] shrink-0 w-full" data-name="Card / Browse Card">
                    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
                      <div className="h-[54px] pointer-events-none relative rounded-[12px] shrink-0 w-[80px]" data-name="Gemini_Generated_Image_e2poh7e2poh7e2po 4">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[12px] size-full" src={img2} />
                        <div aria-hidden="true" className="absolute border border-[#f9f9f9] border-solid inset-[-1px] rounded-[13px]" />
                      </div>
                      <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
                        <div className="relative shrink-0 w-full" data-name="Container">
                          <div className="flex flex-row items-center justify-center size-full">
                            <div className="content-stretch flex items-center justify-center px-[2px] py-0 relative w-full">
                              <p className="basis-0 font-['Pretendard_Variable:Medium',sans-serif] font-medium grow leading-[23.5px] min-h-px min-w-px relative shrink-0 text-[15px] text-black tracking-[-0.3px]">내 곁의 사람, 다른 이에게 끌리고 있을까?</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[#f0f8f8] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Label Box">
                          <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#41a09e] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre">심화 해석판</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-0 relative shrink-0 w-[350px]" data-name="Divider">
                    <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]" style={{ "--stroke-0": "rgba(249, 249, 249, 1)" } as React.CSSProperties}>
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
                        <path d="M0 0.5H350" id="Vector 10" stroke="var(--stroke-0, #F9F9F9)" />
                      </svg>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col h-[105px] items-center justify-center px-0 py-[12px] relative rounded-[16px] shrink-0 w-full" data-name="Card / Browse Card">
                    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
                      <div className="h-[54px] pointer-events-none relative rounded-[12px] shrink-0 w-[80px]" data-name="Gemini_Generated_Image_e2poh7e2poh7e2po 4">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[12px] size-full" src={img2} />
                        <div aria-hidden="true" className="absolute border border-[#f9f9f9] border-solid inset-[-1px] rounded-[13px]" />
                      </div>
                      <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
                        <div className="relative shrink-0 w-full" data-name="Title Container">
                          <div className="flex flex-row items-center justify-center size-full">
                            <div className="content-stretch flex items-center justify-center px-[2px] py-0 relative w-full">
                              <p className="-webkit-box basis-0 font-['Pretendard_Variable:Medium',sans-serif] font-medium grow h-[47px] leading-[23.5px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[15px] text-black tracking-[-0.3px]">혹시 내가 놓치고 있는 사랑의 기회가 있진 않을까, 운명처럼 다가올 인연은 이미 내 곁에 와 있을지도 모릅니다.</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[#f9f9f9] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Label Box">
                          <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#848484] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre">무료 체험판</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-0 relative shrink-0 w-[350px]" data-name="Divider">
                    <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]" style={{ "--stroke-0": "rgba(249, 249, 249, 1)" } as React.CSSProperties}>
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 350 1">
                        <path d="M0 0.5H350" id="Vector 10" stroke="var(--stroke-0, #F9F9F9)" />
                      </svg>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col h-[78px] items-center justify-center px-0 py-[12px] relative rounded-[16px] shrink-0 w-full" data-name="Card / Browse Card">
                    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
                      <div className="h-[54px] pointer-events-none relative rounded-[12px] shrink-0 w-[80px]" data-name="Gemini_Generated_Image_e2poh7e2poh7e2po 4">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[12px] size-full" src={img2} />
                        <div aria-hidden="true" className="absolute border border-[#f9f9f9] border-solid inset-[-1px] rounded-[13px]" />
                      </div>
                      <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
                        <div className="relative shrink-0 w-full" data-name="Container">
                          <div className="flex flex-row items-center justify-center size-full">
                            <div className="content-stretch flex items-center justify-center px-[2px] py-0 relative w-full">
                              <p className="basis-0 font-['Pretendard_Variable:Medium',sans-serif] font-medium grow leading-[23.5px] min-h-px min-w-px relative shrink-0 text-[15px] text-black tracking-[-0.3px]">바람의 징조, 이미 시작 됐을까?</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[#f0f8f8] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Label Box">
                          <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#41a09e] text-[12px] text-nowrap tracking-[-0.24px] whitespace-pre">심화 해석판</p>
                        </div>
                      </div>
                    </div>
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

export default function Component1() {
  return <Component className="bg-white relative size-full" />;
}