interface FormProps {
  htmlFor: string;
  label: string;
  type?: string;
  name?: string;
  value?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (...args: any) => any;
}

export function Textfield({
  htmlFor,
  label,
  type = "text",
  name,
  value,
  onChange = () => {},
}: FormProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={htmlFor} className="text-sm font-semibold text-gray-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={htmlFor}
        value={value}
        onChange={onChange}
        required
        className="p-2 mt-1 border border-gray-300 rounded-lg"
      />
    </div>
  );
}
