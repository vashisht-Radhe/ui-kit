import React from "react";
import FormField from "./FormField";

type InputProps = {
  label?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ label, error, className = "", id, ...props }: InputProps) => {
  const inputId = id || props.name;

  const baseClass =
    "p-2 border-2 rounded outline-none text-gray-600 transition";

  const stateClass = error
    ? "border-red-500 focus:ring-2 focus:ring-red-500"
    : "border-blue-500 focus:ring-2 focus:ring-blue-500";

  return (
    <FormField label={label} error={error} htmlFor={inputId}>
      <input
        id={inputId}
        {...props}
        className={`${baseClass} ${stateClass} ${className}`}
      />
    </FormField>
  );
};

export default Input;
