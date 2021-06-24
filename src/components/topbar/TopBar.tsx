import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import {
  AppBar,
  Hidden,
  makeStyles,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  Theme,
} from "@material-ui/core";
import { TopBarProps, TopBarStyle } from "./TopBar.interface";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: (props: TopBarStyle) => props.drawerWidth,
    width: (props: TopBarStyle) => `calc(100% - ${props.drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

function TopBar(props: TopBarProps) {
  const styles = useStyles({ drawerWidth: props.drawerWidth });
  const largeScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("lg")
  );

  return (
    <AppBar
      className={clsx(styles.appBar, {
        [styles.appBarShift]: largeScreen,
      })}
    >
      <Toolbar variant="dense">
        <Hidden lgUp>
          <IconButton
            color="inherit"
            aria-label="menu"
            edge="start"
            onClick={props.openDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Typography variant="h6" noWrap>
          Store
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
