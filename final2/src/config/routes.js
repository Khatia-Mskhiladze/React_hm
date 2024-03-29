import {
  HOME_PAGE,
  SIGN_IN_PAGE,
  SIGN_UP_PAGE,
  NOT_FOUND,
  DETAILS_PAGE
} from "../constants/routes";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import NotFound from "../pages/not-found/index";
import Details_page from "../pages/details-page/Details_page";
import AuthGuard from "../Guard/AuthGuard";
import GustGuard from "../Guard/GustGuard";



const routes = [
  {
    path: HOME_PAGE,
    Component: Home,
    Guard: AuthGuard,
  },
  {
    path: SIGN_IN_PAGE,
    Component: SignIn,
    Guard: GustGuard,
  },
  {
    path: SIGN_UP_PAGE,
    Component: SignUp,
    Guard: GustGuard,
  },
  {
    path: NOT_FOUND,
    Component: NotFound,
  },
  {
    path: DETAILS_PAGE,
    Component: Details_page,
    Guard: AuthGuard,
  },

];

export default routes;
