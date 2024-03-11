import React, { useEffect, useState } from "react";

const MobileNavMenu = ({ isMenuOpen, setMenuOpen }) => {
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    // Обновляем стиль overflow при изменении isMenuOpen
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    // Очищаем стиль overflow при размонтировании компонента
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isMenuOpen]);

  return (
    <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
      <button
        className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="menu-icon">
          <div
            className="menu-icon-line"
            style={{
              width: 31,
              height: 3.1,
              left: 0,
              top: 0,
              position: "absolute",
              background: "#224784",
              borderRadius: 18,
            }}
          />
          <div
            className="menu-icon-line"
            style={{
              width: 21.7,
              height: 3.1,
              left: 0,
              top: 9.3,
              position: "absolute",
              background: "#D63236",
              borderRadius: 18,
            }}
          />
          <div
            className="menu-icon-line"
            style={{
              width: 31,
              height: 3.1,
              left: 0,
              top: 18.6,
              position: "absolute",
              background: "#D63236",
              borderRadius: 18,
            }}
          />
        </div>
      </button>
    </div>
  );
};

export default MobileNavMenu;
