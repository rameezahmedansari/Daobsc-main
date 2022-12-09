import React from 'react';
import '../../Components/scroll.css';
import Marquee from "react-fast-marquee";
import img1 from '../Assets/Business2Community-Logo-1 1.png';
import img2 from '../Assets/Logo@2x-min 1.png';
import img3 from '../Assets/zycryptologo 1.png';
import img4 from '../Assets/crypto-news-logo-full 1.png';
import img5 from '../Assets/Component-55 1.png'
import img6 from '../Assets/LA_Weekly_logo 1.png'
import img7 from '../Assets/AI-logo@300x-300x40-1 1.png'


const scroll = (props) => {
  return (
    <>
            <section>
                <Marquee gradientColor={props.darkMode?[1,6,13]:[255,255,255]} gradientWidth={250}>
                    <div className="Mimg">
                        <img className={props.darkMode?"":"il"} src={img1} alt="" />
                    </div>
                    <div className="Mimg">
                        <div><img className={props.darkMode?"":"il"} src={img2} alt="" /></div>
                    </div>
                    <div className="Mimg">
                    <div><img className={props.darkMode?"":"il"} src={img3} alt="" /></div>
                    </div>
                    <div className="Mimg">
                        <div><img className={props.darkMode?"":"il"} src={img4} alt="" /></div>
                    </div>
                </Marquee>
                <Marquee gradientColor={props.darkMode?[1,6,13]:[255,255,255]} gradientWidth={250} direction="right">
                    <div className="Mimg">
                        <img className={props.darkMode?"":"il"} src={img5} alt="" />
                    </div>
                    <div className="Mimg">
                        <div><img className={props.darkMode?"":"il"} src={img6} alt="" /></div>
                    </div>
                    <div className="Mimg">
                        <div><img className={props.darkMode?"":"il"} src={img7} alt="" /></div>
                    </div>
                </Marquee>
           </section>
        </>
  )
}

export default scroll
