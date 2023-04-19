import Unity, { UnityContext } from "react-unity-webgl";
import { BaseLayout } from "../src/components/baselayout";
import { Button } from "../src/components/button";

const unityContext = new UnityContext({
	loaderUrl: "https://gabrielkaszewski.dev/media/Builds.loader.js",
	dataUrl: "https://gabrielkaszewski.dev/media/Builds.data.br",
	frameworkUrl: "https://gabrielkaszewski.dev/media/Builds.framework.js.br",
	codeUrl: "https://gabrielkaszewski.dev/media/Builds.wasm.br",
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
