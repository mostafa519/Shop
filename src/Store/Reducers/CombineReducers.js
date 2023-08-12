import { combineReducers } from "redux";
import Add_Remove_From_Store from "./Add_RemoveFromCard";   
import Show_Details from "./Details";
 
 export default combineReducers({
    Products:Add_Remove_From_Store,
    Details:Show_Details,
 })