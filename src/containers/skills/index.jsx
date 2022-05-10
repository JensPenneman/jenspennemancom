import {Fragment, memo} from "react";
import {Divider, Typography} from "@mui/material";

const page = memo(() => {
    return (<Fragment>
        <Divider id={"vaardigheden"}>
            <Typography variant={"h4"} component={"h2"}>
                Vaardigheden
            </Typography>
        </Divider>
    </Fragment>);
});

export default page;