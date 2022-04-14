import "./App.css";
import {Fragment, useMemo} from "react";
import {Button, createTheme, CssBaseline, Grid, ThemeProvider, Typography, useMediaQuery} from "@mui/material";


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

  return (<Fragment>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{minHeight: "85vh"}}
      >
        <Grid item xs={3}>
          <Typography component={"h1"} variant={"h1"} noWrap>
            Jens Penneman 👋🏻
          </Typography>
          <Button color={"primary"} variant={"contained"} sx={{marginRight: 1}}>
            Er
          </Button>
          <Button color={"secondary"} variant={"contained"} sx={{marginX: 1}}>
            wordt
          </Button>
          <Button color={"info"} variant={"contained"} sx={{marginX: 1}}>
            nog
          </Button>
          <Button color={"success"} variant={"contained"} sx={{marginX: 1}}>
            aan
          </Button>
          <Button color={"warning"} variant={"contained"} sx={{marginX: 1}}>
            de
          </Button>
          <Button color={"error"} variant={"contained"} sx={{marginX: 1}}>
            site
          </Button>
          <Button variant={"contained"} sx={{marginLeft: 1}}>
            gewerkt
          </Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  </Fragment>);
}

export default App;