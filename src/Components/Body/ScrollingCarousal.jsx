import Marquee from "react-fast-marquee";
import './ScrollingCarousal.css'
import img1 from '../Assets/dextool 2.png'
import img2 from '../Assets/coinbit 1.png'
import img3 from '../Assets/pancake 1.png'
import img4 from '../Assets/coingecko 1.png'
import img5 from '../Assets/metamask 1.png'
import img6 from '../Assets/coinmarketcap 1.png'
import img7 from '../Assets/interfi 1.png'
import img8 from '../Assets/avedex 1.png'

function ScrollingCarousal(props) {
    return (
        <>
            <section>
                <Marquee gradientColor={props.darkMode?[1,6,13]:[255,255,255]} gradientWidth={500}>
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
                <Marquee gradientColor={props.darkMode?[1,6,13]:[255,255,255]} gradientWidth={500} direction="right">
                    <div className="Mimg">
                        <img className={props.darkMode?"":"il"} src={img5} alt="" />
                    </div>
                    <div className="Mimg">
                        <div><img className={props.darkMode?"":"il"} src={img6} alt="" /></div>
                    </div>
                    <div className="Mimg">
                        <div><img className={props.darkMode?"":"il"} src={img7} alt="" /></div>
                    </div>
                    <div className="Mimg">
                        <div><img className={props.darkMode?"":"il"} src={img8} alt="" /></div>
                    </div>
                </Marquee>
            </section>
        </>
    )
}

export default ScrollingCarousal;