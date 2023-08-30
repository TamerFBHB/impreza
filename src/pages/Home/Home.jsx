import "./Home.css";
import NavHeader from "../../component/NavHeader/NavHeader";
import ScrollButton from "./../../component/buttonScrolling/ScrollingButton";
import homelanding from "../../images/landing-showreel1v5.jpg";
import { Button, Container, Row } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import { NavLink } from "react-router-dom";
import show2 from "../../images/2.jpg";
import show3 from "../../images/3.jpg";
import show4 from "../../images/4.jpg";
import show5 from "../../images/5.jpg";
import show6 from "../../images/06.jpg";
import vedio from "../../video/11.mp4";
import Beginner from "../../images/For_Beginner.png";
import Creators from "../../images/For_Pro_Creators.png";
import Digital from "../../images/For_Digital_Marketers.png";
import CountUp from "react-countup";
import ImprezaCasts from "../../component/ImprezaCasts/ImprezaCasts";
import Demos from "../../component/Demos/Demos";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import { useAnimation } from "framer-motion";
import Websites from "../../component/Websites/Websites";
import LoveImpreza from "../../component/LoveImpreza/LoveImpreza";
import Footer from "../../component/Footer/Footer";

const Home = () => {
 

  // ***** animation for section Creators ****
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start("moveShow");
    }
    if (!inView) {
      animation.start("moveHidd");
    }
  }, [animation, inView]);

  const parent = {
    moveShow: {
      x: 0,
      transition: { when: "beforeChildren" , staggerChildren: 0.3 },
    },
    moveHidd: { x: "-20px" },
  };
  const child = {
    moveShow: {
      x: 0,
      transition: { type: "spring", duration: 2, bounce: 0.8 },
    },
    moveHidd: { x: "-20px" },
  };
  // ***** End animation for section Creators ****
  // ***** show foto in build landing *****
    const [state , setstate] =useState(0)
  const slideShow = [
      <video controls className="imges" autoPlay="true" loop="true"  src={vedio}  type="video/mp4" ></video>,
      <img src={ show2} alt="" className="imges " />,
      <img src={ show3} alt="" className="imges " /> ,
      <img src={ show4} alt="" className="imges " />,
      <img src={ show5} alt="" className="imges " />,
      <img src={ show6} alt="" className="imges " /> 
  ]

  // **** demos ref ****
  const demos = useRef()   
  const [colorstate, colorsetstate ] = useState("")
  const moveDemos = () => {
    demos.current.scrollIntoView({ behavior: "smooth", block:"start" });
  };
  // *****END show foto in build landing *****
  return (
    <div className="mainProject">
      {/* ***** button scroll to top ***** */}
      <ScrollButton />

      {/* ***** nav Bar from component ***** */}
      <NavHeader  moveDemos={moveDemos} colorstate={colorstate}/>

      {/* ***** landin home ***** */}
      <section className="Header">
        <Container>
          <div className="landing">
            <Row>
              <div className="info col-md-12 col-lg-5 ">
                <div>
                  <div className="star">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <p>4.88</p>
                  </div>
                  <div className="headWord">
                    <h1>The #1 Best-Rated</h1>
                    <h1>Top-Selling</h1>

                    <div className="TypeAnimation">
                      <TypeAnimation
                        sequence={[
                          "Blog",
                          500,
                          "Shop",
                          500,
                          "Magazine",
                          500,
                          "WordPress",
                          500,
                          "Portfolio",
                          500,
                        ]}
                        wrapper="span"
                        speed={5}
                        style={{
                          fontWeight: 600,
                          color: "#E95095",
                          display: "inline-block",
                        }}
                        repeat={Infinity}
                      />
                      <h1>Builder</h1>
                    </div>
                  </div>
                  <div className="buttons">
                    <Button className="btnBuild btn"> Start Building </Button>
                    <Button className="btnTest btn"> test drive free </Button>
                  </div>
                  <div className="number row">
                    <div className="right col-6 num">
                      <h3>
                        <CountUp start={0} end={95} /> K+
                      </h3>
                      Website use Impreza
                    </div>
                    <div className="left col-6 num">
                      <h3>
                        <CountUp start={0} end={2} />
                        .4K+
                      </h3>
                      Average 5-start Review
                    </div>
                  </div>
                </div>
              </div>
              <div className="image col-md-12 col-lg-7 ">
                <img src={homelanding} alt="" className="homeimgs" />
              </div>
            </Row>
          </div>
        </Container>
      </section>

      {/* ***** build ***** */}
      <section className="Build">
        <Container>
          <div>
            <div className="head">
              <h1>Build Everything</h1>
              <p>No coding Knowledge is required</p>
            </div>
            <Row className="headLanding">
              <div className="links col-md-12 col-lg-3">
                <ul>
                  <li>
                    <NavLink
                     className={state === 0 ? "activenow key " :" key Noactivenow"} 
                     onClick={()=>{setstate(0)}}
                    >
                      Section Template
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                       className={state === 1 ? "activenow key " :" key Noactivenow"} 
                       onClick={()=>{setstate(1)}}
                    >
                      Live Visual Builder
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                       className={state === 2 ? "activenow key " :" key Noactivenow"} 
                       onClick={()=>{setstate(2)}}
                    >
                      WpBakery+Builder
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                        className={state === 3 ? "activenow key " :" key Noactivenow"} 
                        onClick={()=>{setstate(3)}}
                    >
                      Header Builder
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                       className={state === 4? "activenow key " :" key Noactivenow"} 
                       onClick={()=>{setstate(4)}}
                    >
                      Grid Layout Builder
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                       className={state === 5 ? "activenow key " :" key Noactivenow"} 
                       onClick={()=>{setstate(5)}}
                    >
                      WooCommerce Builder
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-md-12 col-lg-9 ">
                <div className="showing">
                {slideShow[state]}  
                </div>
              </div>
            </Row>
          </div>
        </Container>
      </section>

      {/* ***** Creators ***** */}
      <section className="creators">
        <Container>
          <h1>Built for Creators</h1>
          <div className="">
            <motion.div
              ref={ref}
              variants={parent}
              animate={animation}
              className="row "
            >
              <div className=" col-sm-12 col-md-6 col-lg-4 my-2 ">
                <motion.div
                  variants={child}
                  animate={animation}
                  className="card"
                >
                  <img src={Beginner} alt="" className="cardimg" />
                  <div className="details">
                    <h4>For Beginner</h4>
                    <p>No Coding Skills Needed</p>
                    <p>Simple Drag'n'Drop Live Builder</p>
                    <p>Video Tutorials and Guides</p>
                    <p>One-Click Demo Installer</p>
                  </div>
                </motion.div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4 my-2">
                <motion.div
                  variants={child}
                  animate={animation}
                  className="card"
                >
                  <img src={Digital} alt="" className="cardimg" />
                  <div className="details">
                    <h4>For Digital Marketers</h4>
                    <p>Optimized for Speed and SEO</p>
                    <p>Marketing-Ready Demos</p>
                    <p>Landing-Page Ready</p>
                    <p>WooCommerce-Ready</p>
                  </div>
                </motion.div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-4 my-2">
                <motion.div
                  variants={child}
                  animate={animation}
                  className="card"
                >
                  <img src={Creators} alt="" className="cardimg" />
                  <div className="details">
                    <h4>For Pro Creators</h4>
                    <p>Powerful Grid System</p>
                    <p>White-Label</p>
                    <p>Child-Theme and Hooks</p>
                    <p>Global Page Blocks</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ***** start ImprezaCasts  ***** */}
      <section className="imprezaCasts">
        <div className="head">
          <h1>ImprezaCasts</h1>
          <p>Explore Impreza and its tools in the series of screencasts.</p>
        </div>
        <Container>
          <ImprezaCasts />
        </Container>
      </section>

      {/* ***** Demos ***** */}
      <Demos demos ={demos} colorsetstate={colorsetstate}/>

      {/* ***** Websites ***** */}
      <Websites />
      
      {/* ***** Love Impreza ***** */}
      <LoveImpreza />

       {/* ***** Footer ***** */}
            <Footer />
    </div>
  );
};

export default Home;
