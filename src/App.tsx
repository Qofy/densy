import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Login } from './components/Login.tsx';
import Header from './components/Header.tsx';

function App() {
  return (
    <div className="App">
      <h1>
          
        <Router>
          <Header/>
          <Routes>

              <Route path='/' element={<Login/>}/>
            
          </Routes>
        </Router>
      </h1>
    </div>
  );
}

export default App;