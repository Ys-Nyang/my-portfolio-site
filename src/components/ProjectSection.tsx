"use client";

import React, { useEffect, useState } from "react";
import Modal from "../components/popup/Modal";
import "../components/Popup/Modal.css";
import "../style/ProjectSection.css";

const images = [
  "/image/projects/slide1.png",
  "/image/projects/slide2.png",
  "/image/projects/slide3.png",
  "/image/projects/slide4.png",
];

const projectData = [
  {
    title: "유튜버 편집자 활동",
    description: "짧게나마 애니메이션 리뷰 유튜버 분의 편집자로 활동했습니다.",
    items: [
      "N5G_0EGRs7c",
      "fa5MBDyZVt4"
    ],
    type: "youtube"
  },
  {
    title: "팀 유튜브 활동",
    description: "TEAM 아토의 유튜브 콘텐츠 제작 활동입니다.",
    items: [
      "b1SUoZGKFUI", "QLybYUi6ftY", "f_kKqcdmj8I", "haNyjtwUW6U",
      "1_9qn_SRmZ0", "WDS1gxYjLDc", "I50W_wsWC34"
    ],
    type: "youtube"
  },
  {
    title: "콘텐츠 제작 팀 운영",
    description: "마인크래프트 맵을 직접 제작하고 배포한 결과물입니다.",
    items: [
      { src: "/image/projects/map1.png", link: "https://cafe.naver.com/minecraftgame/1692007" },
      { src: "/image/projects/map2.jpg", link: "https://cafe.naver.com/minecraftgame/1717336" },
      { src: "/image/projects/map3.jpg", link: "https://cafe.naver.com/minecraftgame/1731678" },
      { src: "/image/projects/map4.png", link: "https://cafe.naver.com/minecraftgame/1778364" },
      { src: "/image/projects/map5.png", link: "https://www.koreaminecraft.net/map/2893318" },
      { src: "/image/projects/map6.png", link: "https://www.koreaminecraft.net/map/3120287" },
      { src: "/image/projects/map7.png", link: "https://www.koreaminecraft.net/map/3336919" },
      { src: "/image/projects/map8.png", link: "https://cafe.naver.com/minecraftgame/1913443" }
    ],
    type: "image"
  },
  {
    title: "개인 외주 활동",
    description: "의뢰를 받아 다양한 콘텐츠 영상을 제작한 사례입니다.",
    items: [
      "OYRe9cC-5oM", "mHeOsRx1wkA", "ASlaBxlish8",
      "9H9KK0XkrEw", "R3TYN9PdcmU", "tXoEy6P64bk"
    ],
    type: "youtube"
  }
];

export default function ProjectSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<null | typeof projectData[0]>(null);
  const duration = 4000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, duration);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToSlide = (index: number) => setCurrentIndex(index);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  return (
    <section className="project-section">
      <div className="text-wrapper-2">Project</div>

      <div className="slider-container">
        <div
          className="slider-wrapper"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`slide-${idx}`}
              className="slide"
              onClick={() => setSelected(projectData[idx])}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>

        <div className="nav-arrow left" onClick={() => {
          prevSlide();
          setSelected(null); // 선택 초기화
        }}>◀</div>
        <div className="nav-arrow right" onClick={() => {
          nextSlide();
          setSelected(null);
        }}>▶</div>

        <div className="progress-bars">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`bar ${idx === currentIndex ? "active" : ""}`}
              onClick={() => {
                goToSlide(idx);
                setSelected(null);
              }}
            >
              <div
                className="fill"
                style={{
                  animationDuration: `${duration}ms`
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <Modal
          title={selected.title}
          description={selected.description}
          onClose={() => setSelected(null)}
        >
          {selected.type === "youtube" &&
            selected.items.map((id) => (
              <a key={id} href={`https://youtube.com/watch?v=${id}`} target="_blank">
            <img
           src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
          alt="유튜브 썸네일"
        style={{ width: "200px", borderRadius: "8px", marginRight: "8px" }}
      />
    </a>
))}

{selected.type === "image" &&
  selected.items.map((item, idx) => (
    <a key={idx} href={item.link} target="_blank">
      <img
        src={item.src}
        alt={`map${idx + 1}`}
        style={{ width: "200px", borderRadius: "8px", marginRight: "8px" }}
      />
    </a>
))}
        </Modal>
      )}
    </section>
  );
}