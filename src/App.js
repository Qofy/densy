import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Login } from './components/Login';


function App() {
  return (
    <div className="App">
      <h1>
        <Router>
          <Routes>

              <Route path='/' element={<Login/>}/>
            
          </Routes>
        </Router>
      </h1>
    </div>
  );
}

export default App;