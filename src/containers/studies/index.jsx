import {Fragment, memo} from "react";
import {Divider, Typography} from "@mui/material";

const page = memo(() => {
	return (<Fragment>
		<Divider id={"studies"}>
			<Typography variant={"h4"} component={"h2"}>
				Studies
			</Typography>
		</Divider>
	</Fragment>);
});

export default page;