import { combineReducers } from "redux";
import Add_Remove_From_Store from "./Add_RemoveFromCard";   
import Show_Details from "./Details";  
import changeRoute from "./Auth";
 
 export default combineReducers({
    Products:Add_Remove_From_Store,
    Details:Show_Details, 
    Route:changeRoute
 })