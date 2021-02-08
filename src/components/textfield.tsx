import React from "react";

interface Props {
  value?: string;
  onChange: (val: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
  name?: string;
  type?: "email" | "password" | "text";
  required?: boolean;
}

export default function TextField({ onChange, value, ...rest }: Props) {
  return (
    <input
      className="rounded-xl w-full border-4 text-black py-1 px-2 outline-none appearance-none focus:border-yellow-400"
      value={value}
      onChange={({ target: { value } }) => onChange(value)}
      {...rest}
    />
  );
}
