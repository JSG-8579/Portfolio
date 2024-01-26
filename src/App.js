import { useEffect, useState } from "react";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import './a.scss'
import About from "./component/About";
import Skills from "./component/Skills";
import Project from "./component/Project";
import Contacts from "./component/Contacts";
import Home from "./component/Home";

const Links = ["About", "Skills", "Project", "Contacts"]


function App() {
  const [url, setUrl] = useState('')

  const getUrl = (url2) => {
    console.log(url2)
    setUrl(url2)
  }
 
  

  return (
    <div>
      <HashRouter>
        <header>
          <Link to='/' className="header_jsg">JSG Story</Link>
          <p classNam e="header_line"></p>
          <nav className="side_link">
            {
              Links.map((obj, idx) => (
                <Link className={url == '/' + obj ? 'link' : ''} key={obj} to={obj}>{obj}</Link>
              ))
            }

          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home getUrl={getUrl} />}></Route>
            <Route path="/About" element={<About getUrl={getUrl} />}></Route>
            <Route path="/Skills" element={<Skills getUrl={getUrl} />}></Route>
            <Route path="/Project" element={<Project getUrl={getUrl} />}></Route>
            <Route path="/contacts" element={<Contacts getUrl={getUrl} />}></Route>
          </Routes>
        </main>
      </HashRouter>
    </div>
  );
}

// <Link to= '/'>About Me</Link>
// <Link to= '/Skills'>Skills</Link>
// <Link to= '/Project'>Project</Link>
// <Link to= '/contacts'>Contacts</Link>

export default App;
