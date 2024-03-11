import React from "react";
import dubai from "../images/dubai.svg";
import img1 from "../images/eva-pin-outline.svg";
import img2 from "../images/iconoir-cash.svg";
import img3 from "../images/material-symbols-shield-outline.svg";
import img4 from "../images/solar-like-line-duotone.svg";

function HeaderMain() {
  return (
    <div className="header-main">
      <p className="header-order">Замовте</p>
      <div className="block-iphone">
        <h1>
          Apple iPhone 15 <p style={{ display: "inline" }}>з</p>
        </h1>

        <div style={{ display: "flex" }}>
          <img src={dubai} alt="Дубай" />
          <p>Дубая</p>
        </div>
      </div>
      <p className="header-price" id="header-price">
        за цінами на 30% нижче, ніж у популярних мережевих магазинах
      </p>

      <div className="block-info">
        <div className="block-info__item">
          <img src={img2} alt="" />
          <div>
            <p>Кешбек 22% від покупки</p>
            <p>при замовленні з Дубаю</p>
          </div>
        </div>
        <div className="block-info__item">
          <img src={img4} alt="" />
          <div>
            <p>Понад 1100 задоволених</p>
            <p>клієнтів та 400+ відгуків</p>
          </div>
        </div>
        <div className="block-info__item">
          <img src={img1} alt="" />
          <div>
            <p>Доставка по всій Україні</p>
            <p>протягом 3 – 7 днів</p>
          </div>
        </div>
        <div className="block-info__item">
          <img src={img3} alt="" />
          <div>
            <p>Гарантія 1 рік, а також</p>
            <p>розстрочка 0% до 12 міс.</p>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/"
        target="_blank"
        className={`select-button`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="32"
          viewBox="0 0 29 32"
          fill="none"
        >
          <path
            d="M22.5374 25.9031C21.119 27.2781 19.5703 27.061 18.0795 26.4097C16.5018 25.7439 15.0545 25.7149 13.39 26.4097C11.3058 27.3071 10.2058 27.0465 8.96106 25.9031C1.8979 18.6228 2.94 7.536 10.9584 7.13074C12.9124 7.23205 14.2729 8.20179 15.4163 8.28863C17.1242 7.94126 18.7597 6.94258 20.5834 7.07284C22.769 7.24653 24.419 8.11495 25.5045 9.6781C20.9887 12.3847 22.0597 18.3334 26.1992 19.9978C25.3742 22.1689 24.3032 24.3255 22.5229 25.9176L22.5374 25.9031ZM15.2716 7.04389C15.0545 3.81626 17.6742 1.1531 20.6847 0.892578C21.1045 4.62679 17.2979 7.40574 15.2716 7.04389Z"
            fill="white"
            className="img"
          />
        </svg>
        <div className="elect-button-text">Перейти до вибору</div>
      </a>
    </div>
  );
}

export default HeaderMain;
