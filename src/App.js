import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import About from "../src/pages/About"
import { ReducerHook } from './pages/HookReducer';

function App() {
  return (
    <div className="App">
 <div>
      </div>
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/about/:id/:id2" element={<About />}></Route>
        <Route path="/" element={<Home />}></Route>
         <Route path="/hooks" element={<ReducerHook />}></Route>
              </Routes>
      {/* <Home/> */}
    </div>
  );
}

export default App;
