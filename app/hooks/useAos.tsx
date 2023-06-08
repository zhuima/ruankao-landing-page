"use client";
import React, { useState, useEffect } from "react";
// import animate on scroll
// https://github.com/Rajacharles/React-JS-Product-Landing-Page-Animate-On-Scroll/blob/master/src/App.js
import Aos from "aos";
import "aos/dist/aos.css";

export const useAos = () => {
  // animate on scroll initialization
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 0,
    });
  }, []);

  return;
};
