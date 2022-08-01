import Unity, { UnityContext } from "react-unity-webgl";
import { BaseLayout } from "../src/components/baselayout";
import { Button } from "../src/components/button";

const unityContext = new UnityContext({
	loaderUrl: "https://gabrielkaszewski.pl/media/webgl.loader.js",
	dataUrl: "https://gabrielkaszewski.pl/media/webgl.data",
	frameworkUrl: "https://gabrielkaszewski.pl/media/webgl.framework.js",
	codeUrl: "https://gabrielkaszewski.pl/media/webgl.wasm",
});

const GamesPage = () => {
	return (
		<BaseLayout title="Games">
			<Unity className="w-full" unityContext={unityContext} />
			<div className="w-32">
				<Button callback={() => unityContext.setFullscreen(true)}>
					Set fullscreen
				</Button>
			</div>
		</BaseLayout>
	);
};

export default GamesPage;
