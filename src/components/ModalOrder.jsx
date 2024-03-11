import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";

import bgOrder from "../images/bgOrder.webp";
import bgOrder2 from "../images/bgOrder2.webp";
import iphoneBox from "../images/iphone12Box.png";
import instagram from "../images/instagramLogo.svg";
import man from "../images/man.webp";
import SelectButton from "./SelectButton";
import EmailForm from "./Form";

function ModalOrder({
  toggle = false,
  text,
  className,
  logo,
  id,
  selectedIPhone,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [number, setNumber] = useState("");

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isModalOpen]);

  const handleFormSubmit = async (phoneNumber) => {
    try {
      const response = await fetch("mail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          "Номер телефону": number,
          "Вибір покупця": JSON.stringify(selectedIPhone),
        }),
      });

      console.log("Form submitted successfully!");

      handleOk();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        className={`modal-button ${className}`}
        id={`${id}`}
        type="primary"
        onClick={showModal}
      >
        {logo} {text}
      </Button>
      <Modal
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
        className="custom-modal"
      >
        {toggle ? (
          <>
            <img className="bg-modal" src={bgOrder2} alt="bg" />
            <div className=" bg-modal2" alt="bg" />
          </>
        ) : (
          <>
            <img className="lazyload bg-modal" src={bgOrder} alt="bg" />
            <div className=" bg-modal2" alt="bg" />
          </>
        )}
        <div className="modal-wrapper">
          <p
            className="modal-main-text"
            style={toggle ? { display: "none" } : {}}
          >
            Введіть ваш номер, щоб забрати бонусні 500 грн. на покупку техніки
            Apple
          </p>
          <div className="modal-items">
            <div className="section-bonus">
              {toggle ? (
                <img src={man} alt="man" className="lazyload img-man" />
              ) : (
                <img
                  src={iphoneBox}
                  className="lazyload img-bonus"
                  alt="iphoneBox"
                />
              )}
            </div>
            <div className="section-order">
              {toggle && <p className="submit-text">Залишити заявку</p>}
              {toggle ? (
                <p className="name-phone">Ваш номер телефону</p>
              ) : (
                <p className="name-phone">Введіть номер телефону</p>
              )}
              <div className="you-number">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.832633 6.55923C2.75249 10.74 6.16381 14.0536 10.3986 15.8512L11.0786 16.1542C11.8317 16.4895 12.6789 16.5483 13.471 16.3202C14.2631 16.0921 14.9493 15.5917 15.4086 14.9072L16.2976 13.5832C16.4367 13.3756 16.4931 13.1234 16.4555 12.8763C16.4179 12.6292 16.2892 12.4051 16.0946 12.2482L13.0826 9.81823C12.9777 9.73366 12.8568 9.67116 12.7272 9.63448C12.5975 9.59781 12.4618 9.58771 12.3281 9.6048C12.1945 9.6219 12.0657 9.66582 11.9494 9.73394C11.8332 9.80207 11.7319 9.89298 11.6516 10.0012L10.7196 11.2582C8.32724 10.0767 6.39076 8.13983 5.20963 5.74723L6.46563 4.81523C6.57388 4.73499 6.66479 4.6337 6.73291 4.51745C6.80104 4.4012 6.84496 4.27237 6.86205 4.13872C6.87915 4.00507 6.86905 3.86934 6.83238 3.73968C6.7957 3.61003 6.7332 3.48912 6.64863 3.38423L4.21863 0.372227C4.06173 0.17768 3.83766 0.0489404 3.59057 0.0113674C3.34348 -0.0262056 3.09127 0.0301121 2.88363 0.169227L1.55063 1.06323C0.862033 1.52501 0.359722 2.21624 0.133184 3.01379C-0.0933534 3.81134 -0.0294068 4.66342 0.313633 5.41823L0.832633 6.55923Z"
                    fill="#59C965"
                  />
                </svg>

                <EmailForm
                  onNumberChange={handleNumberChange}
                  onFormSubmit={handleFormSubmit}
                />
              </div>
              {toggle ? (
                <SelectButton
                  className="modal-application"
                  text="Залишити заявку"
                  func={handleOk}
                  submit={() => handleFormSubmit(number)}
                  id="button-call-back"
                />
              ) : (
                <SelectButton
                  className="modal-application"
                  text="Отримати 500 грн"
                  func={handleOk}
                  submit={() => handleFormSubmit(number)}
                  id="button-bonus"
                />
              )}

              <div className="block-media">
                <p>Або напишіть нам у месенджер/соцмережі:</p>
                <div className={`icon-media  ${toggle && "modal-application"}`}>
                  <a href="https://www.instagram.com/" target="_blank">
                    <img src={instagram} alt="instagram" />
                  </a>

                  <a href="https://wa.me/" target="_blank">
                    <svg
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.5 35C27.165 35 35 27.165 35 17.5C35 7.83501 27.165 0 17.5 0C7.83501 0 0 7.83501 0 17.5C0 27.165 7.83501 35 17.5 35ZM20.6566 10.2048C21.5868 10.591 22.4309 11.1585 23.1395 11.8743C24.5848 13.3196 25.3809 15.2442 25.3809 17.2924C25.3809 21.5125 21.9414 24.952 17.7213 24.952C16.4383 24.952 15.1784 24.6274 14.0577 24.0168L9.99987 25.0834L11.082 21.1106C10.4172 19.9512 10.0617 18.6373 10.0617 17.2847C10.0617 13.0646 13.5012 9.62507 17.7213 9.62507C18.7285 9.62156 19.7263 9.81864 20.6566 10.2048ZM14.4751 22.7647C15.4567 23.3443 16.5774 23.6535 17.7213 23.6535C21.2304 23.6535 24.0901 20.8014 24.0747 17.2924C24.0778 16.4554 23.9148 15.6261 23.595 14.8526C23.2753 14.0791 22.8052 13.3768 22.212 12.7863C21.0139 11.5806 19.414 10.9158 17.7136 10.9158C14.2045 10.9158 11.3447 13.7756 11.3447 17.2847C11.3456 18.4821 11.6831 19.6552 12.3186 20.6701L12.4732 20.9097L11.8317 23.2593L14.2432 22.6255L14.4751 22.7647ZM20.9604 18.7687C21.0753 18.8247 21.1676 18.8696 21.2149 18.8923C21.2531 18.9107 21.2883 18.9269 21.3206 18.9418C21.4516 19.0022 21.5348 19.0406 21.5782 19.1088C21.6323 19.1938 21.6323 19.5725 21.47 20.0208C21.3154 20.4691 20.5502 20.8787 20.1792 20.9328C19.8468 20.9792 19.4295 21.0024 18.9734 20.8556C18.6952 20.7705 18.3396 20.6546 17.8836 20.4536C16.0511 19.663 14.819 17.8621 14.6331 17.5904C14.6246 17.578 14.6183 17.5687 14.6142 17.5629L14.6127 17.5609C14.5143 17.4297 13.8335 16.5223 13.8335 15.5843C13.8335 14.7143 14.2546 14.2522 14.4533 14.0341C14.47 14.0158 14.4851 13.9993 14.4983 13.9843C14.676 13.7911 14.877 13.7447 15.0084 13.7447H15.3794C15.3928 13.7456 15.4068 13.7458 15.4214 13.746C15.5328 13.7473 15.6755 13.749 15.8122 14.0771C15.9668 14.4635 16.3533 15.4065 16.3996 15.4992C16.446 15.592 16.4769 15.7002 16.4151 15.8316C16.4098 15.8421 16.4047 15.8524 16.3997 15.8624C16.3463 15.9699 16.3067 16.0495 16.2219 16.1485C16.1922 16.183 16.161 16.2207 16.1295 16.2588C16.0624 16.34 15.9937 16.423 15.9359 16.4808C15.8354 16.5813 15.7426 16.6818 15.8509 16.875C15.9668 17.0683 16.3455 17.6943 16.9175 18.2044C17.5387 18.7596 18.0808 18.9926 18.3457 19.1065C18.3906 19.1258 18.4276 19.1417 18.4556 19.1551C18.6488 19.2556 18.7648 19.2402 18.873 19.1088C18.9812 18.9851 19.3444 18.5523 19.4758 18.359C19.6072 18.1735 19.7309 18.2044 19.9087 18.2663C20.0371 18.3188 20.6062 18.5961 20.9604 18.7687Z"
                        fill="#59C965"
                      />
                    </svg>
                  </a>
                  <a href="https://t.me/" target="_blank">
                    <svg
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.5 35C27.165 35 35 27.165 35 17.5C35 7.83501 27.165 0 17.5 0C7.83501 0 0 7.83501 0 17.5C0 27.165 7.83501 35 17.5 35ZM9.78953 16.2937L22.8068 11.248C23.7796 10.8554 24.1612 11.3069 23.9374 12.3315L21.7821 22.5898C21.6179 23.4222 21.2026 23.7153 20.4394 23.2612L17.1535 20.7879L15.2349 22.6127C14.9992 22.8177 14.6298 22.8157 14.428 22.4033L14.6458 19.7323L21.5807 13.4208C21.9691 13.0744 21.5177 12.9905 21.0768 13.3054L13.0024 18.3213L9.66292 17.2546C9.08852 16.9992 9.2657 16.5286 9.78953 16.2937Z"
                        fill="#2EA3D4"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ModalOrder;
