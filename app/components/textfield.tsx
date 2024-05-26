import React, { useState } from "react";

interface FormProps {
  htmlFor: string;
  label: string;
  type?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  pattern?: string;
  placeholder?: string;
  focusPlaceholder?: string;
  error?: string;
}

export function Textfield({
  htmlFor,
  label,
  type = "text",
  name,
  value = "",
  onChange,
  pattern,
  placeholder = label,
  focusPlaceholder,
  error,
}: FormProps) {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(placeholder);

  const handleFocus = () => {
    if (focusPlaceholder) {
      setCurrentPlaceholder(focusPlaceholder);
    }
  };

  const handleBlur = () => {
    if (!value) {
      setCurrentPlaceholder(placeholder);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="flex flex-col w-[320px]">
      <input
        type={type}
        name={name}
        id={htmlFor}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        pattern={pattern}
        placeholder={currentPlaceholder}
        className={`px-5 py-3 mt-1 border rounded-full ${error ? "border-red-500" : "border-gray-300"}`}
        required
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
