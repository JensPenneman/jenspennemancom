import {Fragment, useMemo} from "react";
import {AppBar, Button, Card, CardHeader, Container, createTheme, CssBaseline, IconButton, Stack, ThemeProvider, Toolbar, Typography, useMediaQuery} from "@mui/material";
import {firstname, lastname, siteSettings, socialMedia, workInProgress} from "./config";
import {AboutMe, Projects, Studies, Work} from "./containers";


function App() {
  const lightMode = useMediaQuery("(prefers-color-scheme: light)");
  const theme = useMemo(() => createTheme(
      {
        palette: {
          mode:              lightMode ? "light" : "dark",
          common:            {
            black: "#1C1B1F",
            white: "#FFFBFE",
          },
          primary:           {
            main:         lightMode ? "#6750A4" : "#D0BCFF",
            contrastText: lightMode ? "#FFFFFF" : "#371E73",
          },
          secondary:         {
            main:         lightMode ? "#625B71" : "#CCC2DC",
            contrastText: lightMode ? "#FFFFFF" : "#332D41",
          },
          info:              { // tertiary
            main:         lightMode ? "#7D5260" : "#EFB8C8",
            contrastText: lightMode ? "#FFFFFF" : "#492532",
          },
          error:             {
            main:         lightMode ? "#B3261E" : "#F2B8B5",
            contrastText: lightMode ? "#FFFFFF" : "#601410",
          },
          background:        {
            paper:   lightMode ? "#FFFBFE" : "#1C1B1F",
            default: lightMode ? "#FFFBFE" : "#1C1B1F",
          },
          contrastThreshold: 3,
          tonalOffset:       0.2,
        },
      },
  ), [lightMode]);


  const smartphone = useMediaQuery("only screen and (max-width:630px)");

  return (<Fragment>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <AppBar position={"sticky"} sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
        <Container>
          <Toolbar disableGutters>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{flexGrow: 1}}
            >
              {firstname} {lastname}
            </Typography>
            <Button color={"inherit"} disabled={true}>
              Download CV
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Container component={"main"} sx={{marginY: 2}}>
        <Card sx={{
          marginY: 2,
          display: smartphone ? undefined : "flex",
        }}>
          <CardHeader title={workInProgress?.title}
                      subheader={workInProgress?.text}/>
        </Card>
        <Stack rowGap={siteSettings?.sectionSpacing} direction={"column"}>
          <AboutMe/>
          <Studies/>
          <Work/>
          <Projects/>
        </Stack>
      </Container>
      <Container>
        <Toolbar disableGutters>
          <Typography component={"span"} variant={"caption"} noWrap sx={{flexGrow: 1}}>
            &copy; Jens Penneman
          </Typography>
          {
            socialMedia
                .map((social, index, socialMedia) => {
                  return <IconButton href={social.href} target={"_blank"} key={index}
                                     edge={index === socialMedia.length - 1 ? "end" : undefined}>
                    {social.icon}
                  </IconButton>;
                })
          }
        </Toolbar>
      </Container>
    </ThemeProvider>
  </Fragment>);
}

export default App;