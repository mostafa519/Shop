const INTIAL_VALUE=[];
const Add_Remove_From_Store=(state=INTIAL_VALUE,action)=>{
     switch (action.type) {
        case "Remove_From_Store":
            return state.filter((product)=>product.id!=action.peyload);
           case "Add_To_Store" :
     return [...state,action.peyload];
        default:
            return state;
     }
}
export default Add_Remove_From_Store;