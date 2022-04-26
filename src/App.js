import {Fragment, useCallback, useMemo, useState} from "react";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardHeader,
  CardMedia,
  Collapse,
  Container,
  createTheme,
  CssBaseline,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ThemeProvider,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {Close, Menu} from "@mui/icons-material";
import {firstname, lastname, portret, workInProgress} from "./config";


function App() {
  const lightMode = useMediaQuery("(prefers-color-scheme: light)");
  const theme     = useMemo(() => createTheme(
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


  const smartphone = useMediaQuery("only screen and (max-width:425px)");

  const [isOpenedNavDrawer, setOpenedNavDrawer] = useState(false);
  const toggleNavDrawer                         = useCallback(() => {
    setOpenedNavDrawer(!isOpenedNavDrawer);
  }, [isOpenedNavDrawer, setOpenedNavDrawer]);

  const [isOpenedWIPDialog, setOpenedWIPDialog] = useState(false);
  const toggleWIPDialog                         = useCallback(() => {
    setOpenedWIPDialog(!isOpenedWIPDialog);
  }, [isOpenedWIPDialog, setOpenedWIPDialog]);

  return (<Fragment>
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
            <Collapse orientation={"horizontal"} in={smartphone}>
              <IconButton
                  edge={"end"}
                  color={"inherit"}
                  onClick={toggleNavDrawer}>
                {isOpenedNavDrawer ? <Close /> : <Menu />}
              </IconButton>
            </Collapse>
            <Collapse orientation={"horizontal"} in={!smartphone}>
              <Box component={"div"} sx={{display: "flex"}}>
                {workInProgress &&
                 <Button sx={{color: "white"}} startIcon={workInProgress?.icon} onClick={toggleWIPDialog}>
                   <Typography variant={"button"} noWrap>
                     {workInProgress?.short}
                   </Typography>
                 </Button>}
              </Box>
            </Collapse>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer keepMounted anchor={"right"} open={smartphone && isOpenedNavDrawer} onClose={toggleNavDrawer}>
        <Toolbar>
          <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{flexGrow: 1}}
          >
            {firstname} {lastname}
          </Typography>
          <IconButton
              edge={"end"}
              color={"inherit"}
              onClick={toggleNavDrawer}>
            {isOpenedNavDrawer ? <Close /> : <Menu />}
          </IconButton>
        </Toolbar>
        <List>
          <ListItemButton divider onClick={() => {
            setOpenedNavDrawer(false);
            toggleWIPDialog();
          }}>
            <ListItemIcon>{workInProgress?.icon}</ListItemIcon>
            {workInProgress?.title}
          </ListItemButton>
        </List>
      </Drawer>
      <Container component={"main"}>
        <Card sx={{
          marginY: 2,
          display: smartphone ? undefined : "flex",
        }}>
          {portret &&
           <CardMedia component={"img"}
                      src={portret}
                      alt={"Portret van " + firstname}
                      sx={{
                        aspectRatio: smartphone ? "1/2" : "1/1",
                        maxWidth:    smartphone ? "100%" : "30%",
                      }} />}
          <CardHeader title={firstname + " " + lastname + " 👋🏻"}
                      subheader={workInProgress?.text} />
        </Card>
      </Container>
      <Dialog open={workInProgress && isOpenedWIPDialog} onClose={toggleWIPDialog}>
        <DialogTitle>{workInProgress?.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {workInProgress?.text}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  </Fragment>);
}

export default App;