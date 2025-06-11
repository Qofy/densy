import './App.css';
import { Routes, Route} from 'react-router-dom';
import { Login } from "./components/Login.tsx"
import Header from './components/Header.tsx';
import { Home } from './components/Home.tsx';
function App() {
  return (
    <div className="App">
          <Header/>
          <Routes>
              <Route path='/' element={<Login/>}/> 
              <Route path='/home' element={<Home/>}/>
          </Routes>    
    </div>
  );
}

export default App;