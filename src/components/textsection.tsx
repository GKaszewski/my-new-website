import React, { FunctionComponent } from "react";

export const TextSection: FunctionComponent = ({ children }) => {
  return (
    <div className="flex flex-col text-justify md:text-left m-4 md:m-0 md:w-1/2 items-center prose md:prose-lg lg:prose-xl">
      {children}
    </div>
  );
};
