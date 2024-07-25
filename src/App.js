import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/textform';
import { useState } from'react';
import Alert from './Components/alert';
import { useEffect } from 'react';
import AboutUs from './Components/about-us';
import Home from './Components/home';

import {
  createBrowserRouter,RouterProvider
} from "react-router-dom";




function App() {

              const [theme, setTheme] = useState({
                color: "black",
                background: "white"
              });
              const [btnText, setBtnText] = useState("LightMode");
              const [modeText, setModeText] = useState(null);
              const settingAlertMsg = (message,type)=>{
             setModeText ({
                message:message,
                type:type,
             }
             )
            };
              const handleDarkMode = () => {
          
                if (theme.color === "black") {
                  setTheme({
                    color: "white",
                    background: "black",
                  });
                  settingAlertMsg("Dark Mode is enabled","warning");
                    document.body.style.backgroundColor = "black"
                  setBtnText("LightMode");
                } else {
                  setTheme({
                  color:"black",
                  background: "white",
                  });
                  settingAlertMsg("Light Mode is enabled","success");
                  document.body.style.background = "white"
                  setBtnText("DarkMode");

                }

  };
  useEffect(() => {
    if (modeText) {
      const timer = setTimeout(() => {
        setModeText(null);
      }, 1500);

      return () => clearTimeout(timer); // Cleanup timer on component unmount
    }
  }, [modeText]);

  const router = createBrowserRouter([
    {
      path: "/about-us",
      element:(
      <><Navbar mode = {theme} websiteName= "Text Analyzer" /> 
      <AboutUs /></>
      ),
    },
    {
      path: "/",
      element: (
      <><Navbar mode = {theme} websiteName= "Text Analyzer" /> 
      <Home /></>
      ),
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router = {router}/>
      {/* <Home mode = {theme} websiteName= "Text Analyzer"/> */}
      <Alert  modeText = {modeText}/>
      <TextForm heading ="Enter your text to analyze" mode = {theme} btext = {btnText} hDarkMode = {handleDarkMode} setalertmsg = {settingAlertMsg}/>

    </div>
  );
}

export default App;
