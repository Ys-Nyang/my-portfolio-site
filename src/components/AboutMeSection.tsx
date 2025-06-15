// 📁 AboutMeSection.tsx
import React from "react";
import "../style/AboutMeSection.css";

export const AboutMeSection = () => {
  return (
   <section className="about-me-section">
      <div className="overlap-2">
        <div className="text-wrapper-7">About me</div>
        <div className="overlap-3">
          <div className="text-wrapper-8">영상과 디자인에 스토리를 담습니다.</div>
          <div className="text-wrapper-9">콘텐츠를 사랑하는 제작자, 허태웅입니다.</div>
        </div>
        <div className="overlap-4">
          <div className="text-wrapper-10">KSU</div>
          <div className="text-wrapper-11">경성대학교 미디어콘텐츠학과</div>
        </div>
        <div className="overlap-5">
          <div className="text-wrapper-12">+</div>
          <div className="text-wrapper-13">+</div>
          <div className="text-wrapper-14">콘텐츠</div>
          <div className="rectangle-8" />
          <div className="text-wrapper-15">디자인</div>
          <div className="rectangle-9" />
          <div className="text-wrapper-16">스토리</div>
          <div className="rectangle-10" />
        </div>
      </div>
    </section>
  );
};