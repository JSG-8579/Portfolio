import { useEffect, useState } from "react";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import './a.scss'
import About from "./component/About";
import Project from "./component/Project";
import Contacts from "./component/Contacts";
import Home from "./component/Home";

const Links = ["ABOUT", "PROJECT", "CONTACT"]


function App() {
  const [url, setUrl] = useState('')

  const getUrl = (url2) => {
    console.log(url2)
    setUrl(url2)
  }

  


  return (
    <HashRouter>

        <div className="header_line2">
          <nav>
            {
              Links.map((obj) => (
                <Link key={obj} className={url == '/' + obj ? 'link' : ''} to={`/${obj}`}><p>{obj}</p></Link>

              ))
            }
          </nav>
        </div>
        <main>

          <Routes>
            <Route path="/" element={<Home getUrl={getUrl} />}></Route>
            <Route path="/ABOUT" element={<About getUrl={getUrl} />}></Route>
            <Route path="/PROJECT" element={<Project getUrl={getUrl} />}></Route>
            <Route path="/CONTACT" element={<Contacts getUrl={getUrl} />}></Route>
          </Routes>
        </main>
    </HashRouter>

  );
}

export default App;
