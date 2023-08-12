import { legacy_createStore as createStore} from 'redux' 
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import CombineReducers from '../Reducers/CombineReducers';
 
 const store=  createStore(CombineReducers,composeWithDevTools(applyMiddleware(thunk)))

 export default store