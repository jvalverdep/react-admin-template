import axios from "axios";
import { apiUrls } from "../common/constants/apiUrls";

export const authService = {
  login: () => axios.get(apiUrls.AUTH_URL),
};
