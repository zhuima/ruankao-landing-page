import CountDown from "../components/countdown";
import "../components/countdown.css";

const page = () => {
  return (
    <div className="flex w-full h-screen flex-col items-center bg-[#1e1f29]">
      <h1 className="font-['Red Hat Text'] font-bold text-white text-4xl  md:text-6xl xl:text-8xl tracking-[6.14px] text-center mt-40 ">
        软 考 倒 计 时
      </h1>
      <CountDown />
    </div>
  );
};

export default page;
