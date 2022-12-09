import React from "react";
import bodybox from "../Assets/bodybox.png";

const Box=()=>{
    return(
        <div className="outer_box" style={
          {backgroundImage:url(bodybox)}
        }>
          <div className="text_big">
            <h3>Stage 1 has started!</h3>
            <h1>1 BNB = 20000 BSCDAO</h1>
          </div>
          <div className="inner_box1">
            <h1>bscdao protocol presale</h1>
            <h1>2.1 B<br/>BSCDAO remaining</h1>
            <h1>Until 1 BNB = 35000 BSCDAO</h1>
          </div>
          <div>
            <img src={bodybox} />
          </div>
        </div>
    );
}

export default Box;