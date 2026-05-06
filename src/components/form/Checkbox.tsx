import React from "react";

type CheckboxProps = {
  label?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Checkbox = ({ label, error, id, ...props }: CheckboxProps) => {
  const inputId = id || props.name;

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={inputId} className="flex items-center gap-2">
        <input type="checkbox" id={inputId} {...props} />
        {label}
      </label>

      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default Checkbox;
