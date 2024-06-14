// components/LottieAnimation.js
"use client";
import React from 'react';
import animationData from '../../public/concrete-truck.json'; // JSON dosyanın yolu

import Lottie from 'react-lottie-player';

const LottieAnimation = () => {
  return <Lottie loop animationData={animationData} play style={{ width: 438, height: 239 }} />;
};

export default LottieAnimation;
