import React from "react";
import logo from "./Assets/logo.png";
import Vector from "./Assets/Vector.png";
import DownIcon from "./Assets/DownIcon.png";
import TreeIcon from "./Assets/TreeIcon.png";

const Head = (props) => {
  return (
    <div
      style={{
        paddingLeft: 10,
        paddingRight: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {
        //---------- left content
      }
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <img src={logo} alt="logo" />

        <p
          className="common-text"
          style={{ marginLeft: 10, fontSize: 29, color: props.darkMode?"#fff":'#000' }}
        >
          BSCDAO
        </p>
      </div>

      {
        //---------- right content
      }
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <div
          className="gradient"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            border: '1px solid #ffff'
          }}
        >
          <img src={TreeIcon} alt="TreeIcon" />
          <p
            style={{
              marginLeft: 10,
            }}
            className="common-text"
          >
            Daap
          </p>
        </div>

        <div
          className="gradient"
          style={{
            marginLeft: 20,
            marginRight: 20,
            border: '1px solid #ffff'
          }}
        >
          Connect wallet
        </div>

        <div
          className="gradient"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            border: '1px solid #ffff'
          }}
        >
          <img src={Vector} alt="Vector" />

          <p
            style={{
              marginLeft: 10,
              marginRight: 10,
            }}
            className="common-text"
          >
            Eng.
          </p>
          <img src={DownIcon} alt="DownIcon" />
        </div>
      </div>

      {/* <div className="nav-list">
              <ul>
                <li>DAAP</li>
                <li>Connect wallet</li>
                <li><select name="language" >
                   <option value="Eng">Eng</option>
                   <option value="EU">EU</option>
                   <option value="US">US</option>
                </select></li>
                
              </ul>
            </div> */}
    </div>
  );
};

export default Head;
