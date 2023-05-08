import React, {Component, FC} from "react";
import Head from "next/head";
import { Provider } from "react-redux";
import Store from "../src/redux/store";
import { createWrapper } from "next-redux-wrapper";
import { DefaultSeo } from "next-seo";
import "../styles/globals.css";
import "../src/utils/font-awesome";
import {AppProps} from "next/app";
import Autologin from "../src/components/autologin";

const makeStore = () => Store;
const wrapper = createWrapper(makeStore);

const MyApp: FC<AppProps> = ({Component, ...rest}) => {
	const {store, props} = wrapper.useWrappedStore(rest);

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
				<title>Gabriel Kaszewski</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>
			<Provider store={store}>
				<Autologin />
				<DefaultSeo
					title="Gabriel Kaszewski"
					description="Gabriel's Kaszewski personal website."
					openGraph={{
						title: "Gabriel Kaszewski",
						locale: "en_US",
						url: "https://gabrielkaszewski.dev",
					}}
				/>
				<Component {...props} />

			</Provider>
		</React.Fragment>
	);
}

export default MyApp;
