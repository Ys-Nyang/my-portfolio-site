import React from "react";
import "../style/ContactSection.css";

export const ContactSection = () => {

  return (
    <section className="contact-section">
      <div className="text-wrapper-3">Contact</div>

      <div className="contact-list">
        <div className="contact-item">
          <div className="contact-icon">
            <img src="/insta.svg" alt="insta" />
          </div>
          <div className="contact-text">ys_nyang</div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">
            <img src="/email.svg" alt="email" />
          </div>
          <div className="contact-text">did20031@naver.com</div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">
            <img src="/discord.svg" alt="discord" />
          </div>
          <div className="contact-text">discord invite : ys_nyang</div>
        </div>
      </div>
    </section>
  );
};