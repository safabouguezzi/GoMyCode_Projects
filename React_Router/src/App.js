
import "./App.css";
import { useState } from "react";
import Home from "./component/Home";
import Description from "./component/Description";
import {Routes, Route, Link, useParams , useNavigate} from "react-router-dom";

function App({Movies}) {
 
  return (
    <div className="myContainer">
        <Routes>
            <Route  path ="/" element={<Home />}></Route>
            <Route  path ='/Description/:id' element={<Description  Movies={Movies}/> } />
        </Routes>    </div>
  );
}

export default App;
