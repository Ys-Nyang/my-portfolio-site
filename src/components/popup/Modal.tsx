// src/components/popup/Modal.tsx
"use client";

import React, { useRef, useEffect } from "react";
import "./Modal.css";

interface ModalProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, description, children, onClose }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // 모달 오픈 시 body 스크롤 잠금, 언마운트 시 원복
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (scrollRef.current) {
      // 수직 휠을 수평 스크롤로 전환
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        {description && <p className="modal-description">{description}</p>}
        <div
          className="modal-content"
          ref={scrollRef}
         onWheel={handleWheel}
         onWheelCapture={handleWheel}
        >
          <div className="modal-scroll-track">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;