
const INIAL_VALUE ={};
const Show_Details=(state =INIAL_VALUE ,action)=>{
switch (action.type) {
    case "Show_Details":
         return action.peyload
    default:
        return state;
}
}
export default Show_Details;