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
}: FormProps) {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(placeholder);
  const [isValid, setIsValid] = useState(true); // Assume input is valid initially

  const handleFocus = () => {
    if (focusPlaceholder) {
      setCurrentPlaceholder(focusPlaceholder); // Set focused placeholder if provided
    }
  };

  const handleBlur = () => {
    if (!value) {
      setCurrentPlaceholder(placeholder); // Reset placeholder when not focused
    }
    if (pattern) {
      setIsValid(new RegExp(pattern).test(value)); // Validate against the pattern
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e); // Call the passed onChange handler
    }
    if (pattern) {
      setIsValid(new RegExp(pattern).test(e.target.value)); // Continuously validate input
    }
  };

  return (
    <div className="flex flex-col">
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
        className="px-5 py-3 mt-1 border rounded-full w-[320px]"
        required
      />
    </div>
  );
}
