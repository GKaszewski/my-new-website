import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/utils/theme";
import { Provider } from "react-redux";
import Store from "../src/redux/store";
import { createWrapper } from "next-redux-wrapper";
import { DefaultSeo } from "next-seo";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Provider store={Store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <DefaultSeo
            title="Gabriel Kaszewski"
            description="Gabriel's Kaszewski personal website."
            openGraph={{
              title: "Gabriel Kaszewski",
              locale: "en_US",
              site_name: "Gabriel Kaszewski",
              url: "https://gkaszewski.github.io/",
            }}
          />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </React.Fragment>
  );
}

const makeStore = () => Store;
const wrapper = createWrapper(makeStore);

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default wrapper.withRedux(MyApp);
