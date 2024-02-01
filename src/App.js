import { useEffect, useState } from "react";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import './a.scss'
import About from "./component/About";
import Skills from "./component/Skills";
import Project from "./component/Project";
import Contacts from "./component/Contacts";
import Home from "./component/Home";
import Home_img from "./imgs/Home_img0.png";

const Links = ["About", "Skills", "Project", "Contacts"]


function App() {
  const [url, setUrl] = useState('')

  const getUrl = (url2) => {
    console.log(url2)
    setUrl(url2)
  }


  // {/* <img src={Home_img}/> */}
  return (
    <HashRouter>
        <div className="header_line2">
          <nav>
            <p>ABOUT</p>
            <p>PROJECT</p>
            <p>CONTACT</p>
          </nav>
        </div>
      <main>

        <Routes>
          <Route path="/" element={<Home getUrl={getUrl} />}></Route>
          <Route path="/About" element={<About getUrl={getUrl} />}></Route>
          <Route path="/Project" element={<Project getUrl={getUrl} />}></Route>
          <Route path="/contacts" element={<Contacts getUrl={getUrl} />}></Route>
        </Routes>
      </main>

    </HashRouter>
  );
}

// <Link to= '/'>About Me</Link>
// <Link to= '/Skills'>Skills</Link>
// <Link to= '/Project'>Project</Link>
// <Link to= '/contacts'>Contacts</Link>

export default App;
