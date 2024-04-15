import './App.css';
import "./App.scss";
import { Route, Routes } from 'react-router-dom';
import { Main } from './Components/Index/Main';
import { Bog } from './Components/Index/Bog/bog';
import { Admin } from './Components/Index/Admin/admin';
import { IbCoco } from './Components/IB-Coco/ibcoco';
import { About } from './Components/IB-Coco/About/about';

function App() {
  return (<>
    <div className="App">
      <Routes>
        {/**Home */}
        <Route path='/' element={<Main/>}/>
        <Route path="/Bog" element={<Bog/>}/>
        <Route path="/Admin" element={<Admin/>}/>

        {/**Curriculum */}
        <Route path="/IbCoco" element={<IbCoco/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
