import About from "../About/About"
import Admin from "../Admin/Admin"
import HomePage from "../Home/HomePage"
import { ADMIN_PAGE, HOME_PAGE, PRODUCTS, ABOUT } from "./routerPath"






export const authRouter = [
  {path: ADMIN_PAGE, component: Admin}
]

export const publicRouter = [
  {path:HOME_PAGE, component: HomePage},
  {path:PRODUCTS, component: ''},
  {path:ABOUT, component: About}
]