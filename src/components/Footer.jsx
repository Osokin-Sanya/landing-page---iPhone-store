import React from "react";
import logo from "../images/logo.svg";
import footerIphone from "../images/footerIphone.webp";
function Footer() {
  return (
    <div className="wrapper-footer">
      <div className="block-logo">
        <img src={logo} alt="логотип" />
        <p>Оригінальна техніка та аксесуари Apple</p>
      </div>
      <img
        className="footer-iphone-img"
        src={footerIphone}
        alt="футер iPhone"
      />
      <div className="block-links">
        <a href="#choose-model">Версії та ціни</a>
        <a href="#advantages">Переваги</a>
        <a href="#aboutUs">Про нас</a>
        <a href="#howWeWork">Як ми працюємо?</a>
        <a href="#reviews">Відгуки</a>
      </div>
    </div>
  );
}

export default Footer;
