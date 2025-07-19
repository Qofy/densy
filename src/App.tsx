import './App.css';
import { Routes, Route} from 'react-router-dom';
import { Login } from "./components/Login.tsx"
import Header from './components/Header.tsx';
import Details from './components/Details.tsx';
import Home from './components/Home.tsx';
function App() {
  return (
    <div className="App">
          <Header/>
          <Routes>
              <Route path='/' element={<Login/>}/> 
              <Route path='/home' element={<Home/>}/> 
              <Route path='/detail/:id' element={<Details/>}/>
          </Routes>    
    </div>
  );
}

export default App;