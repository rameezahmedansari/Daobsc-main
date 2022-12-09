import React from "react";
import moon from "../Assets/moon.png"
import { useState } from "react";

const Toggle=()=>
{
  const [darkMode, setDarkMode] = useState(false);
  localStorage.setItem('color',darkMode);
  
  return(

    <div className="oval" style={{}}>
        <div className="imgg">
            {/* <img src={moon}/> */}
            <div className={darkMode ? "dark-mode" : "light-mode"}>
                <div className="switch-container">
                  <label className="switch">
                    <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
                    <span className="slider round" />
                    {/* <span>sdf;</span> */}
                  </label>
                  <label className="switch-label">{darkMode ? "Dark" : ""}</label>
                </div>
                {/* {data && data.length > 0 ? <Pages data={data} /> : <p>Loading...</p>} */}
            </div>
        </div>
    </div>
  );

}

export default Toggle;