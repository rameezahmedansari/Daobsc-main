// importing images from assets
import logo from "../Assets/BSCDAO 2.svg";
import start from "../Assets/stars.svg";
import inn from "../Assets/inn.png";
import twitter from "../Assets/twitter.png";
import yt from "../Assets/yt.png";
import yt2 from "../Assets/yt2.png";
import fb from "../Assets/fb.png";
import git from "../Assets/git.png";
import dis from "../Assets/dis.png";
import med from "../Assets/med.png";
import ig from "../Assets/ig.png";
import ig2 from "../Assets/ig2.png";
import frame from "../Assets/Subtract.svg";
import arrow from "../Assets/arrow.svg";
import bloom from "../Assets/Bloomberg.svg";
import blooml from "../Assets/Blool.svg";
import yahoo from "../Assets/Yahoo.svg";
import yahool from "../Assets/Yahool.svg";
import Bl from "../Assets/Bl.svg";
import benz from "../Assets/benzinga.svg";
import about from "../Assets/about.svg";
import uidesign from "../Assets/UI DESIGN.svg";
import rectangle from "../Assets/Rectangle.svg";
import rectangletop from "../Assets/rectangle_top.svg";
import rectangledown from "../Assets/rectangle_down.svg";
import how_it_work from "../Assets/how its works.svg";
import video from "../Assets/video_container.svg";
import golden_earth from "../Assets/golden-earth.svg";
import infra from "../Assets/infra.svg";
import feature1 from "../Assets/feature_img_1.svg";
import feature2 from "../Assets/feature_img_2.svg";
import feature3 from "../Assets/feature_img_3.svg";
import product_dark_img1 from "../Assets/product_dark_img1.svg";
import product_dark_img2 from "../Assets/product_dark_img2.svg";
import product_dark_img3 from "../Assets/product_dark_img3.svg";
import product_dark_img4 from "../Assets/product_dark_img4.svg";
import product_dark_img5 from "../Assets/product_dark_img5.svg";
import product_light_img1 from "../Assets/product_light_img1.png";
import product_light_img2 from "../Assets/product_light_img2.png";
import product_light_img3 from "../Assets/product_light_img3.png";
import product_light_img4 from "../Assets/product_light_img4.png";
import product_light_img5 from "../Assets/product_light_img5.png";
import protocal_img from "../Assets/protocal_img.svg";
import tokenomics from "../Assets/tokenomics.svg";
import token_img1 from "../Assets/token_img1.svg";
import token_img2 from "../Assets/token_img2.svg";
import token_img3 from "../Assets/token_img3.svg";
import token_img4 from "../Assets/token_img4.svg";
import roadmap1 from "../Assets/roadmap1.svg";
import PAI from "../Assets/Partners.svg";
import P1 from "../Assets/P1.png";
import P2 from "../Assets/P2.png";
import P3 from "../Assets/P3.png";
import P4 from "../Assets/P4.png";
import P5 from "../Assets/P5.png";
import P6 from "../Assets/P6.png";
import P7 from "../Assets/P7.png";
import P8 from "../Assets/P8.png";
import GuidedBy from "../Assets/GuidedBy.png";
import SecuredBy from "../Assets/SecuredBy.png";
import JoinBg from "../Assets/Join.svg";
import tw from "../Assets/tw.png";
import dis2 from "../Assets/dis2.png";
import tel2 from "../Assets/tel2.png";
import Union from "../Assets/Union.svg";
import Subtract2 from "../Assets/Subtract2.svg";
import ma from "../Assets/ma.png";
import PIL from "../Assets/PIL.png";
import Timg1 from "../Assets/Timg1.png";
import Timg2 from "../Assets/Timg2.png";
import Timg3 from "../Assets/Timg3.png";
import Timg4 from "../Assets/Timg4.png";
import Rimg from "../Assets/Rimg.png";
import Gbl from "../Assets/Gbl.png";
import Sbl from "../Assets/Sbl.png";

import "./Frame10.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ScrollingCarousal from "./ScrollingCarousal";
import FeaturedScroll from "./FeaturedScroll";
import TextScroll from "./TextScroll";
import AboutScroll from "./AboutScroll";

