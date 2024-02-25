import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";

function App() {
  const [seletedTab, setSelectedTab] = useState("Home");
  return (
    <div className="app-container">
      <Sidebar selecetdTab={selecetdTab}></Sidebar>
      <div className="content">
        <Header></Header>
        {seletedTab === "Home" ? (
          <PostList></PostList>
        ) : (
          <CreatePost></CreatePost>
        )}
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
