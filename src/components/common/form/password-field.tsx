import React, { FunctionComponent, useState } from "react";
import InputField, { InputFieldProps } from "./input-field";

const PasswordField: FunctionComponent<InputFieldProps> = ({ ...props }) => {
  const [type, setType] = useState("password");

  const changeType = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  return (
    <InputField {...props} type={type}>
      <button
        className="no-outline text-black-placeholder uppercase font-medium text-xs absolute right-3.5 sm:right-4"
        onClick={() => changeType()}
        type="button"
      >
        {type === "password" ? (
          <span className="text-xs font-display text-primary-400">SHOW</span>
        ) : (
          <span className="text-xs font-display text-primary-400">HIDE</span>
        )}
      </button>
    </InputField>
  );
};

export default PasswordField;
