import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { Provider, useDispatch } from "react-redux";
import Store from "../src/redux/store";
import { createWrapper } from "next-redux-wrapper";
import { DefaultSeo } from "next-seo";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../src/utils/font-awesome";
import signedIn from "../src/redux/dispatchers/auth/signedInAlready";

function MyApp(props) {
	const { Component, pageProps } = props;
	const dispatch = useDispatch();

	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
		dispatch(signedIn());
	}, []);

	return (
		<React.Fragment>
			<Head>
				<title>Gabriel Kaszewski</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>
			<Provider store={Store}>
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
