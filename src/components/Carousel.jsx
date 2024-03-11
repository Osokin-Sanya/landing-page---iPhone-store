import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ModalOrder from "./ModalOrder";

function Carousel({ images, by = false, data }) {
  const [showDots, setShowDots] = useState(window.innerWidth >= 1140);
  const [slidesShow, setSlidesShow] = useState(window.innerWidth >= 1140);

  useEffect(() => {
    // Функция, которая будет вызвана при изменении размера окна
    const handleResize = () => {
      // Обновляем состояние showDots в зависимости от размера окна
      setShowDots(window.innerWidth >= 1140);
    };

    // Добавляем слушатель события изменения размера окна
    window.addEventListener("resize", handleResize);

    // Очищаем слушатель при размонтировании компонента
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesShow && by ? 4 : 1,
    slidesToScroll: 1,
    customPaging: function (i) {
      return (
        <a>
          {showDots && !by ? (
            <div className="carousel-img-wrapper">
              <img
                loading="lazy"
                className="carousel-img"
                src={images[i]}
                alt="description"
              />
            </div>
          ) : (
            <div className="dots"></div>
          )}
        </a>
      );
    },
  };

  if (by) {
    return (
      <div className="bu-wrapper-carousel">
        <Slider {...settings}>
          {data.map((slide, index) => (
            <div className="bu-iphons" key={index}>
              <img src={slide.img} alt={`slide-${index + 1}`} />
              <p className="bu-text">{slide.name}</p>
              <p className="bu-price">{slide.price}</p>
              <a
                className="bu-button"
                href="https://wa.me/"
                target="_blank"
              >
                Замовити
              </a>
            </div>
          ))}
        </Slider>
      </div>
    );
  } else {
    return (
      <div className="wrapper-carousel">
        <Slider {...settings}>
          {images.map((slide, index) => (
            <div key={index}>
              <img loading="lazy" src={slide} alt={`slide-${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default Carousel;
