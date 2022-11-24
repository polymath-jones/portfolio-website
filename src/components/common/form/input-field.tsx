import React from "react";

export interface InputFieldProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
  label: string;
  name: string;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  disabled,
  className,
  name,
  children,
  error,
  ...props
}) => {
  return (
    <div
      className={`w-full mt-4 first:mt-0 ${className} ${
        disabled && "opacity-60"
      }`}
    >
      <div className={`h-12.5 w-full relative flex items-center font-action`}>
        <input
          {...props}
          name={name}
          disabled={disabled}
          placeholder=" "
          className={`input-field h-full w-full !outline-none border border-grey-divider bg-grey-fields-100 bg-opacity-40 rounded-lg text-base placeholder-shown:text-1sm text-black-secondary px-4 sm:px-5`}
        />

        <label
          htmlFor={name}
          className={`text-sm text-placeholder absolute cursor-text pointer-events-none`}
        >
          {label}
        </label>
        {children}
      </div>
    </div>
  );
};

export default InputField;
