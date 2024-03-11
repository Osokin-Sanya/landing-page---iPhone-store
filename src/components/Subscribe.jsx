import React, { useState } from "react";
import logo from "../images/logo.svg";
import iphone from "../images/iphone103.webp";
import lyingiPhone from "../images/lyingiPhone.svg";

import dubai from "../images/dubai.svg";
import p22 from "../images/22.svg";

import img1 from "../images/1.svg";
import img2 from "../images/2.svg";
import img3 from "../images/3.svg";
import img4 from "../images/4.svg";
import img5 from "../images/5.svg";
import img6 from "../images/6.svg";
import img7 from "../images/7.svg";
import img8 from "../images/8.svg";
import img9 from "../images/9.svg";

import man from "../images/man2.webp";
import man2 from "../images/man3.webp";
import bg from "../images/bgCompany.webp";
import ModalOrder from "./ModalOrder";

function Subscrib() {
  const [youtube, setYoutube] = useState(false);

  setTimeout(function () {
    setYoutube(true);
  }, 5111);
  return (
    <div className="wrapper-Subscribe">
      <div className="main-container">
        <div className="bg">
          <img src={logo} className="main-image" alt="Main" />
          <div className="subscribe-container">
            Підпишіться на нашу групу в Telegram або WhatsApp
          </div>
          <div className="info-container">
            Щоб стежити за оновленнями та отримувати актуальну інформацію про
            нашої продукції та магазині!
          </div>
          <div className="social-container">
            <a
              href="https://t.me/"
              target="_blank"
              className="social-item"
            >
              <svg
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.4576 0.181849L0.624449 6.70978C-0.0529448 7.01378 -0.282058 7.62256 0.460723 7.95295L4.77914 9.33308L15.2205 2.84361C15.7906 2.43621 16.3743 2.54485 15.8721 2.99301L6.90432 11.1586L6.62262 14.6142C6.88354 15.1478 7.36128 15.1503 7.66602 14.8851L10.1471 12.5242L14.3963 15.7241C15.3832 16.3117 15.9202 15.9325 16.1326 14.8555L18.9197 1.58366C19.209 0.258034 18.7156 -0.326051 17.4576 0.181849Z"
                  fill="white"
                />
              </svg>

              <div className="social-text">Telegram</div>
            </a>
            <a href="https://wa.me/" target="_blank" className="social-item">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3538 2.63802C14.5257 1.80163 13.5395 1.13847 12.4525 0.687237C11.3655 0.236002 10.1995 0.00571936 9.02259 0.00981943C4.09132 0.00981943 0.0722531 4.02889 0.0722531 8.96015C0.0722531 10.5407 0.487708 12.0761 1.26443 13.4308L0 18.0731L4.7416 16.8267C6.05119 17.5402 7.52334 17.9195 9.02259 17.9195C13.9539 17.9195 17.9729 13.9005 17.9729 8.96919C17.9729 6.57581 17.0427 4.32693 15.3538 2.63802ZM9.02259 16.4022C7.68591 16.4022 6.37632 16.0409 5.22931 15.3636L4.95836 15.201L2.14049 15.9416L2.89012 13.196L2.70949 12.916C1.96686 11.7301 1.57253 10.3594 1.5715 8.96015C1.5715 4.8598 4.9132 1.5181 9.01356 1.5181C11.0005 1.5181 12.8701 2.29482 14.27 3.70375C14.9631 4.39373 15.5124 5.21444 15.8861 6.11829C16.2597 7.02214 16.4502 7.99116 16.4466 8.96919C16.4646 13.0695 13.1229 16.4022 9.02259 16.4022ZM13.1049 10.8387C12.8791 10.7304 11.7772 10.1885 11.5785 10.1072C11.3708 10.0349 11.2263 9.99879 11.0728 10.2155C10.9192 10.4413 10.4947 10.9471 10.3683 11.0916C10.2419 11.2452 10.1064 11.2632 9.88059 11.1458C9.6548 11.0374 8.93227 10.7936 8.0833 10.0349C7.41496 9.43883 6.97241 8.70727 6.83694 8.48148C6.71049 8.25569 6.81887 8.13828 6.93628 8.02087C7.03563 7.92152 7.16208 7.75895 7.27045 7.63251C7.37883 7.50606 7.42399 7.40672 7.49624 7.26221C7.5685 7.10867 7.53237 6.98223 7.47818 6.87385C7.42399 6.76547 6.97241 5.66361 6.79178 5.21203C6.61115 4.77851 6.42148 4.8327 6.28601 4.82367H5.85249C5.69895 4.82367 5.46413 4.87786 5.2564 5.10365C5.05771 5.32944 4.47968 5.87134 4.47968 6.9732C4.47968 8.07506 5.2835 9.14079 5.39188 9.28529C5.50026 9.43883 6.97241 11.6967 9.21225 12.6631C9.74512 12.8979 10.1606 13.0334 10.4857 13.1328C11.0186 13.3044 11.5063 13.2773 11.8946 13.2231C12.3282 13.1599 13.2223 12.6812 13.4029 12.1573C13.5926 11.6335 13.5926 11.191 13.5294 11.0916C13.4661 10.9923 13.3307 10.9471 13.1049 10.8387Z"
                  fill="white"
                />
              </svg>

              <div className="social-text">WhatsApp</div>
            </a>
          </div>
        </div>
        <img
          loading="lazy"
          src={lyingiPhone}
          className="responsive-image"
          alt="Responsive"
        />
        <div className="check-device-info">
          Як перевірити пристрій під час отримання?
        </div>
        <div className="video">
          {youtube && (
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/O1KsOivTdno?si=ZYziXoX4NCO3kMRn"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>

      <div className="subscribe-container">
        <div className="block-subscribe">
          <div className="title">Замовляйте Apple iPhone 15</div>
          <div className="discount-info">
            <div className="discount-label">
              з <img src={dubai} alt="" /> Дубая з кешбеком до
            </div>
            <div className="discount-percentage">
              <img className="lazyload" src={p22} alt="percentage" />
            </div>
          </div>
          <div className="warranty">та офіційною гарантією – 1 рік</div>

          <a className="submit-button" href="https://wa.me/" target="_blank">
            Залишити заявку
          </a>
        </div>

        <img src={iphone} className="product-image" />
      </div>

      <div className="about-company">
        <img className="bg2" loading="lazy" src={bg} alt="" />
        <div className="company-container">
          <div className="bg-company">
            <div className="block-company">
              <div className="company-title" id="aboutUs">
                Про компанію
              </div>
              <div className="company-description">
                <span
                  style={{
                    fontFamily: "Gilroy, sans-serif",
                    fontWeight: 700,
                    marginRight: 5,
                  }}
                >
                  Наша компанія вже понад 7 років
                </span>
                <span
                  style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 400 }}
                >
                  займається продажем та сервісним обслуговуванням техніки
                  Apple. Ми купуємо та доставляємо гаджети з Дубаї за системою
                  Tax Free, завдяки чому ціни для наших покупців у середньому на
                  30% нижче, ніж у популярних мережевих магазинах.
                </span>
              </div>
              <div className="company-location">
                <span
                  style={{
                    fontFamily: "Gilroy, sans-serif",
                    fontWeight: 700,
                    marginRight: 5,
                  }}
                >
                  Також ви завжди можете відвідати наші магазини у Києві
                </span>
                <span
                  style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 500 }}
                >
                  та придбати пристрої або аксесуари з наявності. З задоволенням
                  допоможемо вам стати щасливим власником нового iPhone за
                  доступною ціною!
                </span>
              </div>
            </div>
            <div className="block-company-img">
              <img className="man-big" loading="lazy" src={man} alt="man" />
              <img className="man-small" loading="lazy" src={man2} alt="" />
              <img src={logo} alt="logo" />
            </div>
          </div>

          <div className="company">
            <div className="company-facts company-item">
              <div className="founding-year">2017</div>
              <div className="year-founded">рік заснування компанії</div>
            </div>
            <div className="company-warranty company-item">
              <div className="warranty-period">1 рік</div>
              <div className="warranty-info">офіційна гарантія</div>
            </div>
            <div className="company-reviews company-item">
              <div className="positive-reviews">&gt; 410</div>
              <div className="reviews-info">позитивних відгуків</div>
            </div>
            <div className="order-stats company-item">
              <div className="orders">&gt; 1050</div>
              <div className="orders-info">замовлень за весь час</div>
            </div>
            <div className="company-locations company-item">
              <div className="locations-number">2</div>
              <div className="locations-info">магазину в Києві</div>
            </div>
            <div className="product-quality company-item">
              <div className="quality-percentage">100%</div>
              <div className="quality-info">оригінальна продукція</div>
            </div>
          </div>
        </div>
      </div>

      <div className="how-working">
        <p className="how-working-text" id="howWeWork">
          Як ми працюємо?
        </p>
        <div className="item">
          <div className="serial-number">
            <img className="lazyload" src={img1} alt="" />
            <svg
              width="15"
              height="9"
              viewBox="0 0 15 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.53333 1.76667L7.76667 8L14 1.76667"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text-block">
            <p className="text-main">Заявка або дзвінок</p>
            <p className="text">
              Ви надсилаєте нам повідомлення через месенджер, в соцмережі,
              залишаєте заявку на сайті або зв'язуєтеся по телефону
            </p>
          </div>
        </div>
        <div className="item">
          <div className="serial-number">
            <img className="lazyload" src={img2} alt="" />
            <svg
              width="15"
              height="9"
              viewBox="0 0 15 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.53333 1.76667L7.76667 8L14 1.76667"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text-block">
            <p className="text-main">Узгодження</p>
            <p className="text">
              Наш менеджер відповідає на ваш запит, а також уточнює бажаний
              колір та обсяг пам'яті смартфона, який вам потрібен
            </p>
          </div>
        </div>
        <div className="item">
          <div className="serial-number">
            <img className="lazyload" src={img3} alt="" />
            <svg
              width="15"
              height="9"
              viewBox="0 0 15 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.53333 1.76667L7.76667 8L14 1.76667"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text-block">
            <p className="text-main">Оформлення замовлення</p>
            <p className="text">
              Ми надсилаємо вам картку замовлення для того, щоб звірити
              інформацію. Ви підтверджуєте замовлення, якщо все вказано
              правильно
            </p>
          </div>
        </div>
        <div className="item">
          <div className="serial-number">
            <img className="lazyload" src={img4} alt="" />
            <svg
              width="15"
              height="9"
              viewBox="0 0 15 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.53333 1.76667L7.76667 8L14 1.76667"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text-block">
            <p className="text-main">Предоплата від 20% </p>
            <p className="text">
              Залежно від вибраної системи покупки (з TAX-Free або без) ви
              оплачуєте від 20 до 100% від суми замовлення
            </p>
          </div>
        </div>
        <div className="item">
          <div className="serial-number">
            <img className="lazyload" src={img5} alt="" />
            <svg
              width="15"
              height="9"
              viewBox="0 0 15 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.53333 1.76667L7.76667 8L14 1.76667"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text-block">
            <p className="text-main">Оформлення TAX-Free</p>
            <p className="text">
              Ми надамо вам логін та пароль від особистого кабінету на сайті
              оператора Global Blue, куди вам залишиться лише ввести номер вашої
              карти та чек про покупку
            </p>
          </div>
        </div>
        <div className="item">
          <div className="serial-number">
            <img className="lazyload" src={img6} alt="" />
            <svg
              width="15"
              height="9"
              viewBox="0 0 15 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.53333 1.76667L7.76667 8L14 1.76667"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text-block">
            <p className="text-main">Надсилання </p>
            <p className="text">
              Ми надішлемо замовлення з одного з наших магазинів в Києві (при
              цьому можемо надати відеозвіт з ТК) або з Дубая, якщо замовлення
              оформлений з кешбеком
            </p>
          </div>
        </div>
        <div className="item">
          <div className="serial-number">
            <img className="lazyload" src={img7} alt="" />
            <svg
              width="15"
              height="9"
              viewBox="0 0 15 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.53333 1.76667L7.76667 8L14 1.76667"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text-block">
            <p className="text-main">Отримання замовлення</p>
            <p className="text">
              Ви отримуєте смартфон кур'єром або у відділенні пошти, після чого
              зможете його перевірити і оплатити частину суми, що залишилася
              (якщо замовлення післяплатою)
            </p>
          </div>
        </div>
        <div className="item">
          <div className="serial-number">
            <img className="lazyload" src={img8} alt="" />
            <svg
              width="15"
              height="9"
              viewBox="0 0 15 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.53333 1.76667L7.76667 8L14 1.76667"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text-block">
            <p className="text-main">Повернення TAX-Free</p>
            <p className="text">
              Якщо ви вибрали варіант оплати з найбільшою знижкою, протягом 5 –
              7 днів з моменту оплати товару ви отримаєте кешбек у розмірі 22%
              від вартості замовлення
            </p>
          </div>
        </div>
        <div className="item">
          <div className="serial-number">
            <img className="lazyload" src={img9} alt="" />
            <svg
              width="15"
              height="9"
              viewBox="0 0 15 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.53333 1.76667L7.76667 8L14 1.76667"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text-block">
            <p className="text-main">Експлуатація та гарантія </p>
            <p className="text">
              Тепер ви стали щасливим власником смартфона від Apple, та можете
              звертатися до нас у разі виникнення гарантійних ситуацій!
            </p>
          </div>
        </div>
        <div className="work-button">
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
            Перейти до вибору{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Subscrib;
