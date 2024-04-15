import './App.css';
import "./App.scss";
import { Route, Routes } from 'react-router-dom';
import { Main } from './Components/Index/Main';
import { Bog } from './Components/Index/Bog/bog';

function App() {
  return (<>
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path="/Bog" element={<Bog/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
