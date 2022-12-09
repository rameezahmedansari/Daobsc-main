import React from 'react';
import Marquee from "react-fast-marquee";
import img1 from '../Assets/FS1.png';
import img2 from '../Assets/FS2.png';
import img3 from '../Assets/FS3.png';
import img4 from '../Assets/FS4.png';
import img5 from '../Assets/FS5.png';

const FeaturedScroll = (props) => {
    return (
        <div>
            <Marquee gradientColor={[89, 119, 150]} gradientWidth={300} style={{
                width: "99vw",
                height: 120,
                background: props.bg,
                opacity: 0.6,
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                marginLeft:-47,
                marginTop:40
            }}>
                <div className="Mimg">
                    <a href="https://twitter.com/BSCDAO0"><img src={img1} alt="" /></a>
                </div>
                <div className="Mimg">
                    <a href='https://www.bloomberg.com/technology'><img src={img2} alt="" /></a>
                </div>
                <div className="Mimg">
                    <a href='https://www.benzinga.com/'><img src={img3} alt="" /></a>
                </div>
                <div className="Mimg">
                    <a href=''><img src={img4} alt="" /></a>
                </div>
                <div className="Mimg">
                    <a href=''><img src={img5} alt="" /></a>
                </div>
            </Marquee>
        </div>
    )
}

export default FeaturedScroll
