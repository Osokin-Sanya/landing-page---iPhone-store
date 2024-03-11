import React, { useState } from "react";
import Header from "./components/Header";
import HeaderMain from "./components/HeaderMain";
import Calculator from "./components/Calculator";
import Conditions from "./components/Conditions";
import iphons from "./images/backIphons.webp";
import iphonsMin from "./images/backIphonsMin.png";
import Subscrib from "./components/Subscribe";
import Payment from "./components/Payment";
import Reviews from "./components/Reviews";
import QuestionsAnswers from "./components/QuestionsAnswers";
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";
import "./App.scss";
import "./AppMedia.scss";

function App() {
  const [width, setWidth] = useState(window.innerWidth >= 600);

  return (
    <div className="App">
      <div className="wrapper-header">
        <Header />
        <HeaderMain />
      </div>

      <div className="bg-iphons2">
        {width ? (
          <img className="bg-iphons-img" loading="lazy" src={iphons} />
        ) : (
          <img className="bg-iphons-img" loading="lazy" src={iphonsMin} />
        )}

        <Calculator />
      </div>
      <Conditions />
      <Subscrib />
      <Payment />
      <Reviews />
      <QuestionsAnswers />
      <Schedule />
      <Footer />
      <div className="the-end">
        <p className="the-end-text">інформація про продавця</p>
        <div className="block-policy">
          <p>© 2023 Всі права захищені</p>
          <a className="privacy-policy" href="#" download="./">
            Політика конфіденційності 
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
