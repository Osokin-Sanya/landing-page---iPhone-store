import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Space, Tooltip } from "antd";
import Carousel from "./Carousel";
import { infoIphons, prices } from "../dataBase";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Calculator() {
  useEffect(() => {
    const clonedSlides = document.querySelectorAll(".slick-slide.slick-cloned");

    clonedSlides.forEach((slide) => {
      slide.setAttribute("aria-hidden", "false");
    });
  }, []);

  const [iphone, setIphone] = useState("");
  const [phoneModel, setPhoneModel] = useState("iPhone 15", {
    default: "iPhone 15",
  });
  const [memorySize, setMemorySize] = useState("128 GB", {
    default: "128 GB",
  });
  const [refundAmount, setRefundAmount] = useState(0, {
    default: 0,
  });
  const [isInfoVisible, setInfoVisible] = useState(false, {
    default: false,
  });

  const [showTooltip, setTooltip] = useState(window.innerWidth >= 1140);

  // Обработчик изменения размера окна
  const handleResize = () => {
    setTooltip(window.innerWidth >= 1140);
  };

  // Подписка на событие изменения размера окна
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Убрать подписку при размонтировании компонента
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleModelChange = useCallback(
    (model) => {
      setPhoneModel(model);
      setMemorySize("256 GB");
    },
    [phoneModel, memorySize]
  );
  useEffect(() => {
    setIphone({ Модель: phoneModel, "Обсяг пам'яті": memorySize });
  }, [phoneModel, memorySize]);

  const handleMemoryChange = useCallback(
    (memory) => {
      setMemorySize(memory);
      console.debug(infoIphons[phoneModel].description);
    },
    [phoneModel, memorySize]
  );

  const handleButtonClick = useCallback(
    (memory) => {
      setMemorySize(memory);
    },
    [memorySize]
  );

  const handleToggleInfo = useCallback(() => {
    setInfoVisible(!isInfoVisible);
  }, [isInfoVisible]);

  useEffect(() => {
    const handleResize = () => {
      setTooltip(window.innerWidth >= 1140);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useMemo(() => {
    const prices = {
      iPhone15: {
        "128GB": {
          Summary: "Сума повернення 128GB",
        },
        "256GB": {
          Summary: "Сума повернення 256GB",
        },
      },
    };

    return prices;
  }, []);

  useEffect(() => {
    const refundAmount = prices[phoneModel]?.[memorySize]?.["Сума повернення"];
    setRefundAmount(refundAmount);
  }, [memorySize]);

  return (
    <>
      <div className="wrapper-calculator">
        <p className="choose-model" id="choose-model">
          Виберіть свою модель Apple
        </p>
        <div className="block-calculator">
          <div className="carousel-calculator">
            <Carousel images={infoIphons[phoneModel].image} />
            <div className="product-container">
              <div className="version-label">Версія</div>
              <div className="model-options">
                {Object.keys(prices).map((model) => (
                  <button
                    className={`model-option calculator-option ${
                      phoneModel === model ? "selected-calculator" : ""
                    }`}
                    key={model}
                    onClick={() => handleModelChange(model)}
                  >
                    {model}
                  </button>
                ))}
              </div>
              <div className="storage-label">Обсяг пам'яті</div>
              <div className="storage-options">
                {Object.keys(prices[phoneModel] || {}).map((memory) => (
                  <button
                    disabled={
                      Object.keys(prices[phoneModel][memory]).length === 0
                    }
                    className={`storage-option calculator-option ${
                      memorySize === memory ? "selected-calculator" : ""
                    } ${
                      Object.keys(prices[phoneModel][memory]).length === 0
                        ? "button-disabled"
                        : ""
                    }`}
                    key={memory}
                    onClick={() => {
                      handleMemoryChange(memory);
                      handleButtonClick(memory);
                    }}
                  >
                    {memory}
                  </button>
                ))}
              </div>
              <div className="logo-aple">
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="15"
                    viewBox="0 0 12 15"
                    fill="none"
                  >
                    <path
                      d="M9.96942 14.1322C9.1963 14.8817 8.35217 14.7634 7.5396 14.4084C6.6797 14.0455 5.8908 14.0297 4.98356 14.4084C3.84754 14.8975 3.24797 14.7555 2.56952 14.1322C-1.28033 10.1641 -0.712317 4.12106 3.6582 3.90017C4.72322 3.95539 5.46479 4.48396 6.08802 4.53129C7.01893 4.34195 7.91039 3.79761 8.9044 3.86861C10.0956 3.96328 10.995 4.43662 11.5867 5.28864C9.1253 6.76389 9.70908 10.0063 11.9653 10.9135C11.5157 12.0969 10.9319 13.2723 9.96153 14.1401L9.96942 14.1322ZM6.00913 3.85284C5.8908 2.09358 7.31871 0.642002 8.95963 0.5C9.18841 2.53537 7.1136 4.05006 6.00913 3.85284Z"
                      fill="white"
                    />
                  </svg>
                </p>
                <p>{phoneModel}</p>
                <p>{memorySize}</p>
                <a
                  href="#payment-main"
                  className="price-formation price-formation-block"
                >
                  Докладніше про формування ціни
                </a>
              </div>
              <div className="wrapper-price">
                {Object.entries(prices[phoneModel]?.[memorySize] || {}).map(
                  ([type, value], index) =>
                    type !== "Сума повернення" && (
                      <div
                        className={`price-info calculator-option price-info-${
                          index + 1
                        }`}
                        key={type}
                      >
                        <div className="text">{type}</div>
                        <div className="price-Tooltip">
                          <div className="price">
                            {parseInt(value).toLocaleString("ua-UA", {
                              style: "currency",
                              currency: "UAH",
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 0,
                            })}
                          </div>

                          {type === "Цена с TAX-Free" && showTooltip && (
                            <Space wrap>
                              <Tooltip
                                title={
                                  <div className="refund-amount">
                                    <p>Сума повернення</p>
                                    <p>{refundAmount}</p>
                                  </div>
                                }
                                color={"#884BE0"}
                                key={"pink"}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                >
                                  <path
                                    d="M6.3 10.5H7.7V6.3H6.3V10.5ZM7 4.9C7.19833 4.9 7.3647 4.8328 7.4991 4.6984C7.6335 4.564 7.70047 4.39787 7.7 4.2C7.7 4.00167 7.6328 3.8353 7.4984 3.7009C7.364 3.5665 7.19787 3.49953 7 3.5C6.80167 3.5 6.6353 3.5672 6.5009 3.7016C6.3665 3.836 6.29953 4.00213 6.3 4.2C6.3 4.39833 6.3672 4.5647 6.5016 4.6991C6.636 4.8335 6.80213 4.90047 7 4.9ZM7 14C6.03167 14 5.12167 13.8161 4.27 13.4484C3.41833 13.0807 2.6775 12.582 2.0475 11.9525C1.4175 11.3225 0.918867 10.5817 0.5516 9.73C0.184333 8.87833 0.000466667 7.96833 0 7C0 6.03167 0.183867 5.12167 0.5516 4.27C0.919333 3.41833 1.41797 2.6775 2.0475 2.0475C2.6775 1.4175 3.41833 0.918867 4.27 0.5516C5.12167 0.184333 6.03167 0.000466667 7 0C7.96833 0 8.87833 0.183867 9.73 0.5516C10.5817 0.919333 11.3225 1.41797 11.9525 2.0475C12.5825 2.6775 13.0814 3.41833 13.4491 4.27C13.8168 5.12167 14.0005 6.03167 14 7C14 7.96833 13.8161 8.87833 13.4484 9.73C13.0807 10.5817 12.582 11.3225 11.9525 11.9525C11.3225 12.5825 10.5817 13.0814 9.73 13.4491C8.87833 13.8168 7.96833 14.0005 7 14ZM7 12.6C8.56333 12.6 9.8875 12.0575 10.9725 10.9725C12.0575 9.8875 12.6 8.56333 12.6 7C12.6 5.43667 12.0575 4.1125 10.9725 3.0275C9.8875 1.9425 8.56333 1.4 7 1.4C5.43667 1.4 4.1125 1.9425 3.0275 3.0275C1.9425 4.1125 1.4 5.43667 1.4 7C1.4 8.56333 1.9425 9.8875 3.0275 10.9725C4.1125 12.0575 5.43667 12.6 7 12.6Z"
                                    fill="white"
                                  />
                                </svg>
                              </Tooltip>
                            </Space>
                          )}
                        </div>
                      </div>
                    )
                )}
                <div className="refund-amount2">
                  <p>Сума повернення</p>
                  <p>
                    {parseInt(refundAmount).toLocaleString("ua-UA", {
                      style: "currency",
                      currency: "UAH",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </p>
                </div>
              </div>
              <a
                href="#payment-main"
                className="price-formation price-formation-none"
              >
                Докладніше про формування ціни
              </a>

              <div className="guarantee-modal">
                <a
                  href="https://wa.me/"
                  target="_blank"
                  className="modal-button button-order2"
                >
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.75049 9.99951C5.75049 9.8006 5.82951 9.60983 5.97016 9.46918C6.11081 9.32853 6.30158 9.24951 6.50049 9.24951H14.5005C14.6994 9.24951 14.8902 9.32853 15.0308 9.46918C15.1715 9.60983 15.2505 9.8006 15.2505 9.99951C15.2505 10.1984 15.1715 10.3892 15.0308 10.5298C14.8902 10.6705 14.6994 10.7495 14.5005 10.7495H6.50049C6.30158 10.7495 6.11081 10.6705 5.97016 10.5298C5.82951 10.3892 5.75049 10.1984 5.75049 9.99951ZM8.50049 12.2495C8.30158 12.2495 8.11081 12.3285 7.97016 12.4692C7.82951 12.6098 7.75049 12.8006 7.75049 12.9995C7.75049 13.1984 7.82951 13.3892 7.97016 13.5298C8.11081 13.6705 8.30158 13.7495 8.50049 13.7495H12.5005C12.6994 13.7495 12.8902 13.6705 13.0308 13.5298C13.1715 13.3892 13.2505 13.1984 13.2505 12.9995C13.2505 12.8006 13.1715 12.6098 13.0308 12.4692C12.8902 12.3285 12.6994 12.2495 12.5005 12.2495H8.50049Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.1655 0.329536C13.3434 0.240624 13.5492 0.225965 13.7379 0.288784C13.9265 0.351602 14.0825 0.486756 14.1715 0.664536L15.9845 4.29054C16.4125 4.31254 16.8015 4.34554 17.1545 4.39654C18.2105 4.54754 19.0845 4.87354 19.7055 5.64154C20.3265 6.41054 20.4625 7.33254 20.3895 8.39654C20.3195 9.42754 20.0395 10.7285 19.6915 12.3535L19.2405 14.4605C19.0055 15.5575 18.8145 16.4465 18.5745 17.1405C18.3245 17.8655 17.9945 18.4605 17.4325 18.9155C16.8705 19.3705 16.2185 19.5675 15.4585 19.6605C14.7285 19.7495 13.8185 19.7495 12.6985 19.7495H8.30251C7.18051 19.7495 6.27151 19.7495 5.54151 19.6605C4.78151 19.5675 4.12951 19.3705 3.56751 18.9155C3.00451 18.4605 2.67551 17.8655 2.42551 17.1415C2.18551 16.4465 1.99551 15.5575 1.75951 14.4615L1.30851 12.3545C0.960513 10.7285 0.681512 9.42754 0.610512 8.39654C0.537512 7.33254 0.673512 6.41054 1.29451 5.64154C1.91451 4.87354 2.78851 4.54754 3.84451 4.39654C4.19751 4.34654 4.58751 4.31254 5.01451 4.29054L6.83051 0.664536C6.92029 0.488167 7.07613 0.354428 7.26408 0.292464C7.45203 0.2305 7.65686 0.245334 7.83392 0.333733C8.01098 0.422132 8.14593 0.576931 8.20935 0.764395C8.27277 0.951859 8.25953 1.15679 8.17251 1.33454L6.71251 4.25154C7.07651 4.24954 7.45951 4.24954 7.86151 4.24954H13.1395C13.5415 4.24954 13.9245 4.24954 14.2885 4.25154L12.8295 1.33454C12.7406 1.1567 12.7259 0.950831 12.7888 0.762188C12.8516 0.573545 12.9867 0.417566 13.1645 0.328536L13.1655 0.329536ZM4.23251 5.85754L3.82951 6.66354C3.78461 6.75175 3.75762 6.84798 3.75008 6.94667C3.74255 7.04537 3.75463 7.14458 3.78562 7.23858C3.81661 7.33259 3.8659 7.41953 3.93066 7.49439C3.99541 7.56925 4.07434 7.63056 4.1629 7.67477C4.25146 7.71899 4.34789 7.74523 4.44664 7.752C4.54539 7.75876 4.64451 7.74592 4.73827 7.7142C4.83203 7.68247 4.91858 7.63251 4.99294 7.56717C5.0673 7.50184 5.12799 7.42244 5.17151 7.33354L5.95851 5.75954C6.52851 5.74954 7.17851 5.74854 7.92251 5.74854H13.0785C13.8225 5.74854 14.4725 5.74854 15.0425 5.75854L15.8295 7.33354C15.9193 7.50991 16.0751 7.64364 16.2631 7.70561C16.451 7.76757 16.6559 7.75274 16.8329 7.66434C17.01 7.57594 17.1449 7.42114 17.2084 7.23368C17.2718 7.04621 17.2585 6.84128 17.1715 6.66354L16.7685 5.85754L16.9425 5.88054C17.8265 6.00754 18.2595 6.23854 18.5395 6.58354C18.8195 6.92954 18.9535 7.40254 18.8925 8.29354C18.8305 9.20354 18.5765 10.3995 18.2125 12.0985L17.7825 14.0985C17.5355 15.2535 17.3625 16.0525 17.1565 16.6505C16.9565 17.2305 16.7525 17.5365 16.4895 17.7485C16.2275 17.9605 15.8845 18.0965 15.2775 18.1705C14.6485 18.2475 13.8305 18.2485 12.6495 18.2485H8.35051C7.17051 18.2485 6.35251 18.2475 5.72351 18.1705C5.11551 18.0965 4.77351 17.9605 4.51151 17.7485C4.24851 17.5365 4.04351 17.2295 3.84451 16.6505C3.63751 16.0525 3.46451 15.2535 3.21751 14.0985L2.78851 12.0985C2.42451 10.3985 2.17051 9.20454 2.10851 8.29354C2.04751 7.40254 2.18251 6.92954 2.46151 6.58354C2.74151 6.23854 3.17451 6.00754 4.05851 5.88054L4.23251 5.85754Z"
                      fill="white"
                    />
                  </svg>
                  Замовити
                </a>

                <div className="guarantee">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="24"
                    viewBox="0 0 20 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.50107 0.57224C9.23652 0.664728 9.09611 0.760946 8.65581 1.15135C7.74485 1.9592 6.74889 2.55682 5.64936 2.9554C4.71818 3.29295 3.96987 3.45172 2.74404 3.5718C2.37092 3.60839 1.95189 3.67009 1.81291 3.70896C0.996684 3.93717 0.327165 4.62436 0.0836992 5.4838C0.0100484 5.7437 0.0017782 6.01527 7.82166e-05 8.22159C-0.00194339 10.8711 0.0337565 11.4805 0.279336 12.9853C0.909112 16.8447 2.68027 19.6606 5.71828 21.6326C6.72922 22.2888 7.69794 22.7705 8.95745 23.2432C9.91537 23.6027 10.1074 23.5952 11.2537 23.1544C15.7182 21.4372 18.4746 18.4117 19.4748 14.1305C19.8915 12.347 20.0338 10.5653 19.9934 7.63736C19.9718 6.0621 19.9539 5.68064 19.8917 5.46057C19.6554 4.62499 18.9766 3.93461 18.1695 3.70896C18.0306 3.67009 17.6115 3.60839 17.2384 3.5718C16.0126 3.45172 15.2643 3.29295 14.3331 2.9554C13.202 2.5454 12.2438 1.96419 11.2608 1.09189C11.0553 0.90952 10.777 0.706882 10.6424 0.641583C10.3161 0.483213 9.83882 0.454226 9.50107 0.57224ZM10.4971 2.24925C12.3495 3.85183 14.3253 4.6609 17.0198 4.92025C17.8313 4.99836 18.1157 5.0966 18.3317 5.37352C18.55 5.6535 18.5688 5.80082 18.6029 7.50254C18.6694 10.8088 18.4319 13.0123 17.8023 14.9326C16.7288 18.2068 14.3426 20.5328 10.623 21.9311L9.99122 22.1685L9.35947 21.9321C7.58988 21.2697 6.09425 20.3759 4.93073 19.2854C4.00561 18.4183 3.3684 17.5629 2.79867 16.4233C1.69359 14.2129 1.29703 11.733 1.37927 7.54748C1.41369 5.79785 1.43156 5.65467 1.65077 5.37352C1.86671 5.0966 2.15111 4.99836 2.9626 4.92025C5.65713 4.6609 7.63293 3.85183 9.48536 2.24925C9.7455 2.02414 9.97316 1.84002 9.99122 1.84002C10.0093 1.84002 10.2369 2.02414 10.4971 2.24925ZM9.43473 6.28752C7.16405 6.51331 5.23507 7.99145 4.46126 10.0986C4.03323 11.2643 4.03323 12.729 4.46126 13.8946C4.98393 15.3179 6.03664 16.4695 7.44124 17.1546C8.74026 17.7882 10.349 17.8968 11.8003 17.4491C13.4809 16.9305 14.9063 15.5688 15.5212 13.8946C15.8503 12.9984 15.9364 11.8097 15.7392 10.885C15.3116 8.88011 13.89 7.27563 11.9317 6.58759C11.2227 6.33853 10.181 6.21333 9.43473 6.28752ZM11.1995 7.79043C12.7635 8.24478 13.8571 9.3349 14.3198 10.9008C14.4113 11.2102 14.4241 11.3518 14.4214 12.0191C14.4186 12.7152 14.4074 12.8182 14.2949 13.1785C13.8128 14.7221 12.7124 15.7771 11.1116 16.2307C10.7952 16.3204 10.6504 16.333 9.96825 16.3307C9.25448 16.3283 9.15235 16.3176 8.7829 16.2067C7.20228 15.7322 6.12605 14.6581 5.66241 13.0924C5.57199 12.7872 5.55747 12.6354 5.55747 11.9966C5.55747 11.1857 5.61371 10.8996 5.90418 10.2318C6.39148 9.11177 7.46366 8.18276 8.68922 7.81865C9.20771 7.6646 9.41787 7.64109 10.1291 7.65754C10.683 7.67039 10.8634 7.69277 11.1995 7.79043ZM11.829 10.1131C11.7406 10.1645 11.0537 10.8058 10.3027 11.5382L8.93709 12.8698L8.48692 12.4372C8.12804 12.0923 8.00104 11.998 7.86091 11.9723C7.62185 11.9284 7.35891 12.0132 7.21487 12.1806C7.06812 12.3512 7.03269 12.4833 7.06306 12.7467C7.08553 12.942 7.12256 12.9873 7.81533 13.6683C8.21607 14.0623 8.59976 14.4135 8.66799 14.4489C8.8146 14.525 9.01603 14.5316 9.19567 14.4662C9.3421 14.413 12.6723 11.1861 12.7739 10.9989C12.8102 10.9321 12.8398 10.7886 12.8398 10.6798C12.8398 10.1788 12.2676 9.85806 11.829 10.1131Z"
                      fill="#C273C2"
                    />
                  </svg>
                  <p>Офіційна гарантія – 1 рік!</p>
                </div>
              </div>
              <div className="iphone-description">
                <span>Опис</span>
                <div>{infoIphons[phoneModel].description}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="product-info">
          <div className="name-product">
            Технічні характеристики {phoneModel} {memorySize}
          </div>
          <div className="unfurl-product" onClick={handleToggleInfo}>
            {isInfoVisible ? <p>↑ Згорнути ↑</p> : <p>↓ Розгорнути ↓</p>}
          </div>
          {isInfoVisible && (
            <div className="block-info-iphone">
              <div className="item">
                <section>Дисплей</section>
                <section>{infoIphons[phoneModel].display}</section>
              </div>
              <div className="item">
                <section>Чіпсет</section>
                <section>{infoIphons[phoneModel].chipset}</section>
              </div>
              <div className="item">
                <section>Оперативна пам'ять</section>
                <section>{infoIphons[phoneModel].ram}</section>
              </div>
              <div className="item">
                <section>Накопичувач</section>
                <section>{memorySize} NVMe</section>
              </div>
              <div className="item">
                <section>Час автономної роботи</section>
                <section>{infoIphons[phoneModel].time}</section>
              </div>
              <div className="item">
                <section>Камери</section>
                <section>{infoIphons[phoneModel].camera}</section>
              </div>
              <div className="item">
                <section>Підключення</section>
                <section>{infoIphons[phoneModel].connections}</section>
              </div>
              <div className="item">
                <section>Інше</section>
                <section>{infoIphons[phoneModel].other}</section>
              </div>
              <div className="item">
                <section>Забарвлення</section>
                <section>{infoIphons[phoneModel].colors}</section>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Calculator;
