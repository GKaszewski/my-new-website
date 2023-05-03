import React, {FunctionComponent, PropsWithChildren} from "react";

interface Props extends PropsWithChildren {
  callback?: (e: any) => void;
  className?: string;
}

export const Button: FunctionComponent<Props> = ({ children, callback, className }) => {
  return (
    <button
      onClick={callback}
      className={`p-2 w-full rounded-xl border border-yellow-400 hover:bg-yellow-400 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};
