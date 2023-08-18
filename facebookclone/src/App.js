import {Route, Routes } from "react-router-dom";
import Login from "./Comonents/User/Login";
import Register from "./Comonents/User/Register";
import Home from "./Comonents/Home/Home";
import CreateStory from "./Comonents/Main/CreateStory";
import CreatePost from "./Comonents/Main/CreatePost";
import Profile from "./Comonents/Main/Profile/Profile";
import EditProfile from "./Comonents/Main/Profile/EditProfile";
import SearchResult from "./Comonents/Main/Profile/SearchResult";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/create-story" element={<CreateStory/>}/>
      <Route exact path="/create-post" element={<CreatePost/>}/>
      <Route exact path="/profile" element={<Profile/>}/>
      <Route exact path="/edit-profile" element={<EditProfile/>}/>
      <Route exact path="/search-result" element={<SearchResult/>}/>
    </Routes>
    </div>
  );
}

export default App;
