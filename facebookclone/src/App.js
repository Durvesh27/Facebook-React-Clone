import {Route, Routes } from "react-router-dom";
import Login from "./Comonents/User/Login";
import Register from "./Comonents/User/Register";
import Home from "./Comonents/Home/Home";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/" element={<Home/>}/>
    </Routes>
    </div>
  );
}

export default App;
