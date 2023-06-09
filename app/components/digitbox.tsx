import "./countdown.css";

interface digitBoxProps {
  num: string | number;
  unit: string;
  flip: boolean;
}
export default function DigitBox({ num, flip, unit }: digitBoxProps) {
  return (
    <div className="flex flex-col items-center px-2">
      <div className="relative bg-transparent flex flex-col items-center justify-center rounded-lg w-[70px] h-[70px] desktop:w-[148px] desktop:h-[140px] text-2xl desktop:text-[80px]">
        <div className="rounded-t-lg bg-[#2c2e3f] w-full h-full"></div>

        <div className="text-[36px] absolute text-[#FB5E84] z-10 font-['Red Hat Text'] font-bold desktop:text-7xl">
          {num}
        </div>
        <div className="rounded-b-lg bg-[#343650] w-full h-full"></div>
        <div
          className={`absolute w-full h-1/2 top-0 rounded-t-lg z-5 ${
            flip ? "animate-flip bg-gray-800" : ""
          }`}
        ></div>
        <div className="absolute -z-10 top-[10px] rounded-b-lg bg-[#191A23] w-full h-full"></div>
        <div className="absolute -right-1 top-[32.5px] desktop:-right-1.5 desktop:top-[63px] rounded-full w-[6px] h-[6px] desktop:w-[12px] desktop:h-[12px] bg-[#1e1f29]"></div>
        <div className="absolute -left-1 top-[32.5px] desktop:-left-1.5 desktop:top-[63px] rounded-full w-[6px] h-[6px] desktop:w-[12px] desktop:h-[12px] bg-[#1e1f29]"></div>
      </div>
      <p className="text-[7px] tracking-[2.96px] mt-3 font-['Red Hat Text'] font-semi-bold text-[#8385A9] desktop:text-[14px]">
        {unit}
      </p>
    </div>
  );
}
