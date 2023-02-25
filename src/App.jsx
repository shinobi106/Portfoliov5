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
  

  return (
    <div className="App"><Topbar 
      menuOpen = {menuOpen}
      setmenuOpen = {setmenuOpen}
    />
    <Menu 
      menuOpen = {menuOpen}
      setmenuOpen = {setmenuOpen}
    />
      <div className="sections">
      <Intro />
      <Portfolio />
      <Works />
      <Test />
      <Contact />


      </div>
    </div>
  );
}

export default App;
