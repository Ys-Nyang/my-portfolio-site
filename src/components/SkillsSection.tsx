// 📁 SkillsSection.tsx
import React from "react";
import "../style/SkillsSection.css";

export const SkillsSection = () => {
  return (
   <section className="skills-section">
      <div className="text-wrapper">Skills</div>
      <p className="p">다양한 툴 사용으로 콘텐츠의 깊이를 더합니다.</p>
      <div className="text-wrapper-17">영상 콘텐츠 제작</div>
      <div className="text-wrapper-18">문서 편집 및 제작</div>
      <div className="text-wrapper-19">디자인 제작</div>

      {/* Adobe 툴 아이콘 */}
      <div className="div-wrapper"><div className="text-wrapper-20">Pr</div>
      <div className="skill-label">Adobe<br/>Premiere Pro</div>
      </div>
      <div className="overlap-6"><div className="text-wrapper-21">Ae</div>
      <div className="skill-label">Adobe<br/>After Effects</div>
      </div>
      <div className="overlap-7"><div className="text-wrapper-22">Id</div>
      <div className="skill-label">Adobe<br/>InDesign</div>
      </div>
      <div className="overlap-8"><div className="text-wrapper-23">Ai</div>
      <div className="skill-label">Adobe<br/>Illustrator</div>
      </div>

      {/* Figma */}
      <div className="icon-wrapper"><img className="icon" src="image.svg" alt="" /></div>
      <div className="text-wrapper-24">Figma</div>

      {/* Arrows */}
      <img className="arrow-2" src="/arrow-3.svg" alt="" />
      <img className="arrow-3" src="/arrow-4.svg" alt="" />
      <img className="arrow-4" src="/arrow-5.svg" alt="" />
    </section>
  );
};