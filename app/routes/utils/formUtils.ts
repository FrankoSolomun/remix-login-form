import { ChangeEvent } from "react";

export const handleInputChange = (
  event: ChangeEvent<HTMLInputElement>,
  field: string,
  setFormData: (form: (prevForm: any) => any) => void,
) => {
  setFormData((form) => ({ ...form, [field]: event.target.value }));
};

export const handleDateChange = (
  event: ChangeEvent<HTMLInputElement>,
  setFormData: (form: (prevForm: any) => any) => void,
) => {
  let { value } = event.target;
  const inputType = (event.nativeEvent as InputEvent).inputType;

  // Normalize the input to only contain numbers
  value = value.replace(/[^0-9]/g, "");

  // Format the string with dots in the correct places
  if (value.length >= 2) {
    value = value.slice(0, 2) + "." + value.slice(2);
  }
  if (value.length >= 5) {
    value = value.slice(0, 5) + "." + value.slice(5);
  }

  // Cut the value to the maximum length of 10 characters (DD.MM.YYYY)
  if (value.length > 10) {
    value = value.slice(0, 10);
  }

  // Handle deletion specifically, maintaining the position of dots
  if (inputType === "deleteContentBackward") {
    // Remove any trailing dots left over after deletion
    value = value.replace(/\.$/, "").replace(/\.\./g, ".");
  }

  // Update form state
  setFormData((prev) => ({
    ...prev,
    [event.target.name]: value,
  }));
};
