// 📁 MainSection.tsx
"use client";

import React from "react";
import "../style/MainSection.css";

export const MainSection = () => {
  const scrollToSection = (top: number) => {
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section className="main-section">
      <div className="text-wrapper-4">Portfolio</div>

      <div className="about-me-skills">
        <button onClick={() => scrollToSection(950)}>About me</button><br />
        <button onClick={() => scrollToSection(1900)}>Skills</button><br />
        <button onClick={() => scrollToSection(2800)}>Project</button><br />
        <button onClick={() => scrollToSection(4000)}>Contact</button>
      </div>

      <div className="hero-arrows">
        <div className="arrow-box" />
        <img src="/arrow-1.svg" alt="화살표 아래1" className="arrow-down1" />
        <img src="/arrow-2.svg" alt="화살표 아래2" className="arrow-down2" />
      </div>

      <p className="div-2">
        <span className="span">당신의 일상에 </span>
        <span className="text-wrapper-5">스토리</span>
        <span className="span">를 더하다.</span>
      </p>

      <div className="overlap">
        <p className="div-3">
          <span className="span">미디어 콘텐츠 기획자<br /></span>
          <span className="text-wrapper-5">허태웅</span>
          <span className="span">의 포트폴리오 입니다!</span>
        </p>
        <div className="rectangle-2" />
        <div className="text-wrapper-6">800 x 210</div>
        <div className="rectangle-3" />
        <div className="rectangle-4" />
        <div className="rectangle-5" />
        <div className="rectangle-6" />
        <div className="rectangle-7" />
      </div>
    </section>
  );
};