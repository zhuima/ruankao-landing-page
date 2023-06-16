import "./countdown.css";

import DigitBox from "./digitbox";

interface timeProps {
  days: string | number;
  hours: string | number;
  minutes: string | number;
  seconds: string | number;
}

export const Counter = ({ days, hours, minutes, seconds }: timeProps) => {
  let daysFlip = false;
  let hoursFlip = false;
  let minutesFlip = false;
  let secondsFlip = true;

  // @ts-ignore
  if (seconds <= 0 && minutes <= 0 && hours <= 0 && days <= 0) {
    daysFlip = false;
    hoursFlip = false;
    minutesFlip = false;
    secondsFlip = false;
  }

  if (seconds == 0) {
    if (minutes != 0) {
      seconds = 59;
    }

    secondsFlip = false;
    minutesFlip = true;
  }
  if (minutes == 0) {
    if (hours != 0) {
      minutes = 59;
    }

    minutesFlip = false;
    hoursFlip = true;
  }

  if (hours == 0) {
    hoursFlip = false;
    if (days != 0) {
      daysFlip = true;
    }
  }
  // @ts-ignore
  if (days < 10) {
    days = "0" + days;
  }
  // @ts-ignore
  if (hours < 10) {
    hours = "0" + hours;
  }
  // @ts-ignore
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  // @ts-ignore
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return (
    <div className=" mt-2  rounded-xl">
      <div className="grid grid-cols-2 gap-4 py-6 px-10 md:flex md:items-center md:justify-between md:mt-2  rounded-xl md:px-6 md:py-8 ">
        <DigitBox num={days} unit="Days" flip={daysFlip} />
        <span className=" hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50 ">
          :
        </span>
        <DigitBox num={hours} unit="Hours" flip={hoursFlip} />
        <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50 ">
          :
        </span>
        <DigitBox num={minutes} unit="Minutes" flip={minutesFlip} />
        <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50 ">
          :
        </span>
        <DigitBox num={seconds} unit="Seconds" flip={secondsFlip} />
      </div>
    </div>
  );
};
