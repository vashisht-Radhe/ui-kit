type RadioOption = {
  label: string;
  value: string;
};

type RadioProps = {
  label?: string;
  error?: string;
  name: string;
  options: RadioOption[];
};

const Radio = ({ label, error, name, options }: RadioProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <span className="text-sm font-medium">{label}</span>}

      {options.map((opt) => (
        <label key={opt.value} className="flex items-center gap-2">
          <input type="radio" name={name} value={opt.value} />
          {opt.label}
        </label>
      ))}

      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default Radio;
