// import React, { useState } from "react";
import bodybox from "../Assets/bodybox.png";
import certiklogo from "../Assets/certiklogo.png";
import Group1 from "../Assets/Group1.png";
import hext from "../Assets/hext.png";
import hext1 from "../Assets/hext1.png";
import hext2 from "../Assets/hext2.png";
import hext3 from "../Assets/hext3.png";
import hext4 from "../Assets/hext4.png";
import hext5 from "../Assets/hext5.png";
import inn from "../Assets/inn.png";
import twitter from "../Assets/twitter.png";
import yt from "../Assets/yt.png";
import fb from "../Assets/fb.png";
import git from "../Assets/git.png";
import dis from "../Assets/dis.png";
import med from "../Assets/med.png";
import ig from "../Assets/ig.png";
import refresh from "../Assets/refresh.png";
import "../Body/Bodyc.css"

// custom components 
import Header from "../Header";
import Scroll from "./scroll";
import Scroll2 from "./Scroll2";
import SliderComponent from "./SlidderComponent";

// inbuild hooks
import { useState } from "react";

const Bodyc = () => {
  const [darkMode, setDarkMode] = useState(true);

  // slider handling variables
  const [value, setValue] = useState(2000);

  //  slider handling condition
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    < >
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <Header darkMode={darkMode?true:false}/>
        <div
        style={{
          marginTop: 60,
          width: "100%",
        }}
        
      >
        <div
          // className="gradient-view"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            position:"relative",
            background: "linear-gradient(180deg, #1C426F -17.05%, rgba(50, 103, 165, 0) 115.69%)",
            // opacity: "0.4",
            borderRadius: "30px",
            border:"1px solid #1C426F"
            // backgroundImage:url('')
          }}
        >
          {
            //---------- left section
          }
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "4%",
            }}
          >
            <p
              className="common-text"
              style={{
                lineHeight: "85px",
                fontWeight: "900",
                fontSize: 70,
                fontStyle: "italic",
                textAlign: "center",
                zIndex:10
              }}
            >
              Stage 1 has started!
            </p>
            <p
              className="common-text"
              style={{
                fontSize: 40,
                color: "#A4A4A4",
                marginTo: 30,
                marginBottom: 60,
                textAlign: "center",
              }}
            >
              1 BNB = 20000 BSCDAO
            </p>

            <div
              style={{
                border:'2px solid linear-gradient( #1C426F 100%, #3267A5 133.31%)',
                background:
                  "linear-gradient( #751B76 -9.54%, rgba(117, 27, 118, 0) 133.31%)",
                opacity: 1,
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                padding:"10px"
              }}
            >
              <p
                style={{
                  fontSize: "30px",
                }}
                className="common-text"
              >
                bscdao protocol presale
              </p>
              <p
                style={{
                  fontSize: "30px",
                  color: darkMode?"#E64DE8":"#FFF",
                }}
                className="common-text"
              >
                2.1 B
              </p>
              <p
                style={{
                  fontSize: 30,
                  color: darkMode?"#E64DE8":"#FFF",
                }}
                className="common-text"
              >
                BSCDAO remaining
              </p>
              <p
                style={{
                  fontSize: 24,
                  color: darkMode?"#A4A4A4":"#DCDCDC",
                }}
                className="common-text"
              >
                Until 1 BNB = 35000 BSCDAO
              </p>
            </div>
          </div>

          {
            //---------- right section
          }
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "50%",
            }}
          >
            <div
              style={{
                width: "80%",
              }}
            >
              <img
                style={{
                  width: "100%",
                }}
                src={bodybox}
                alt="logo"
              />
            </div>
            <div
              style={{
                width: "20%",
              }}
            >
              {/* <p>ADD SLIDER</p>
              <div>
                
              </div> */}
            </div>
          
          </div>
          <div className='Toggle_container'>
                <div className="switch-container">
                  <label className="switch">
                    <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
                    <span className="slider round" />
                    {/* <span>sdf;</span> */}
                  </label>
                  <label className="switch-label">{darkMode ? "" : ""}</label>
                </div>
          </div>
        </div>
      </div>

      {
        //-------- section 2  start
      }

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "start",
          justifyContent: "space-between",
          
          marginTop: 100,
        }}
      >
        {
          //-------- left
        }
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            width: "50%",
          }}
        >
          <p
            className="common-text"
            style={{
              width: "100%",
              fontFamily: "Inter",
              fontweight: 700,
              fontSize: "32px",
              lineheight: 51,
            }}
          >
            Get in early on the BSCDAO Presale
          </p>

          <p
            style={{
              fontfamily: "Inter",
              fontweight: 400,
              fontSize: "16px",
              lineheight: 31,
              marginTop:"40px"
            }}
          >
            BSCDAO PROTOCOL will manage liquidity across BINANCE SMART chains in
            order to increase capital efficiency and automatically provide its
            users with the highest possible yield on the assets they wish to
            deploy to liquidity pools. We hope that our products will not only
            help our users but that they will also provide a valuable service to
            the cryptocurrency ecosystems as a whole.
          </p>
          <p
            style={{
              width: "100%",
              fontFamily: "Inter",
              fontweight: 700,
              fontSize:"30px",
              lineheight: 51,
              marginTop:"38px",
              // display:"none"
            }}
          >
            WELCOME TO BSCDAO PROTOCOL PRESALE
          </p>
          <p
            style={{
              fontfamily: "Inter",
              fontweight: 400,
              fontsize: 26,
              lineheight: 31,
              marginTop:"40px"
            }}
          >
            You can buy directly using your card, or can use USDT or BNB already
            in your wallet. After the public presale ends, you'll be able to
            claim your purchased BSCDAO using the claim page.
          </p>

          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop:"40px"
            }}
          >
            <div
              style={{
                background: 'linear-gradient(178.39deg, rgb(146, 32, 126) -17.33%, rgb(34, 42, 111) 108.94%)',
                border: '1px solid rgb(196, 196, 196)',
                borderRadius: 8,
                marginRight: 15,
                minWidth: '20%',
                maxWidth: '25%',
                padding: 10,
              }}
            >
              <p
                style={{
                  padding: 0,
                  margin: 0,
                  textAlign: "center",
                  color: "#fff",
                }}
              >
                Home
              </p>
            </div>

            <div
              style={{
                background: 'linear-gradient(178.39deg, rgb(146, 32, 126) -17.33%, rgb(34, 42, 111) 108.94%)',
                border: '1px solid rgb(196, 196, 196)',
                borderRadius: 8,
                marginRight: 15,
                minWidth: '20%',
                maxWidth: '25%',
                padding: 10,
              }}
            >
              <p
                style={{
                  padding: 0,
                  margin: 0,
                  textAlign: "center",
                  color: "#fff",
                }}
              >
                Whitepaper
              </p>
            </div>
            <div
              style={{
                background: 'linear-gradient(178.39deg, rgb(146, 32, 126) -17.33%, rgb(34, 42, 111) 108.94%)',
                border: '1px solid rgb(196, 196, 196)',
                borderRadius: 8,
                marginRight: 15,
                minWidth: '20%',
                // maxWidth: '25%',
                padding: 10,
              }}
            >
              <p
                style={{
                  padding: 0,
                  margin: 0,
                  textAlign: "center",
                  color: "#fff",
                }}
              >
                Presale contract
              </p>
            </div>
            <div
              style={{
                background: 'linear-gradient(178.39deg, rgb(146, 32, 126) -17.33%, rgb(34, 42, 111) 108.94%)',
                border: '1px solid rgb(196, 196, 196)',
                borderRadius: 8,
                // marginRight: 15,
                minWidth: '20%',
                // maxWidth: '25%',
                padding: 10,
              }}
            >
              <div
              style={{
                height: 21,
                width: 112,
              }}
              >

              <img
                src={certiklogo}
                style={{
                  height:'100%',
                  width:'100%'
                }}
                />
                </div>
            </div>
          </div>

          <div style={{ width: "100%", marginTop: "30px" }}>
            <img
              src={Group1}
              style={{
                width: "80%",
              }}
            />
          </div>

          <div className="slider_container">

          {/* <h2>{value}</h2> */}
          
          <div className="range values">BNB Raised :  {value} BNB / 10000BNB</div>
              <SliderComponent
                value={value}
                handleChange={handleChange}
                min={0}
                max={10000}
                step={1}
              /> 
          
         
          </div>
          

          

        </div>

        {
          //-------- right
        }
        <div
          style={{
            display: "flex",
            // alignItems : "center",
            // justifyContent : "center",
            width: "40%",
            flexDirection: "column",
            background: "linear-gradient(155.32deg, #1B4F75 8.33%, rgba(103, 181, 237, 0) 102.43%)",
            // opacity: 5,
            border: "2px solid #FFFFFF",
            borderRadius: 20,
            color:"white"
          }}
        >
          <div className="pres_container">
            <div className="time_box">
              <h1>0</h1>
              <div>Days</div>
            </div>
            <div className="time_box">
              <h1>0</h1>
              <div>Hours</div>
            </div>
            <div className="time_box">
              <h1>0</h1>
              <div>Mintues</div>
            </div>
            <div className="time_box">
              <h1>0</h1>
              <div>Seconds</div>
            </div>
          </div>
          {
            //--------------line
          }
          <div
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}
      >
        <div style={{flex: 1, height: '1px', backgroundColor: '#8F8F8F'}} />
          <span style={{width: "8px",
                        height: "8px",
                        background: "#968A9E",
                        borderRadius: "4px"
        }}></span>
        <div style={{margin : 7}}>
          <p style={{width: "100%", textAlign: 'center', color: "#8F8F8F",margin:'0px'}}>PRE-SALE INFO</p>
        </div>
        <span style={{width: "8px",
                        height: "8px",
                        background: "#968A9E",
                        borderRadius: "4px"
        }}></span>
        <div style={{flex: 1, height: '1px', backgroundColor: '#8F8F8F'}} />

    
      </div>
       {//---------line end
       }
        <div className="pres_container_amount">
          <div className="prosal_cont">
            <div>Token price</div>
            <div style={{
              fontWeight: "500",
              fontSize: "18px",
            }}>1 BNB = 6400 QUINT</div>
          </div>

          <div className="pres_container2"> 
              <div className="amount_box">
                <div>MIN PURCHASE</div>
                <div>0.2 BNB</div>     
              </div>
              <div className="amount_box">
                <div>MAX PURCHASE</div>
                <div>20 BNB</div>     
              </div>
              <div className="amount_box">
                <div>SOFT CAP</div>
                <div>2000 BNB</div>     
              </div>
              <div className="amount_box">
                <div>HARD CAP</div>
                <div>10000 BNB</div>     
              </div>
              
              <input type="text" className={darkMode?"input_amountbox":"input_amountbox light"} placeholder="BNB AMOUNT - "/>
              <input type="text" className={darkMode?"input_amountbox":"input_amountbox light"} placeholder="Token AMOUNT - " />

          </div>

          <div className="btn_container">
            <button type="submit" className="connect_btn">
              Connect Wallet
            </button>
          </div>

          
        </div>
          {/* connect container two */}
          <div className="claim_container">

                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <div style={{flex: 1, height: '1px', backgroundColor: '#8F8F8F'}} />
                    <div style={{flex: 1, height: '1px', backgroundColor: '#8F8F8F'}} />
                </div>

                <div className="pres_container_amount">
                  <div className="prosal_cont">
                    <div style={{
                      fontWeight: "500",
                      fontSize: "22px",
                    }}>0</div>
                    <div >Your investment <span><img src={refresh} alt="" /> </span> </div>
                  </div>

                  <div className="pres_container2"> 
                    <div className="amount_box">
                      <div>MIN PURCHASE</div>
                      <div>0.2 BNB</div>     
                    </div>
                    <div className="amount_box">
                      <div>MAX PURCHASE</div>
                      <div>20 BNB</div>     
                    </div>
                  </div>
                  
                  <div style={{textAlign:"center",marginTop:"10px"}} className={darkMode?'':"dark"}>
                      Your token to claim: <span>0</span>
                  </div>

                  <div className="btn_container">
                      <button type="submit" className="connect_btn">
                        Claim tokens
                      </button>
                  </div>
                </div>

                
          </div>
        
        </div>
      </div>

      {
        //-------- section 2  end
      }
        
      {
        //-------- section 3  start
      }
      <div style={{
        background: darkMode?"#0D141A":"#C0D5F7",
        border: "5px solid #F424F9",
        borderRadius: 200,
        display : "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "100%",
        minWidth: "100%",
        minHeight: 80,
        maxHeight: 50,
        marginTop : 40,
        marginBottom: 20
      }}>
        
          <p style={{
           fontfamily: 'Inter',
           fontWeight: 500,
           fontSize: 50,
           color:darkMode?"#fff":"#3D3D3D",
           }}>Presale Data
           </p>
      </div>

      {
        //-------- section 3  end
      }

      {
        //-------- section 4  start
      }
      
      <div className="container_Presale">
        
        <div className="presale_images">
            <img src={hext} alt="" />
        </div>
        <div className="presale_images">
            <img src={hext1} alt="" />
        </div>
        <div className="presale_images">
            <img src={hext2} alt="" />
        </div>
        <div className="presale_images">
            <img src={hext3} alt="" />
        </div>
        
      </div>

      <div className="container_Presale2">
      <div className="presale_images2">
            <img src={hext4} alt="" />
        </div>
        <div className="presale_images2">
            <img src={hext5} alt="" />
        </div>
        
      </div>
      {
        //-------- section 4  end
      }

