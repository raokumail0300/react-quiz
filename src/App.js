import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Quiz from './components/Quiz';
import {Provider} from 'react-redux'
import Store from './store';


function App() {

  return (
    <Provider store={Store}>
      <Quiz />
    </Provider>
      
    
  );
}

export default App;
