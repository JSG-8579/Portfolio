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
  const [c, setC] = useState(false)
  //버거메뉴 반대로 됨

  const getUrl = (url2) => {
    console.log(url2)
    setUrl(url2)
  }

  const burgerOnOff =(e)=>{
    e.stopPropagation();
    if(c == false){
      setC(true)
    }else{
      setC(false)
    }
  }

  const burgerOff =()=>{
    setC(false)
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

      {/* <div id='gohome2'>
          <Link to='/'>JSG</Link>
      </div> */}

      <div className='burger_posi' onClick={burgerOff} >
        <div onClick={(e)=>{burgerOnOff(e)}} className={`burger ${ c ? 'active' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`menu ${ c ? 'active' : ''}`}>
        {
          Links.map((obj, k)=>(
            <Link key={k} className={url == '/' + obj ? 'link' : ''} to={`/${obj}`}><p onClick={burgerOnOff}>{obj}</p></Link>

          ))
        }
      </div>
      </div>
      
      <main onClick={burgerOff}> 

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
