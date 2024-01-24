import { HashRouter, Link, Route, Routes } from "react-router-dom";
import './a.scss'
import About from "./component/About";
import Skills from "./component/Skills";
import Project from "./component/Project";
import Contacts from "./component/Contacts";


function App() {
  return (
    <div>
      <HashRouter>
        <header>
          <Link to= '/' className="header_jsg">JSG Story</Link>
          <p className="header_line"></p>   
            <nav className="side_link">
              <Link to= '/'>About Me</Link>
              <Link to= '/Skills'>Skills</Link>
              <Link to= '/Project'>Project</Link>
              <Link to= '/contacts'>Contacts</Link>
            </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<About/>}></Route>
            <Route path="/Skills" element={<Skills/>}></Route>
            <Route path="/Project" element={<Project/>}></Route>
            <Route path="/contacts" element={<Contacts/>}></Route>
          </Routes>
        </main>
      </HashRouter>
    </div>
  );
}

export default App;
