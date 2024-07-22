import { Cookie } from "@mui/icons-material";
import Cookies from "js-cookie";
export function userLogout(dispatch) {
    Cookies.remove('userAccessToken')
    Cookie.remove('userRefreshToken')

}
export function adminLogout(dispatch) {
    Cookies.remove('adminAccessToken')
    Cookies.remove('adminRefreshToken')

}