import React , { useRef, useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Client from './Client';
import '@coreui/coreui/dist/css/coreui.min.css'
import TextEditor from './TextEditor';


function App() {

  return (
    <div className="App">
      <Client/>
      {/* <Modal/> */}
      {/* <TextEditor setvalue={setvalue}/> */}
      {/* <div >{value}</div> */}
{/* <TextEditor/> */}
    </div>
  );
}

export default App;
