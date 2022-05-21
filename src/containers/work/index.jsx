import {Fragment, memo} from "react";
import {Card, CardActionArea, CardHeader, Divider, Grid, Typography} from "@mui/material";
import {siteSettings, work} from "../../config";

const page = memo(() => {
	return (<Fragment>
		<Divider>
			<Typography variant={"h4"} component={"h2"}>
				Werkervaring
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
			{work
				.sort((WE1, WE2) => {
					return WE1.periods.sort((period1, period2) => {
						return period1.startdate - period2.startdate;
					})[0].startdate - WE2.periods.sort((period1, period2) => {
						return period1.startdate - period2.startdate;
					})[0].startdate;
				})
				.reverse()
				.map(workExperience => {
					return (<Grid item xs={1} key={workExperience.companyName}>
						<Card>
							<CardActionArea href={workExperience.href} target={"_blank"}
											disabled={!workExperience.href}>
								<CardHeader
									title={workExperience.role + " bij " + workExperience.companyName}
									subheader={
										(
											(workExperience?.periods?.length === 0 && undefined) ||
											(workExperience?.periods?.length === 1 && workExperience?.periods[0].displayText) ||
											(workExperience?.periods?.length === 1 && workExperience?.periods[0].enddate === undefined && (workExperience?.periods[0].startdate.toLocaleDateString(undefined, {
												year:  "numeric",
												month: "long",
											})) + " tot heden") ||
											(workExperience?.periods?.length === 1 && workExperience?.periods[0].startdate.getTime() === workExperience?.periods[0].enddate.getTime() && (workExperience?.periods[0].startdate.toLocaleDateString(undefined, {
												year:  "numeric",
												month: "long",
											}))) ||
											(workExperience?.periods?.length === 1 && workExperience?.periods[0].startdate.getTime() !== workExperience?.periods[0].enddate.getTime() && (workExperience?.periods[0].startdate.toLocaleDateString(undefined, {
												year:  "numeric",
												month: "long",
											}) + " - " + workExperience?.periods[0].enddate.toLocaleDateString(undefined, {
												year:  "numeric",
												month: "long",
											}))) ||
											(workExperience?.periods?.length > 1 && "Meerdere perioden")
										) + (workExperience.isHoliday ? " • Vakantiewerk" : "")
									}
									action={workExperience.companyLogo && <img src={workExperience.companyLogo}
																			   alt={"Logo for " + workExperience.companyName}
																			   width={40} height={40}/>}
								/>
							</CardActionArea>
						</Card>
					</Grid>);
				})}
		</Grid>
	</Fragment>);
});

export default page;