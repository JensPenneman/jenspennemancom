import {Fragment, memo} from "react";
import {Divider, Typography} from "@mui/material";

const page = memo(() => {
	return (<Fragment>
		<Divider id={"werkervaring"}>
			<Typography variant={"h4"} component={"h2"}>
				Werkervaring
			</Typography>
		</Divider>
	</Fragment>);
});

export default page;