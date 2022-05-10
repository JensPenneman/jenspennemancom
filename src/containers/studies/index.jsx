import {Fragment, memo} from "react";
import {Button, Card, CardActionArea, CardActions, CardHeader, Divider, Grid, Typography} from "@mui/material";
import {siteSettings, studies} from "../../config";
import {OpenInNew} from "@mui/icons-material";

const page = memo(() => {
    return (<Fragment>
        <Divider id={"studies"}>
            <Typography variant={"h4"} component={"h2"}>
                Studies
            </Typography>
        </Divider>
        <Grid container
              spacing={siteSettings.sectionSpacing}
              columns={{
                  xs: 1,
                  sm: 1,
                  md: 2,
                  lg: 3,
              }}>
            {studies.map(studie => {
                return (<Grid item {...studie.size} key={studie.name}>
                    <Card>
                        <CardActionArea href={studie.href} target={"_blank"} disabled={!studie.href}>
                            <CardHeader
                                title={studie.name}
                                subheader={studie.startdate.toLocaleDateString(undefined, {
                                    year:  "numeric",
                                    month: "long",
                                }) + " - " + studie.enddate.toLocaleDateString(undefined, {
                                    year:  "numeric",
                                    month: "long",
                                })}
                                action={studie.schoolLogo && <img src={studie.schoolLogo}
                                                                  alt={"Logo for " + studie.schoolName}
                                                                  width={40}
                                                                  height={40}/>}
                            />
                        </CardActionArea>
                        {
                            studie.schoolName && studie.schoolHref &&
                            <CardActions>
                                <Button href={studie.schoolHref}
                                        target={"_blank"}
                                        endIcon={<OpenInNew/>}>
                                    Naar {studie.schoolName}
                                </Button>
                            </CardActions>
                        }
                    </Card>
                </Grid>);
            })}
        </Grid>
    </Fragment>);
});

export default page;