import Head from "next/head";
import React, { FunctionComponent } from "react";
import Footbar from "./footbar";
import NavigationBar from "./navigationbar";

interface Props {
  title: string;
}

export const BaseLayout: FunctionComponent<Props> = ({ title, children }) => {
  return (
    <div className="flex flex-col min-h-screen h-full text-white">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NavigationBar />
      </div>
      <div className="flex flex-col h-full justify-center items-center gap-4">
        {children}
      </div>
      <span className="flex-1" />
      <Footbar />
    </div>
  );
};
