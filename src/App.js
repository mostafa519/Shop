 
import { Provider } from 'react-redux';
import './App.css'; 
import MainComponent from './MainComponent/MainComponent';
import store from './Store/Store/Store';

function App() {
  return (<>
  <Provider store={store}>
    <MainComponent></MainComponent>
    </Provider>
    </>
      );
}

export default App;
