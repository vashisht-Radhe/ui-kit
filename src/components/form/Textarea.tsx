import React from "react";
import FormField from "./FormField";

type TextareaProps = {
  label?: string;
  error?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = ({
  label,
  error,
  className = "",
  id,
  ...props
}: TextareaProps) => {
  const inputId = id || props.name;

  return (
    <FormField label={label} error={error} htmlFor={inputId}>
      <textarea
        id={inputId}
        {...props}
        className={`p-2 border-2 rounded ${
          error ? "border-red-500" : "border-blue-500"
        } ${className}`}
      />
    </FormField>
  );
};

export default Textarea;