{
        //-------- section 5  start
      }
      <div style={{
        background: darkMode?"#0D141A":"#C0D5F7",
        border: "5px solid #F424F9",
        borderRadius: 200,
        display : "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "100%",
        minWidth: "100%",
        minHeight: 80,
        maxHeight: 50,
        marginTop : 40,
        marginBottom: 20
      }}>
        
          <p style={{
           fontfamily: 'Inter',
           fontWeight: 500,
           fontSize: 50,
           color: darkMode?"#fff":"#3D3D3D",
           
           }}>FEATURED IN PUBLICATIONS
           </p>
      </div> 
    

      <Scroll darkMode={darkMode?true:false}/>

      {
        //-------- section 5  end
      }
 
      {
        //-------- section 6  start
      }
      {
        //-------- section 6  end
      }

{
        //-------- section 7  start
      }
      <div style={{
        background: darkMode?"#0D141A":"#C0D5F7",
        border: "5px solid #F424F9",
        borderRadius: 200,
        display : "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "100%",
        minWidth: "100%",
        minHeight: 80,
        maxHeight: 50,
        marginTop : 40,
        marginBottom: 20
      }}>
        
          <p style={{
           fontfamily: 'Inter',
           fontWeight: 500,
           fontSize: 50,
           color: darkMode?"#fff":"#3D3D3D",
          //  margin : 5,
           }}>Powered by
           </p>
      </div>
          
          <Scroll2 darkMode={darkMode?true:false}/>
      {
        //-------- section 7  end
      }

      {
        //-------- section 8  start
      }
      {
        //-------- section 8  end
      }

      {
        //-------- section 9  start
      }
       <div style={{
        display : "flex",
        direction : "column",
        justifyContent :"center",
        alignItem : "center",
        marginTop: 50,
       }}>
        <p  style={{
          fontFamily: 'Inter',
          
          fontWeight: 700,
          fontSize: 100,
          /* identical to box height */
          
          letterSpacing: 0.03,
          margin : 0,
          // color: "#FFFFFF",
        }}>100% SECURE</p>
       </div>

      {
        //-------- section 9  end
      }

      {
        //-------- section 10  start
      }
       
       <div style={{
        display : "flex",
        direction : "column",
        justifyContent :"center",
        alignItem : "center",
        marginTop : 50,
        marginBottom : 15,}}>

          
          <p style={{textAlign : "center",
                     padding : 0,
                     fontfamily: 'Inter',
                     fontWeight: 50,
                     fontSize: 35,  
                       }}><span style={{fontWeight : 800}}>Disclaimer</span><br/>Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may go down as well as up. Profits may be subject to capital gains or other taxes applicable in your jurisdiction.</p>
        
       </div>

      {
         //-------- section 10  end
      }
       
      {
         //-------- section 11  start
      }
        <div style={{
          display : "flex",
          direction : "row",
          justifyContent :"center",
          alignItem : "center",
          marginTop: 35,
          marginBottom: 35,
          width: "100%"
        }}>
          <div style={{
            background: "#5C3FBB",
            borderRadius: 10,
            display : "flex",
          direction : "column",
          justifyContent :"center",
          alignItem : "center",
          marginLeft: 15,
          marginRight: 15
          }}>  
             <img src={inn} style={{    margin: 20,}}
             />
         </div>

         <div style={{ background: "#5C3FBB",
            borderRadius: 10,
            display : "flex",
          direction : "column",
          justifyContent :"center",
          alignItem : "center",
          marginLeft: 15,
          marginRight: 15
          }}>  
             <img src={twitter} style={{    margin: 20,}}/>
         </div>

         <div style={{ background: "#5C3FBB",
            borderRadius: 10,
            display : "flex",
          direction : "column",
          justifyContent :"center",
          alignItem : "center",
          marginLeft: 15,
          marginRight: 15          }}>  
             <img src={yt} style={{    margin: 20,}}/>
         </div>

         <div style={{ background: "#5C3FBB",
            borderRadius: 10,
            display : "flex",
          direction : "column",
          justifyContent :"center",
          alignItem : "center",
          marginLeft: 15,
          marginRight: 15
          }}>  
             <img src={dis} style={{    margin: 20,}}/>
         </div>

         <div style={{ background: "#5C3FBB",
            borderRadius: 10,
            display : "flex",
          direction : "column",
          justifyContent :"center",
          alignItem : "center",
          marginLeft: 15,
          marginRight: 15
          }}>  
             <img src={git} style={{    margin: 20,}}/>
         </div>

         <div style={{ background: "#5C3FBB",
            borderRadius: 10,
            display : "flex",
          direction : "column",
          justifyContent :"center",
          alignItem : "center",
          marginLeft: 15,
          marginRight: 15
          }}>  
             <img src={med} style={{    margin: 20,}}/>
         </div>

         <div style={{ background: "#5C3FBB",
            borderRadius: 10,
            display : "flex",
          direction : "column",
          justifyContent :"center",
          alignItem : "center",
          marginLeft: 15,
          marginRight: 15
          }}>  
             <img src={fb} style={{    margin: 20,}}/>
         </div>

         <div style={{ background: "#5C3FBB",
            borderRadius: 10,
            display : "flex",
          direction : "column",
          justifyContent :"center",
          alignItem : "center",
          marginLeft: 15,
          marginRight: 15
          }}>  
            <img src={ig} style={{    margin: 20,}}/>
         </div>
        </div>
      {
         //-------- section 11  end
      }
       
      
      {
         //-------- section 12  start
      }
      <div
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}
      >
        <div style={{flex: 1, height: '1px', backgroundColor: '#8F8F8F'}} />

        <div style={{margin : 7}}>
          <p style={{width: "100%", textAlign: 'center', color: "#8F8F8F"}}>© 2022 - All rights reserved by BCSDAO PROTOCOL.</p>
        </div>

        <div style={{flex: 1, height: '1px', backgroundColor: '#8F8F8F'}} />
      </div>
    
      {
         //-------- section 12  start
      }
      </div>
    </>
  );
};

export default Bodyc;
