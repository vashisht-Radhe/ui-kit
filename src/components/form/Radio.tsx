import type { InputHTMLAttributes } from "react";

type RadioOption = {
  label: string;
  value: string;
};

type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  options: RadioOption[];
};

const Radio = ({ label, error, name, options, ...props }: RadioProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <span className="text-sm font-medium">{label}</span>}

      {options.map((opt) => (
        <label key={opt.value} className="flex items-center gap-2">
          <input type="radio" name={name} value={opt.value} {...props} />

          {opt.label}
        </label>
      ))}

      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default Radio;
