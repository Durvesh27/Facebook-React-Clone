import {Route, Routes } from "react-router-dom";
import Login from "./Comonents/User/Login";
import Register from "./Comonents/User/Register";
import Home from "./Comonents/Home/Home";
import CreateStory from "./Comonents/Main/CreateStory";
import CreatePost from "./Comonents/Main/CreatePost";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/create-story" element={<CreateStory/>}/>
      <Route exact path="/create-post" element={<CreatePost/>}/>
    </Routes>
    </div>
  );
}

export default App;
