import React, { FunctionComponent } from "react";

interface Props {
  callback?: (e: any) => void;
}

export const Button: FunctionComponent<Props> = ({ children, callback }) => {
  return (
    <button
      onClick={callback}
      className="p-2 w-full rounded-xl border border-yellow-400 hover:bg-yellow-400 cursor-pointer"
    >
      {children}
    </button>
  );
};
