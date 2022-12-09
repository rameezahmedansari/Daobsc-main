import React from 'react';
import Marquee from "react-fast-marquee";
import img1 from '../Assets/AS1.png'
import img2 from '../Assets/AS2.png'

const AboutScroll = () => {
  return (
    <Marquee gradient={false} style={{
        width: "99vw",
        height: 100,
        opacity: 0.3,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginLeft:-47,
        marginTop:40
    }}>
        <div className="Mimg">
            <img src={img1} alt="" />
        </div>
        <div className="Mimg">
            <div className=''><img src={img2} alt="" /></div>
        </div>
        
    </Marquee>
  )
}

export default AboutScroll
