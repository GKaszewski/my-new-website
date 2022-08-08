import Unity, { UnityContext } from "react-unity-webgl";
import { BaseLayout } from "../src/components/baselayout";
import { Button } from "../src/components/button";

const unityContext = new UnityContext({
	loaderUrl: "https://gabrielkaszewski.pl/media/sammy.loader.js",
	dataUrl: "https://gabrielkaszewski.pl/media/sammy.data.gz",
	frameworkUrl: "https://gabrielkaszewski.pl/media/sammy.framework.js.gz",
	codeUrl: "https://gabrielkaszewski.pl/media/sammy.wasm.gz",
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
