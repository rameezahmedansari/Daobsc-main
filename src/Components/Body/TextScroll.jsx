import React from 'react';
import Marquee from "react-fast-marquee";

const TextScroll = (props) => {
  return (
    <Marquee gradient={false} style={{
        width: "99vw",
        height: 48,
        background:  props.color,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginLeft:-47,
        marginTop:-20,
        marginBottom:20
    }}>
        
        <div className="Mimg">
            <div className=''>Presale Phase 1 start soon on 30th of October 2022.</div>
        </div>
        
        
        <div className="Mimg">
            <div className=''>Presale Phase 1 start soon on 30th of October 2022.</div>
        </div>
        
        
        <div className="Mimg">
            <div className=''>Presale Phase 1 start soon on 30th of October 2022.</div>
        </div>
        
        
    </Marquee>
  )
}

export default TextScroll
