import {Fragment, memo} from "react";
import {Card, CardHeader, CardMedia, useMediaQuery} from "@mui/material";
import {firstname, lastname, leadText, portret} from "../../config";

const page = memo(() => {
    const smartphone = useMediaQuery("only screen and (max-width:425px)");

    return (<Fragment>
        <Card sx={{display: smartphone ? undefined : "flex"}}>
            {
                portret &&
                <CardMedia
                    component={"img"}
                    src={portret}
                    alt={"Portret van " + firstname}
                    sx={{
                        aspectRatio: smartphone ? "1/2" : "1/1",
                        maxWidth:    smartphone ? "100%" : "30%",
                    }}
                />
            }
            <CardHeader
                title={firstname + " " + lastname + " 👋🏻"}
                subheader={leadText}
            />
        </Card>
    </Fragment>);
});

export default page;