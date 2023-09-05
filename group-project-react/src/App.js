import React from "react";

import MakeUpList from "./MakeUpList";
import Navbar from "./Navbar";
import Products from "./Products";
import Home from "./Home";
import Brands from "./Brands";
import Reviews from "./Reviews";

function App() {
let Component
switch (window.location.pathname) {
  case "/":
    Component = <App/>
    break
    case "/home":
      Component = <Home/>
      break 
      case "/products":
        Component = <Products/>
        break 
        case "/brands":
          Component = <Brands/>
          break 
          case "/reviews":
            Component = <Reviews/>
            break


}



  return (

    
    <div className="App">
        <Navbar/>
{Component}
      <header className="App-header">
        <img src="" className="" alt="" />
        <p>
         FaceCake
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        
        </a>
      </header>
<MakeUpList/>
      
    </div>
  );
}

export default App;
