import React from "react";
import iphons from "../images/iphoneConditions.webp";
import img1 from "../images/conditions1.svg";
import img2 from "../images/conditions2.svg";
import img3 from "../images/conditions3.svg";
import img4 from "../images/conditions4.svg";
import img5 from "../images/conditions5.svg";
import img6 from "../images/conditions6.svg";
import ModalOrder from "./ModalOrder";

function Conditions(props) {
  return (
    <div className="conditions-wrapper">
    <div className="your-container">
      <div className="main">
        <div className="block-title">
          <div className="your-title">
            Дізнайтеся, чи є смартфон з необхідним обсягом пам'яті та у бажаному кольорі в наявності
          </div>
          <a
            href="https://wa.me/"
            target="_blank"
            className="your-check-availability-button"
          >
            Уточнити наявність
          </a>
        </div>
        <img
          loading="lazy"
          src={iphons}
          className="your-image"
          alt="Смартфон"
        />
      </div>
      <div className="your-subtitle" id="advantages">
        Чому техніку Apple замовляють у нас?
      </div>
      <div className="feature-block">
        <div className="your-feature-container">
          <div className="your-feature">
            <img
              loading="lazy"
              src={img1}
              className="your-feature-icon"
              alt="Оригінальність"
            />
          </div>
          <div className="your-feature-description">
            <div className="your-feature-title">100% оригінальність</div>
            <div className="your-feature-text">
              Ми продаємо лише оригінальну техніку Apple, при цьому вартість пристроїв завдяки доставці з Дубаю в середньому на 30% нижча, ніж в інших магазинах
            </div>
          </div>
        </div>
        <div className="your-feature-container">
          <div className="your-feature">
            <img
              loading="lazy"
              src={img2}
              className="your-feature-icon"
              alt="Магазини"
            />
          </div>
          <div className="your-feature-description">
            <div className="your-feature-title">Магазини в Києві</div>
            <div className="your-feature-text">
              Ви можете відвідати наш магазин і придбати сподобалася техніку та комплектуючі до неї, а також отримати сервісне обслуговування
            </div>
          </div>
        </div>
        <div className="your-feature-container">
          <div className="your-feature">
            <img
              loading="lazy"
              src={img3}
              className="your-feature-icon"
              alt="Кешбек"
            />
          </div>
          <div className="your-feature-description">
            <div className="your-feature-title">
              Кешбек до 22% від вартості
            </div>
            <div className="your-feature-text">
              При замовленні телефону з Дубаю, ви можете повернути частину суми за системою Tax-free протягом 5 - 7 днів після оплати
            </div>
          </div>
        </div>
        <div className="your-feature-container">
          <div className="your-feature">
            <img
              loading="lazy"
              src={img4}
              className="your-feature-icon"
              alt="Повернення"
            />
          </div>
          <div className="your-feature-description">
            <div className="your-feature-title">
              Повернення протягом 14 днів
            </div>
            <div className="your-feature-text">
              Якщо вас щось не влаштує, ви зможете повернути товар і отримати на картку 100% коштів назад протягом 3 робочих днів
            </div>
          </div>
        </div>
        <div className="your-feature-container">
          <div className="your-feature">
            <img
              loading="lazy"
              src={img5}
              className="your-feature-icon"
              alt="Доставка"
            />
          </div>
          <div className="your-feature-description">
            <div className="your-feature-title">Обережна доставка по Україні</div>
            <div className="your-feature-text">
              При всіх відправленнях ми вказуємо підвищений клас крихкості, а також страхуємо відправку з описом вмісту
            </div>
          </div>
        </div>
        <div className="your-feature-container">
          <div className="your-feature">
            <img
              loading="lazy"
              src={img6}
              className="your-feature-icon"
              alt="Гарантія"
            />
          </div>
          <div className="your-feature-description">
            <div className="your-feature-title">
              Офіційна гарантія - 1 рік
            </div>
            <div className="your-feature-text">
              При виникненні несправностей, ви можете здати пристрій на безкоштовний ремонт у будь-який авторизований сервісний центр Apple
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default Conditions;
