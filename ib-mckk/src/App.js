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
import { Teacher } from './Components/Index/Teachers/teachers';
import { Subject } from './Components/IB-Coco/Subjects/Subjects';

function App() {
  return (<>
    <div className="App">
      <Routes>
        {/**Home */}
        <Route path='/' element={<Main/>}/>
        <Route path="/Bog" element={<Bog/>}/>
        <Route path="/Admin" element={<Admin/>}/>
        <Route path="/Teacher" element={<Teacher/>}/>

        {/**Curriculum */}
        <Route path="/IbCoco" element={<IbCoco/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/LearnerProfile" element={<LearnerProfile/>}/>
        <Route path="/Core" element={<Core/>}/>
        <Route path="/Subject" element={<Subject/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
