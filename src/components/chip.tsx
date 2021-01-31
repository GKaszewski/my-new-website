import React from "react";

interface Props {
  label: string;
}

export default function ChipComponent(props: Props) {
  return (
    <p className="text-base rounded-2xl text-black shadow-lg bg-yellow-400 p-2">
      {props.label}
    </p>
  );
}
