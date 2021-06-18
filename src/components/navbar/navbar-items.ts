import { paths } from "../../routes/paths";
import { INavbarItem } from "./Navbar.interface";
import InboxIcon from "@material-ui/icons/MoveToInbox";

export const navbarItems: INavbarItem[] = [
  {
    title: "Home",
    to: paths.HOME,
    icon: InboxIcon,
  },
  {
    title: "Página 1",
    to: paths.PAGE1,
  },
  {
    title: "Página 2",
    to: paths.PAGE2,
  },
  {
    title: "Página 3",
    to: paths.PAGE3,
  },
];
