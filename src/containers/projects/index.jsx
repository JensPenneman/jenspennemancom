import {Fragment, memo} from "react";
import {Box, Card, CardActionArea, CardHeader, CardMedia, Divider, Typography} from "@mui/material";
import {projects} from "../../config";
import {FiberNew, OpenInNew} from "@mui/icons-material";
import {Masonry} from "@mui/lab";


const container = memo(() => {
    return <Fragment>
        <Divider>
            <Typography variant={"h4"} component={"h2"}>
                Projecten
            </Typography>
        </Divider>
        <Box component={"div"} sx={{marginRight: -2}}>
            <Masonry columns={{xs: 1, sm: 2, md: 3}} spacing={2}>
                {
                    projects
                        .map((project, index) => {
                            return <Card key={index}>
                                <CardActionArea href={project.href} target={"_blank"} disabled={!project.href}>
                                    <CardMedia
                                        component={"img"}
                                        image={project.image}
                                        sx={{aspectRatio: "5/4"}}
                                    />
                                    <CardHeader title={project.name}
                                                action={!index ? <FiberNew/> : <OpenInNew/>}/>
                                </CardActionArea>
                            </Card>;
                        })
                }
            </Masonry>
        </Box>
    </Fragment>;
});

export default container;