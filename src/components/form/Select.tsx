import React from "react";
import FormField from "./FormField";

type SelectProps = {
  label?: string;
  error?: string;
  options: { label: string; value: string }[];
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const Select = ({
  label,
  error,
  options,
  id,
  className = "",
  ...props
}: SelectProps) => {
  const inputId = id || props.name;

  return (
    <FormField label={label} error={error} htmlFor={inputId}>
      <select
        id={inputId}
        {...props}
        className={`p-2 border-2 rounded ${
          error ? "border-red-500" : "border-blue-500"
        } ${className}`}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </FormField>
  );
};

export default Select;
