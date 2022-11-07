import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// components
import AddEmp from "./components/AddEmp";
import DataSheet from "./components/DataSheet";

// main-components
function App() {
  const [empId, setEmpId] = useState("");

  // getting specific user data
  const getEmpHandler = (id) => {
    console.log("Document to be edited", id);
    setEmpId(id);
  };

  return (
    <div className="App">
      <div className="title-container">
        <h1>CRUD Opeartion</h1>
        <p>made using REACTJS and Firebase</p>
      </div>
      <div className="container form-container">
        <AddEmp id={empId} setEmpId={setEmpId} />
        <DataSheet getEmpId={getEmpHandler} />
      </div>
    </div>
  );
}

export default App;