function Frame10() {
  const [darkMode, setDarkMode] = useState(true);
  let navigate = useNavigate();
  return (
    <>
      <div className={darkMode ? "dark-mode frame10" : "light-mode frame10"}>
        <TextScroll color={darkMode ? "#000000" : "#767676"} />
        {/* navigation container */}
        <navigator className="navigation_container">
          <div className={`logo_container {darkMode?"dark":"light"}`}>
            <div className="image_container">
              <img src={logo} alt="" />
            </div>

            <span>BSCDAO</span>
          </div>

          <div className="navlink_container">
            <ul className="navlinks">
              <li className="navlink">ABOUT</li>
              <li className="navlink">PRODUCTS</li>
              <li className="navlink">tokenomics</li>
              <li className="navlink">Roadmaps</li>
              <li className="navlink">whitepaper</li>
              <li className="navlink">social</li>
              <li className="navlink">how to buy</li>
            </ul>
          </div>

          <div className="frame_btn_container">
            <button
              type="submit"
              className="connect_btn connect_btn1 first_btn"
            >
              Daap
            </button>

            <button type="submit" className="connect_btn connect_btn1">
              Connect wallet
            </button>
          </div>
        </navigator>

        {/* banner container  */}

        <div className="banner_container">
          <div className="banner_container1">
            <div className="bsc_inner">
              <div className="banner_img1_con">
                BSCDAO
                <img src={start} alt="starts" className="start" />
              </div>
            </div>

            <div className={`banner_font {darkMode?"dark":"light"}`}>
              World first Daap as a service protocol. Introducing BSCDAO
              protocol redefining Defi with High APY Yeild.
              <span className="banner_circle2"></span>
            </div>
            <span className="banner_circle1"></span>

            <div className="button_btn_container">
              <button
                type="submit"
                className="connect_btn connect_btn1 border_cross"
                onClick={() => {
                  navigate("/body");
                }}
              >
                Presale
              </button>
              <a
                href="https://bscdao.gitbook.io/bscdao-protocol-documentation/"
                className="connect_btn connect_btn1 border_cross"
              >
                Whitepaper
              </a>
            </div>
            <div className={`community_font {darkMode?"dark":"light"}`}>
              Join our community
            </div>

            <div className="banner_links_container">
              <ui className="banner_social_medias">
                <li className="media_icons">
                  <a href="">
                    <img src={inn} alt="" />
                  </a>
                </li>
                <li className="media_icons">
                  <a href="https://twitter.com/BSCDAO0">
                    <img src={twitter} alt="" />
                  </a>
                </li>
                <li className="media_icons">
                  <a href="">
                    <img src={yt} alt="" />
                  </a>
                </li>
                <li className="media_icons">
                  <a href="">
                    <img src={fb} alt="" />
                  </a>
                </li>
                <li className="media_icons">
                  <a href="">
                    <img src={git} alt="" />
                  </a>
                </li>
                <li className="media_icons">
                  <a href="">
                    <img src={dis} alt="" />
                  </a>
                </li>
                <li className="media_icons">
                  <a href="https://medium.com/@BSCDAO">
                    <img src={med} alt="" />
                  </a>
                </li>
                <li className="media_icons">
                  <a href="">
                    <img src={ig} alt="" />
                  </a>
                </li>
              </ui>
            </div>
          </div>

          {/* banner_section part2 */}
          <div className="banner_container2">
            <div className="banner_form_container">
              <div className="form_part_one">
                <div className="form_font">CALCULATE EARNING</div>

                <div className="input_containers">
                  <div className="form_sign">
                    <span className="dollar light">$</span>
                  </div>
                  <div className="line_form"></div>
                  <input type="number" name="" id="" className="form_input" />
                </div>

                <div className="form_count">
                  <spam className="light">Add: </spam> <span>+100</span>{" "}
                  <span>+1000</span> <span>+10000</span>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div
                  style={{ flex: 1, height: "1px", backgroundColor: "#8F8F8F" }}
                />
                <div
                  style={{ flex: 1, height: "1px", backgroundColor: "#8F8F8F" }}
                />
              </div>
              <div className="form_part_one">
                <div className="text2 light">ESTIMATED EARNINGS</div>
              </div>
              <div className="form_bgm_img">
                <div>
                  <div className="form_amount light">$0.00</div>
                  <div className="year">per month</div>
                </div>
                <div>
                  <div className="form_amount light">$0</div>
                  <div className="year">per year</div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div
                  style={{ flex: 1, height: "1px", backgroundColor: "#8F8F8F" }}
                />
                <div
                  style={{ flex: 1, height: "1px", backgroundColor: "#8F8F8F" }}
                />
              </div>

              <div className="form_part_one">
                <div className="part3">Estimated with BSCDAO-BNB pool.</div>
                <div className="part3">Current apy is: 10211%</div>

                <button
                  type="submit"
                  className="connect_btn connect_btn1 form_submit "
                >
                  GET STARTED
                </button>
              </div>
            </div>

            <div className="backend_frame">
              <img src={frame} alt="" />
              <div className="backend_frame_container">
                <div className="bottom_container">
                  <div className={darkMode ? "light bc_one" : "dark bc_one"}>
                    bscdao presale
                  </div>
                  <div className={darkMode ? "light bc_two" : "dark bc_two"}>
                    Current
                  </div>
                  <div className="bc_three">
                    0.175 ETH <span>$1453.65 Usd</span>
                  </div>
                </div>

                <div className="btn_backend_frame">
                  <button
                    className="btn_f_1"
                    onClick={() => {
                      navigate("/body");
                    }}
                  >
                    Presale
                  </button>
                  <div className="white_2">
                    <img src={arrow} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="Toggle_container main_frame_toggle">
              <div className="switch-container">
                <label className="switch">
                  <input
                    type="checkbox"
                    onChange={() => setDarkMode(!darkMode)}
                  />
                  <span className="slider round" />
                </label>
                <label className="switch-label">{darkMode ? "" : ""}</label>
              </div>
            </div>
          </div>
        </div>

        {/* features sections */}

        <section className="features_container">
          <div className="features_heading">
            <div
              style={{
                background: darkMode ? "#0D141A" : "#C0D5F7",
                border: "5px solid #F424F9",
                borderRadius: 200,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                maxWidth: "100%",
                minWidth: "100%",
                minHeight: 80,
                maxHeight: 50,
                marginTop: 40,
                // marginBottom: 20
              }}
            >
              <p
                style={{
                  fontfamily: "Inter",
                  fontWeight: 500,
                  fontSize: 50,
                  color: darkMode ? "#fff" : "#3D3D3D",
                  textAlign: "center",
                }}
              >
                Features in
              </p>
            </div>
          </div>
          <FeaturedScroll bg={darkMode ? "#8AB9EB" : "#A4A4A4"} />
          <div className="feactures_offered">
            <div
              className={darkMode ? "df features_values" : "lf features_values"}
            >
              <div className="feature_img">
                <img src={darkMode ? bloom : blooml} alt="" />
              </div>
              <div className="feature_text">
                “BSCDAO is a platform that helps you convert tokens, be a
                liquidity provider and earn yield In High APY.”
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    height: ".5px",
                    backgroundColor: "#8F8F8F",
                  }}
                />
                <span className="btw_container">Bloomberg</span>
                <div
                  style={{
                    flex: 1,
                    height: ".5px",
                    backgroundColor: "#8F8F8F",
                  }}
                />
              </div>

              <div className="feature_link">
                <a href="" className={darkMode ? "light" : "dark"}>
                  Learn More
                </a>
              </div>
            </div>

            <div
              className={darkMode ? "df features_values" : "lf features_values"}
            >
              <div className="feature_img">
                <img src={darkMode ? yahoo : yahool} alt="" />
              </div>
              <div className="feature_text">
                “By providing liquidity, also known as staking, you earn yield
                by collecting fees and getting minted Bscdao as a reward.”
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    height: ".5px",
                    backgroundColor: "#8F8F8F",
                  }}
                />
                <span className="btw_container">Yahoo finance</span>
                <div
                  style={{
                    flex: 1,
                    height: ".5px",
                    backgroundColor: "#8F8F8F",
                  }}
                />
              </div>

              <div className="feature_link">
                <a href="" className={darkMode ? "light" : "dark"}>
                  Learn More
                </a>
              </div>
            </div>

            <div
              className={darkMode ? "df features_values" : "lf features_values"}
            >
              <div className="feature_img">
                <img src={darkMode ? benz : Bl} alt="" />
              </div>
              <div className="feature_text">
                “Bsc Dao Protocol Finance makes it easy to buy/sell crypto,
                invest and earn revenue directly on the blockchain.”
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    height: ".5px",
                    backgroundColor: "#8F8F8F",
                  }}
                />
                <span className="btw_container">Benzinga</span>
                <div
                  style={{
                    flex: 1,
                    height: ".5px",
                    backgroundColor: "#8F8F8F",
                  }}
                />
              </div>

              <div className="feature_link">
                <a href="" className={darkMode ? "light" : "dark"}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* about section */}

        <section className="about_section">
          <div className="about_image">
            <img src={about} alt="" />
          </div>

          <div className="about_image_container">
            <div>
              <div className="ui_design_img">
                <img src={uidesign} alt="" />
              </div>
              <div className="ui_backend_image">
                <img src={rectangle} alt="" />
              </div>
            </div>

            <div className="ui_design_contant">
              <div className="border_rectangle">
                <img src={rectangletop} alt="" />
                <div
                  className={
                    darkMode ? "rect_top_one light" : "dark rect_top_one"
                  }
                >
                  BSCDAO is a decentralized autonomous organization, that
                  Develops, Governs, and Grows Defi products with high apy
                  yeild.
                  <div
                    className={
                      darkMode ? "light rect_top_small" : "dark rect_top_small"
                    }
                  >
                    BSCDAO does not run its own Frontend. To interact with the
                    protocol, users may consider connecting to any front end
                    hosted by members of the BSCDAO community
                  </div>
                </div>
              </div>

              <div className="border_rectangle">
                <img src={rectangledown} alt="" />

                <div
                  className={
                    darkMode ? "rect_top_one light" : "dark rect_top_one"
                  }
                >
                  Seamless ON BINANCE SMART CHAIN, Automated Liquidity Mining,
                  DAO Treasury
                  <div
                    className={
                      darkMode ? "light rect_top_small" : "dark rect_top_small"
                    }
                  >
                    Bscdao is a blockchain-based decentralized financial centre
                    that provides optimal liquidity solutions for different
                    digital asset categories by adaptive bonding curve. It not
                    only provides a user-centred decentralized exchange but also
                    it is an aggregated liquidity pool that supports order smart
                    routing.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AboutScroll />
        {/* how its works section */}

        <section className="how_its_work_section">
          <div className="about_image">
            <img src={how_it_work} alt="" />
          </div>
          <div className="video_container">
            <img src={video} alt="" />
          </div>
        </section>

        {/* powerful yield section */}
        <section className="yield_section">
          <div className="features_heading">
            <div
              style={{
                background: darkMode ? "#0D141A" : "#C0D5F7",
                border: "5px solid #F424F9",
                borderRadius: 200,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                maxWidth: "100%",
                minWidth: "100%",
                minHeight: 80,
                maxHeight: 50,
                marginTop: 40,
              }}
            >
              <p
                style={{
                  fontfamily: "Inter",
                  fontWeight: 500,
                  fontSize: 40,
                  color: darkMode ? "#fff" : "#3D3D3D",
                  lineHeight: "61px",
                  textAlign: "center",
                }}
              >
                THE MOST POWERFUL YIELD GENERATION Protocol IN DEFI
              </p>
            </div>
          </div>

          <div className="yield_container">
            <div className="border_rectangle yield_first">
              <img src={rectangledown} alt="" />

              <div
                className={
                  darkMode
                    ? "light rect_top_one rect_top_one_y"
                    : "rect_top_one rect_top_one_y dark"
                }
              >
                Our mission is to bring together all the best yield sources in
                Defi into one tool. To not only provide a unified interface but
                also to automate, verify and maximize your yield generation. To
                let you earn more and be safer than you could ever do.
              </div>
            </div>
            <div className="yield_fields2">
              <img src={golden_earth} alt="" />
            </div>
          </div>
        </section>

        {/* infrastructure section logic copied from yield section */}

        <section className="yield_section">
          <div className="features_heading">
            <div
              style={{
                background: darkMode ? "#0D141A" : "#C0D5F7",
                border: "5px solid #F424F9",
                borderRadius: 200,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                maxWidth: "100%",
                minWidth: "100%",
                minHeight: 80,
                maxHeight: 50,
                marginTop: 40,
              }}
            >
              <p
                style={{
                  fontfamily: "Inter",
                  fontWeight: 500,

                  fontSize: 50,
                  color: darkMode ? "#fff" : "#3D3D3D",
                  textAlign: "center",
                }}
              >
                ZK ROLL UP Infrastructure
              </p>
            </div>
          </div>
          <div
            className={
              darkMode ? "infra_text_one light" : "infra_text_one dark"
            }
          >
            Investing in the foundation of L1 ecosystem and promising new L2
            solutions.
          </div>

          <div className={darkMode ? "infra_text_two" : "infra_text_two gray"}>
            Welcome to the omnichannel future
          </div>
          <div className="yield_container">
            <div className="yield_fields2 ">
              <img src={infra} alt="" />
            </div>
            <div className="border_rectangle yield_first infra_second">
              <img src={rectangledown} alt="" />

              <div
                className={
                  darkMode
                    ? "rect_top_one rect_top_one_y"
                    : "rect_top_one rect_top_one_y dark"
                }
              >
                BSCDAO is a fully composable liquidity transport protocol that
                lives at the heart of Omnichain DeFi
                <div
                  className={
                    darkMode
                      ? "rect_top_small rect_top_small_infra"
                      : "rect_top_small rect_top_small_infra gray"
                  }
                >
                  With BSCDAO PROTOCOL, users & dApps can transfer native assets
                  ON BSC CHAIN while accessing the protocol’s unified liquidity
                  pools with instantly guaranteed finality. The universe is
                  infinite with bscdao.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features section */}

        <section className="featured_section">
          <div className="features_heading">
            <div
              style={{
                background: darkMode ? "#0D141A" : "#C0D5F7",
                border: "5px solid #F424F9",
                borderRadius: 200,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                maxWidth: "100%",
                minWidth: "100%",
                minHeight: 80,
                maxHeight: 50,
                marginTop: 40,
              }}
            >
              <p
                style={{
                  fontfamily: "Inter",
                  fontWeight: 500,
                  fontSize: 50,
                  color: darkMode ? "#fff" : "#3D3D3D",
                  textAlign: "center",
                }}
              >
                Features
              </p>
            </div>
          </div>
          <div className={darkMode ? "infra_text_one" : "infra_text_one dark"}>
            DeFi made fast, seamless, and easy
          </div>

          <div className={darkMode ? "infra_text_two" : "infra_text_two gray"}>
            High transaction throughput. Ultra low fees. Low latency. Capital
            efficiency. made for builders
          </div>

          <div className="feactures_offered feactures_offered_two">
            <div
              className={
                darkMode
                  ? "df features_values features_values_two"
                  : "lf features_values features_values_two"
              }
            >
              <div className="feature_img_one">
                <img src={feature1} alt="" />
              </div>
              <h4>GENERATE LIQUIDITY</h4>
              <div
                className={
                  darkMode
                    ? "feature_text feature_text_dark"
                    : "feature_text feature_text_dark gray"
                }
              >
                DAO’s and their token holders deposit only their token into a
                Token DEFI to create market liquidity with protection against
                impermanent loss.
              </div>
            </div>

            <div
              className={
                darkMode
                  ? "df features_values features_values_two"
                  : "lf features_values features_values_two"
              }
            >
              <div className="feature_img_one">
                <img src={feature2} alt="" />
              </div>
              <h4>CONTROL LIQUIDITY</h4>
              <div
                className={
                  darkMode
                    ? "feature_text feature_text_dark"
                    : "feature_text feature_text_dark gray"
                }
              >
                okens in Token Reactors are paired with assets from Pair DEFI
                (e.g. ETH) and deployed to DEXs based on the votes of Liquidity
                Directors.
              </div>
            </div>

            <div
              className={
                darkMode
                  ? "df features_values features_values_two"
                  : "lf features_values features_values_two"
              }
            >
              <div className="feature_img_one ">
                <img src={feature3} alt="" />
              </div>
              <h4>EARN YIELD</h4>
              <div
                className={
                  darkMode
                    ? "feature_text feature_text_dark"
                    : "feature_text feature_text_dark gray"
                }
              >
                Liquidity Providers and Liquidity Directors earn rewards for
                depositing assets into DEFI or voting TOKE to direct liquidity.
              </div>
            </div>
          </div>
        </section>

        {/* Products section */}

        <section className="production_section">
          <div className="features_heading">
            <div
              style={{
                background: darkMode ? "#0D141A" : "#C0D5F7",
                border: "5px solid #F424F9",
                borderRadius: 200,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                maxWidth: "100%",
                minWidth: "100%",
                minHeight: 80,
                maxHeight: 50,
                marginTop: 40,
              }}
            >
              <p
                style={{
                  fontfamily: "Inter",
                  fontWeight: 500,
                  fontSize: 60,
                  color: darkMode ? "#fff" : "#3D3D3D",
                  textAlign: "center",
                }}
              >
                Products
              </p>
            </div>
          </div>

          <div className="product_img_container">
            <div className="product_part">
              <div className="product_img">
                <img
                  src={darkMode ? product_dark_img1 : product_light_img1}
                  alt=""
                />
              </div>
            </div>
            <div className="product_part">
              <div className="product_img">
                <img
                  src={darkMode ? product_dark_img2 : product_light_img2}
                  alt=""
                />
              </div>
            </div>
            <div className="product_part">
              <div className="product_img">
                <img
                  src={darkMode ? product_dark_img3 : product_light_img3}
                  alt=""
                />
              </div>
            </div>
            <div className="product_part">
              <div className="product_img">
                <img
                  src={darkMode ? product_dark_img4 : product_light_img4}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="product_container_two">
            <div className="product_img product_img_two">
              <img
                src={darkMode ? product_dark_img5 : product_light_img5}
                alt=""
              />
              <img
                src={darkMode ? product_dark_img5 : product_light_img5}
                alt=""
              />
            </div>
          </div>
        </section>

        {/* Protocal section */}

        <section className="protocal_section">
          <div className="features_heading">
            <div
              style={{
                background: darkMode ? "#0D141A" : "#C0D5F7",
                border: "5px solid #F424F9",
                borderRadius: 200,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                maxWidth: "100%",
                minWidth: "100%",
                minHeight: 80,
                maxHeight: 50,
                marginTop: 40,
              }}
            >
              <p
                style={{
                  fontfamily: "Inter",
                  fontWeight: 500,
                  fontSize: 60,
                  color: darkMode ? "#fff" : "#3D3D3D",
                  textAlign: "center",
                }}
              >
                Protocal Integration
              </p>
            </div>
          </div>

          <div className="protocal_img_container">
            <img src={darkMode ? protocal_img : PIL} alt="" />
          </div>
        </section>

        {/* section tokenomics section */}

        <section className="token_section">
          <div className="about_image">
            <img src={tokenomics} alt="" />
          </div>
          <div className="token_images">
            <div className="token_img_container">
              <img src={darkMode ? token_img1 : Timg1} alt="" />
            </div>
            <div className="token_img_container">
              <img src={darkMode ? token_img2 : Timg2} alt="" />
            </div>
            <div className="token_img_container">
              <img src={darkMode ? token_img3 : Timg3} alt="" />
            </div>
          </div>
          <div className="token_image_two">
            <img src={darkMode ? token_img4 : Timg4} alt="" />
          </div>
          <div className="token_inputs_container">
            <div className="token_inputs_one">
              <input type="text" name="" id="" className="token_inputs_one1" />
            </div>
            <div className="token_inputs_one"></div>
          </div>
        </section>

        {/* roadmap section */}

        <section className="roadmap_section">
          <div className="features_heading">
            <div
              style={{
                background: darkMode ? "#0D141A" : "#C0D5F7",
                border: "5px solid #F424F9",
                borderRadius: 200,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                maxWidth: "100%",
                minWidth: "100%",
                minHeight: 80,
                maxHeight: 50,
                marginTop: 40,
              }}
            >
              <p
                style={{
                  fontfamily: "Inter",
                  fontWeight: 500,
                  fontSize: 60,
                  color: darkMode ? "#fff" : "#3D3D3D",
                  textAlign: "center",
                }}
              >
                Roadmap
              </p>
            </div>
          </div>
          <div className="roadmap_image_container">
            <img src={darkMode ? roadmap1 : Rimg} alt="" />
          </div>
        </section>

        {/* powered by section */}

        <section className="powered_section">
          <div className="features_heading">
            <div
              style={{
                background: darkMode ? "#0D141A" : "#C0D5F7",
                border: "5px solid #F424F9",
                borderRadius: 200,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                maxWidth: "100%",
                minWidth: "100%",
                minHeight: 80,
                maxHeight: 50,
                marginTop: 40,
                marginBottom: 40,
              }}
            >
              <p
                style={{
                  fontfamily: "Inter",
                  fontWeight: 500,
                  fontSize: "60px",
                  color: darkMode ? "#fff" : "#3D3D3D",
                  textAlign: "center",
                }}
              >
                Powered By
              </p>
            </div>
          </div>
          <ScrollingCarousal darkMode={darkMode ? true : false} />
        </section>

        {/* Partners and Integrations */}
        <section
          style={{
            marginTop: 40,
          }}
        >
          <div className="about_image">
            <img src={PAI} alt="" width={1700} />
          </div>
          <div
            className="partners_images_container"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: 40,
            }}
          >
            <a href="https://pancakeswap.finance/">
              <img
                className={darkMode ? "" : "il"}
                src={P1}
                alt=""
                width={150}
              />{" "}
            </a>
            <a href="/">
              <img
                className={darkMode ? "" : "il"}
                src={P2}
                alt=""
                width={150}
              />
            </a>
            <a href="/">
              <img
                className={darkMode ? "" : "il"}
                src={P3}
                alt=""
                width={150}
              />
            </a>
            <a href="/">
              <img
                className={darkMode ? "" : "il"}
                src={P4}
                alt=""
                width={150}
              />
            </a>
            <a href="/">
              <img
                className={darkMode ? "" : "il"}
                src={P5}
                alt=""
                width={150}
              />
            </a>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: 900,
              margin: "0 auto",
              marginTop: 40,
              marginBottom: 40,
            }}
          >
            <a href="/">
              <img
                className={darkMode ? "" : "il"}
                src={P6}
                alt=""
                width={150}
              />
            </a>
            <a href="/">
              <img
                className={darkMode ? "" : "il"}
                src={P7}
                alt=""
                width={150}
              />
            </a>
            <a href="/">
              <img
                className={darkMode ? "" : "il"}
                src={P8}
                alt=""
                width={150}
              />
            </a>
          </div>
          <div
            className="features-bottom-img"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <img src={darkMode ? GuidedBy : Gbl} alt="" width={380} />
            <img src={darkMode ? SecuredBy : Sbl} alt="" width={380} />
          </div>

          <div
            className="join-us-div"
            style={{
              backgroundImage: `url(${JoinBg})`,
              height: 450,
              width: "1350px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginTop: 100,
            }}
          >
            <p
              style={{
                width: 870,
                height: 194,
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: 70,
                textAlign: "center",
                letterSpacing: "0.04em",
                color: "#FFFFFF",
              }}
            >
              Join us to make the world A better place
            </p>
            <p
              className="willing-text"
              style={{
                width: 795,
                height: 58,
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: 24,
                textAlign: "center",
                color: "#FFFFFF",
              }}
            >
              We are willing to listen to the community’s opinions, for the
              purpose of developing useful products for users.
            </p>
            <div
              className="join-us-img-container"
              style={{
                width: 508,
                height: 58,
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: 40,
              }}
            >
              <a href="" style={{ width: 50, height: 50 }}>
                <img src={tw} alt="" width={50} height={50} />
              </a>
              <a href="">
                <img src={dis2} alt="" width={50} />
              </a>
              <a href="">
                <img src={tel2} alt="" width={50} />
              </a>
              <a
                href=""
                style={{
                  width: "274px",
                  height: "58px",
                  color: "#000000",
                  textDecoration: "none",
                  background: "#D9D9D9",
                  borderRadius: 10,
                  textAlign: "center",
                  paddingTop: 17,
                }}
              >
                Join our community
              </a>
            </div>
          </div>
          <div
            className="bscdao-last"
            style={{
              display: "flex",
              width: 1300,
              margin: "0 auto",
              marginTop: 40,
            }}
          >
            <div
              className="bscdao-last-one"
              style={{
                backgroundImage: `url(${Union})`,
                boxSizing: "border-box",
                width: 473.9,
                height: 299.6,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <img src={logo} alt="" />
              <p
                style={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: 49,
                  letterSpacing: "0.06em",
                  marginBottom: 35,
                  marginTop: 10,
                  color: darkMode ? "#3D3D3D" : "#FFFFFF",
                }}
              >
                BSCDAO
              </p>
              <div
                style={{
                  display: "flex",
                  width: 350,
                  height: 50,
                  justifyContent: "space-evenly",
                }}
              >
                <a href="">
                  <img src={tw} alt="" width={50} />
                </a>
                <a href="">
                  <img src={ig2} alt="" width={50} />
                </a>
                <a href="">
                  <img src={yt2} alt="" width={50} />
                </a>
                <a href="">
                  <img src={ma} alt="" width={50} />
                </a>
              </div>
            </div>
            <div
              className="bscdao-last-two"
              style={{
                backgroundImage: `url(${Subtract2})`,
                display: "flex",
                boxSizing: "border-box",
                width: 826,
                height: 299.6,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 20,
                }}
              >
                <a className="ft" href="">
                  Whitepaper
                </a>
                <a className="ft" href="">
                  About us
                </a>
                <a className="ft" href="">
                  Contact us
                </a>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <a className="ft" href="">
                  BSCDAO PROTOCOL
                </a>
                <a className="ft" href="">
                  DAAP
                </a>
                <a className="ft" href="">
                  PRODUCTS
                </a>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <a className="ft" href="">
                  PRESALE
                </a>
                <a className="ft" href="">
                  WHITEPAPPER
                </a>
                <a className="ft" href="">
                  Tokenomics
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          style={{
            marginTop: 40,
          }}
        >
          <p
            style={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: 50,
              textAlign: "center",
              color: darkMode ? "#FFFFFF" : "#3D3D3D",
            }}
          >
            Disclamier
          </p>
          <p
            style={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: 20,
              textAlign: "center",
              color: darkMode ? "#8F8F8F" : "#3D3D3D",
            }}
          >
            Cryptocurrency may be unregulated in your jurisdiction. The value of
            cryptocurrencies may go down as well as up.
          </p>
          <p
            style={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: 20,
              textAlign: "center",
              color: darkMode ? "#8F8F8F" : "#3D3D3D",
            }}
          >
            Profits may be subject to capital gains or other taxes applicable in
            your jurisdiction.
          </p>

          <div
            style={{
              display: "flex",
              marginTop: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{ flex: 1, height: "1px", backgroundColor: "#8F8F8F" }}
            />
            <p
              style={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: 15,
                marginLeft: 5,
                marginRight: 5,
                color: "#8F8F8F",
              }}
            >
              © 2022 - All rights reserved by BCSDAO PROTOCOL.
            </p>
            <div
              style={{ flex: 1, height: "1px", backgroundColor: "#8F8F8F" }}
            />
          </div>
        </footer>
      </div>
    </>
  );
}

export default Frame10;
