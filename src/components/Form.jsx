import React, { useState, useEffect } from "react";

const EmailForm = ({ onFormSubmit, onNumberChange }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    onNumberChange(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(phoneNumber);
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%", height: "100%" }}>
      <input
        name="phoneNumber"
        placeholder="+380-(00)-000000"
        type="number"
        bordered={false}
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
    </form>
  );
};

export default EmailForm;
