import React from "react";

function SelectButton({ text, className, href, func, submit, id }) {
  const handleClick = () => {
    func();
    if (submit) {
      submit();
    }
  };

  return (
    <a
      id={id}
      onClick={handleClick}
      href={href}
      className={`select-button ${className}`}
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
      <div className="elect-button-text">{text}</div>
    </a>
  );
}

export default SelectButton;
