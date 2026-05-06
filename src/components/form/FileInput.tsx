import React from "react";
import FormField from "./FormField";

type FileInputProps = {
  label?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const FileInput = ({
  label,
  error,
  id,
  className = "",
  ...props
}: FileInputProps) => {
  const inputId = id || props.name;

  return (
    <FormField label={label} error={error} htmlFor={inputId}>
      <input
        type="file"
        id={inputId}
        {...props}
        className={`border p-2 rounded ${className}`}
      />
    </FormField>
  );
};

export default FileInput;
