import React, { useState, useEffect, useRef } from "react";
import { reviews } from "../dataBase";
import tg from "../images/tgSh.png";
import next from "../images/rNext.svg";
import prev from "../images/rPrev.svg";

const Reviews = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(5);

  const length = reviews.length;

  const handlePrevClick = () => {
    if (currentSlideIndex <= 1) return setCurrentSlideIndex(length);
    setCurrentSlideIndex((prevIndex) => (prevIndex - 1) % length);
  };

  const handleNextClick = () => {
    if (currentSlideIndex >= length - 1) return setCurrentSlideIndex(1);
    setCurrentSlideIndex((currentIndex) => (currentIndex + 1) % length);
  };

  const getSlideClassName = (index) => {
    if (index === currentSlideIndex) {
      return "items main-pos";
    } else if (index === (currentSlideIndex + 1) % length) {
      return "items right-pos";
    } else if (index === (currentSlideIndex - 1) % length) {
      return "items left-pos";
    } else {
      return "items back-pos";
    }
  };

  return (
    <div className="reviews-wrapper" id="reviews">
      <p className="reviews-main-text">
      У нашій групі
        <a href="" target="_blank">
          <img style={{
            width: "183px",
          }} src={tg} alt="tg" />
        </a>
        більше 400 відгуків      </p>
      <p className="reviews-min-text">Ось лише деякі з них:</p>

      <div className="carousel-container">
        <ul className="carousel">
          {reviews.map((slide, index) => {
            const slideIndex = index + 1;
            const slideClassName = getSlideClassName(slideIndex);

            return (
              <li
                key={slideIndex}
                className={slideClassName}
                id={`item-${slideIndex}`}
              >
                <div
                  id={`slide-${index}`}
                  className={`reviews-slider`}
                  key={index}
                >
                  <img
                    className="main-img"
                    src={slide.image}
                    alt={`slide-${index + 1}`}
                  />
                  <div className="block-reviews">
                    <div className="reviews-name">
                      <img
                        className="avatar-img"
                        src={slide.avatar}
                        alt="avatar"
                      />
                      <p>{slide.name}</p>
                    </div>
                    <p className="reviews-text">{slide.text}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="controls">
          <img
            className="btn"
            id="prev"
            onClick={handlePrevClick}
            src={prev}
            alt="prev"
          />
          <img
            className="btn"
            id="next"
            onClick={handleNextClick}
            src={next}
            alt="next"
          />
        </div>
        <div className="dots">
          {Array.from({ length: length }).map((_, index) => {
            return (
              <div
                key={index}
                className={`dot ${
                  index + 1 === currentSlideIndex ? "active-dot" : ""
                }`}
                onClick={() => {
                  setCurrentSlideIndex(index + 1);
                }}
              />
            );
          })}
        </div>
      </div>

      <div className="reviews-footer">
        <p>Більше відгуків</p>
        <a href=" " target="_blank">
        тут
        </a>
      </div>
      <a href="#choose-model" className="modal-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="24"
          viewBox="0 0 22 24"
          fill="none"
        >
          <path
            d="M17.3562 19.8328C16.2344 20.9203 15.0095 20.7486 13.8304 20.2335C12.5827 19.7069 11.4379 19.684 10.1215 20.2335C8.47308 20.9432 7.60308 20.7372 6.6186 19.8328C1.03229 14.0748 1.8565 5.3061 8.19834 4.98557C9.74374 5.06571 10.8198 5.83268 11.7241 5.90136C13.0749 5.62663 14.3685 4.83676 15.8108 4.93978C17.5394 5.07715 18.8444 5.76399 19.7029 7.00031C16.1314 9.14097 16.9785 13.8458 20.2524 15.1623C19.5999 16.8794 18.7528 18.585 17.3448 19.8443L17.3562 19.8328ZM11.6097 4.91689C11.4379 2.36413 13.5099 0.25781 15.891 0.0517578C16.2229 3.00518 13.2123 5.20307 11.6097 4.91689Z"
            fill="white"
          />
        </svg>
        Перейти до вибору
      </a>
    </div>
  );
};

export default Reviews;
