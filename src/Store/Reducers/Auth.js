  const INTIAL_STATE =false
const changeRoute=(state =INTIAL_STATE ,action)=>{
switch (action.type) {
    case "Private_Routing":
         return action.peyload
    default:
        return state;
}
}
export default changeRoute;