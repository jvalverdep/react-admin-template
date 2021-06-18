export interface NavbarProps extends NavbarStyle {
  navbarOpen: boolean;
  closeDrawer: () => void;
}

export interface NavbarStyle {
  drawerWidth: number;
  appBarHeight: number;
}

export interface INavbarItem {
  title: string;
  to: string;
  icon?: React.ElementType;
  children?: INavbarItem[];
}
