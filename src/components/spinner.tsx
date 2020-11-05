import { Backdrop, CircularProgress } from "@material-ui/core";
import React from "react";

interface Props {
	open: boolean;
}

export default function Spinner(props: Props) {
	return (
		<Backdrop open={props.open}>
			<CircularProgress color="secondary" />
		</Backdrop>
	);
}
