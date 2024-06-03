/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-06-09 10:20:34
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2023-11-07 17:25:00
 * @FilePath: /ruankao-website/components/countdown.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
"use client";
import { useEffect, useState } from "react";
import { Counter } from "./counter";
import "./countdown.css";

const CountDown = () => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  // const timeToDays = 80 * 60 * 60 * 24 * 1000;
  // let countDownDate = new Date().getTime() + timeToDays;

  let countDownDate = new Date("2024/11/09").getTime();

  useEffect(() => {
    let updateTime = setInterval(() => {
      let now = new Date().getTime();

      let difference = countDownDate - now;

      let newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      let newHours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let newMinutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      let newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);

      if (difference <= 0) {
        clearInterval(updateTime);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    });

    return () => {
      clearInterval(updateTime);
    };
  }, []);
  return (
    <Counter days={days} hours={hours} minutes={minutes} seconds={seconds} />
  );
};

export default CountDown;
