import './App.css';
import "./App.scss";
import { Route, Routes } from 'react-router-dom';
import { Main } from './Components/Index/Main';
import { Bog } from './Components/Index/Bog/bog';
import { Admin } from './Components/Index/Admin/admin';
import { IbCoco } from './Components/IB-Coco/ibcoco';
import { About } from './Components/IB-Coco/About/about';
import LearnerProfile from './Components/IB-Coco/LearnerProfile/learner';
import { Core } from './Components/IB-Coco/Core/core';

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
        <Route path="/LearnerProfile" element={<LearnerProfile/>}/>
        <Route path="/Core" element={<Core/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
