import React from "react";

type FormFieldProps = {
  label?: string;
  error?: string;
  htmlFor?: string;
  children: React.ReactNode;
};

const FormField = ({ label, error, htmlFor, children }: FormFieldProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={htmlFor} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      {children}

      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default FormField;
