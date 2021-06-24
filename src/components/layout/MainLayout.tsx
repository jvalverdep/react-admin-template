import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Navbar } from "../navbar";
import { TopBar } from "../topbar";

const drawerWidth = 240;
const appBarHeight = 48;

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
  },
  container: {
    flexGrow: 1,
    marginTop: theme.spacing(6),
    [theme.breakpoints.up("lg")]: {
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["padding"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  },
  content: {
    height: `calc(100% - ${appBarHeight}px)`,
    padding: theme.spacing(3),
  },
}));

const MainLayout: React.FC = (props) => {
  const styles = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpenDrawer = () => {
    setOpen(true);
  };

  const handleCloseDrawer = () => {
    setOpen(false);
  };

  return (
    <div className={styles.root}>
      <TopBar drawerWidth={drawerWidth} openDrawer={handleOpenDrawer} />
      <Navbar
        closeDrawer={handleCloseDrawer}
        appBarHeight={appBarHeight}
        drawerWidth={drawerWidth}
        navbarOpen={open}
      />
      <main className={styles.container}>
        <div className={styles.content}>{props.children}</div>
      </main>
    </div>
  );
};

export default MainLayout;
