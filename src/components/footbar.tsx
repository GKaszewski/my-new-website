import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";
import React from "react";

export default function Footbar() {
	return (
		<Box
			display="flex"
			flexDirection="row"
			justifyContent="center"
			justifyItems="center"
			alignItems="center"
			alignContent="center"
		>
			<AppBar position="sticky">
				<Toolbar>
					<Box
						display="flex"
						flexDirection="row"
						justifyContent="center"
						alignItems="center"
					>
						<Typography color="textPrimary" variant="body1">
							Copyright {new Date().getFullYear()} Gabriel Kaszewski
						</Typography>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
