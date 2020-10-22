import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#ff9642",
		},
		secondary: {
			main: "#ffe05d",
		},
		error: {
			main: red.A400,
		},
		background: {
			default: "#646464",
		},
		text: {
			primary: "#fff8cd",
		},
	},
});

export default theme;
