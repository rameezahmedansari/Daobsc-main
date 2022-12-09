import React from 'react';
import Marquee from "react-fast-marquee";
import '../../Components/scroll.css'
import img1 from '../Assets/scroll1.png'
import img2 from '../Assets/scroll2.png'
import img3 from '../Assets/scroll3.png'
import img4 from '../Assets/scroll4.png'
// import image from '../Assets/'

function Scroll2(props) {
  return (
    <>
            <section>
                <Marquee gradientColor={props.darkMode?[1,6,13]:[255,255,255]} gradientWidth={400}>
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
           </section>
        </>
  )
}

export default Scroll2
