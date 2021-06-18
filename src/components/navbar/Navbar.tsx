import { NavLink } from "react-router-dom";
import {
  Hidden,
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Divider,
} from "@material-ui/core";
import { NavbarProps, NavbarStyle } from "./Navbar.interface";
import { navbarItems } from "./navbar-items";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    height: (props: NavbarStyle) => props.appBarHeight,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
  drawer: {
    width: (props: NavbarStyle) => props.drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  link: {
    color: "black",
  },
  active: {
    // backgroundColor: "#3f51b5",
    // color: "black",
    // fontWeight: theme.typography.fontWeightBold,
    // "& $icon": {
    //   color: "black",
    // },
    "&::after": {
      width: 8,
      height: 32,
      right: 0,
      top: 8,
      backgroundColor: "#3f51b5",
      position: "absolute",
      content: '""',
    },
  },
}));

function Navbar({ closeDrawer, navbarOpen, ...styleProps }: NavbarProps) {
  const styles = useStyles({ ...styleProps });

  function Content() {
    return (
      <>
        <div className={styles.toolbar}>
          <span>Business</span>
        </div>
        <Divider />
        <List component="nav" aria-label="main paths">
          {navbarItems.map((item, index) => (
            <ListItem
              button
              disableRipple
              key={index}
              component={NavLink}
              className={styles.link}
              activeClassName={styles.active}
              to={item.to}
            >
              {/* {item.icon && (
                <ListItemIcon color="inherit">
                  <item.icon />
                </ListItemIcon>
              )} */}
              <ListItemText primary={item.title} color="inherit" />
            </ListItem>
          ))}
        </List>
      </>
    );
  }
  return (
    <>
      <Hidden lgUp>
        <Drawer
          classes={{
            paper: styles.drawer,
          }}
          open={navbarOpen}
          onClose={closeDrawer}
        >
          <Content />
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          classes={{
            paper: styles.drawer,
          }}
          open
          variant="persistent"
        >
          <Content />
        </Drawer>
      </Hidden>
    </>
  );
}

export default Navbar;
