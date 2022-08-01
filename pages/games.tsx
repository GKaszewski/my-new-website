import Unity, { UnityContext } from "react-unity-webgl";
import { BaseLayout } from "../src/components/baselayout";

const unityContext = new UnityContext({
	loaderUrl: "https://gabrielkaszewski.pl/media/webgl.loader.js",
	dataUrl: "https://gabrielkaszewski.pl/media/webgl.data",
	frameworkUrl: "https://gabrielkaszewski.pl/media/webgl.framework.js",
	codeUrl: "https://gabrielkaszewski.pl/media/webgl.wasm",
});

const GamesPage = () => {
	return (
		<BaseLayout title="Games">
			<Unity unityContext={unityContext} />
		</BaseLayout>
	);
};

export default GamesPage;
