import { useState } from "react"
import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/intro"
import Portfolio from "./components/porfolio/portfolio"
import Works from "./components/work/work"
import Test from "./components/testimonials/test"
import Contact from "./components/contact/contact"
import './app.scss'
import Menu from "./components/menu/Menu"

function App() {
 const [menuOpen, setmenuOpen] = useState(false);
 const [darkmode, setdarkmode] = useState(false);
  

  return (
    <div className="App"><Topbar 
      menuOpen = {menuOpen}
      setmenuOpen = {setmenuOpen}
      setdarkmode = {setdarkmode}
      darkmode = {darkmode}
    />
    <Menu 
      menuOpen = {menuOpen}
      setmenuOpen = {setmenuOpen}
      setdarkmode = {setdarkmode}
    />
      <div className="sections">
      <Intro 
         darkmode = {darkmode}
      />
      <Portfolio 
        setdarkmode = {setdarkmode}
      />
      <Works 
         setdarkmode = {setdarkmode}
      />
      <Test 
        setdarkmode = {setdarkmode}
      />
      <Contact 
        setdarkmode = {setdarkmode}
      />


      </div>
    </div>
  );
}

export default App;
