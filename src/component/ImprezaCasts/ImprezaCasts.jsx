import React, { useState } from "react";
import "./ImprezaCasts.css";
import { Accordion, NavLink, Row } from "react-bootstrap";

const ImprezaCasts = () => {

  const [state , setstate] = useState(0)
  const youtube = [
    "https://www.youtube.com/embed/GLpv-9ZuEfM?si=SjZDGSFFBXO-bJY2",
    "https://www.youtube.com/embed/HiOEeNjn0As?si=rYqLxILP1tLgrFHJ",
    "https://www.youtube.com/embed/t9NU8EBSyJA?si=3i4v1PYnYXcECVN2",
    "https://www.youtube.com/embed/fgj8e9uKiDg?si=oDj1wscb99xdfpIg",
    "https://www.youtube.com/embed/LPGzbyI3lU4?si=yPQdrOqQkuZH-qbE",
    "https://www.youtube.com/embed/5OShIqxHpGw?si=P64iNbpy9mFUIskA",
    "https://www.youtube.com/embed/eaKPytEBb0Q?si=Oe3QZ58X2EvZfffV",
    "https://www.youtube.com/embed/8mAQrMnqBQo?si=ou3Fe-UoyQq5ZyKJ",
    "https://www.youtube.com/embed/IX6sPcM8NQY?si=xB4oDkj7Aeba6OAY",
    "https://www.youtube.com/embed/KKX-GNzq8PY?si=GDEBd0Cfu8LmlO3I",
    "https://www.youtube.com/embed/j6cKOEFUMtw?si=d5F86c_xtaG9MySS",
    "https://www.youtube.com/embed/foVJWJkLchU?si=iVh0sSUXI6ZJ6jDq",
    "https://www.youtube.com/embed/HGXsAKdWLX8?si=U9hIkp8K6FVQ2ijZ",
    "https://www.youtube.com/embed/lcTFtiFGZng?si=m1y_70PyG_tTozWl",
    "https://www.youtube.com/embed/CFQSW3lJhms?si=3eFKi4xh_y9oUPO6",
    "https://www.youtube.com/embed/1eV1GesTnjs?si=wxFBzonZ3v_msJD3",
    "https://www.youtube.com/embed/NXBQgjRmukk?si=9MQYVSSuKF_JxuWY",
    "https://www.youtube.com/embed/W7AKDi4UWFE?si=wIPYpyjo1mvPwp6K",
    "https://www.youtube.com/embed/p18kDCfDUSI?si=XdwDvCJ6jsHH0czJ",
    "https://www.youtube.com/embed/q3_GhUDV73U?si=5OSw3-wZ4e6fDFQN",
    "https://www.youtube.com/embed/-MXuXPf42vs?si=D-hI0eC8JFy54Keh",
    "https://www.youtube.com/embed/UzAs4kyWJ8k?si=lzcDpfM3xfz7Jnf9",
    "https://www.youtube.com/embed/9VK9ByAY46E?si=oWC-fBLx7qsjl3qw",
    "https://www.youtube.com/embed/CtLMTpjzO3s?si=LBWBY3hDLzsP7Q_3",
    "https://www.youtube.com/embed/er77JBH5DR8?si=JmcqNBB-aJ8py2B6",
  ];
  

  return (
      <Row>
        <div className="col-md-12 col-lg-4  p-0">
          <div className="videosDetails">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0" className="">
                <Accordion.Header className="">
                  Getting Started
                </Accordion.Header>
                <Accordion.Body>
                  <NavLink className={state===0? "activeyoutube unit" :"unit"}   onClick={() => setstate( 0)}>
                    <p> 1. Whats is Impreza </p>
                    <p> 3:56 </p>
                  </NavLink>
                  <NavLink className={state===1? "activeyoutube unit" :"unit"}   onClick={() => setstate( 1)}>
                    <p> 2. Testing the Themee </p>
                    <p> 4:29 </p>
                  </NavLink>
                  <NavLink className={state===2? "activeyoutube unit" :"unit"} onClick={() => setstate( 2)}>
                    <p> 3. Installing and Activating </p>
                    <p> 2:17 </p>
                  </NavLink>
                  <NavLink className={state===3? "activeyoutube unit" :"unit"}   onClick={() => setstate(3)}>
                    <p>4. Importing Demos and Separate Section </p>
                    <p> 3:14 </p>
                  </NavLink>
                </Accordion.Body>
                </Accordion.Item>
  
                <Accordion.Item eventKey="1" className=" ">
                <Accordion.Header className="">
                  Adjusting Look and Feel
                </Accordion.Header>
                <Accordion.Body>
                  <NavLink className={state===4? "activeyoutube unit" :"unit"} onClick={() => setstate(4)}>
                    <p> 5. Setting the Typography </p>
                    <p> 4:50 </p>
                  </NavLink>
                  <NavLink className={state===5? "activeyoutube unit" :"unit"} onClick={() => setstate(5)}>
                    <p> 6. Adjusting Theme Colors </p>
                    <p> 3:20 </p>
                  </NavLink>
                  <NavLink className={state===6? "activeyoutube unit" :"unit"} onClick={() => setstate(6)}>
                    <p> 7. Customizeing Headers </p>
                    <p> 4:04 </p>
                  </NavLink>
                  <NavLink className={state===7? "activeyoutube unit" :"unit"} onClick={() => setstate(7)}>
                    <p> 8. Customizeing Footers </p>
                    <p>4:06 </p>
                  </NavLink>
                  <NavLink className={state===8? "activeyoutube unit" :"unit"} onClick={() => setstate(8)}>
                    <p> 9. Creating Page Templates </p>
                    <p> 7:40 </p>
                  </NavLink>
                  <NavLink className={state===9? "activeyoutube unit" :"unit"} onClick={() => setstate(9)}>
                    <p> 10. Customizeing Post Lists with the Grid Templates </p>
                    <p> 4:26</p>
                  </NavLink>
                  <NavLink className={state===10? "activeyoutube unit" :"unit"} onClick={() => setstate(10)}>
                    <p> 11. Styling Buttons and Input Fields </p>
                    <p> 2:34 </p>
                  </NavLink>
                  <NavLink className={state===11? "activeyoutube unit" :"unit"} onClick={() => setstate(11)}>
                    <p> 12. Adding Icons </p>
                    <p> 3:08 </p>
                  </NavLink>
                  <NavLink className={state===12? "activeyoutube unit" :"unit"} onClick={() => setstate(12)}>
                    <p> 13. Adjusting Mobile Version </p>
                    <p> 2:34 </p>
                  </NavLink>
                </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className=" ">
                <Accordion.Header className="">
                  Content Editing
                </Accordion.Header>
                <Accordion.Body>
                  <NavLink className={state===13? "activeyoutube unit" :"unit"} onClick={() => setstate(13)}>
                    <p> 14. Editing Pages with the Builder </p>
                    <p>5:39 </p>
                  </NavLink>

                  <NavLink className={state===14? "activeyoutube unit" :"unit"} onClick={() => setstate(14)}>
                    <p>
                      {" "}
                      15. Organizing Content with Section,Row,According,and Tabs{" "}
                    </p>
                    <p>4:02 </p>
                  </NavLink>

                  <NavLink className={state===15? "activeyoutube unit" :"unit"} onClick={() => setstate(15)}>
                    <p> 16. Building Pages with Section Template </p>
                    <p>5:39 </p>
                  </NavLink>
                  <NavLink className={state===16? "activeyoutube unit" :"unit"} onClick={() => setstate(16)}>
                    <p> 17. Using Popups </p>
                    <p>3:05 </p>
                  </NavLink>

                  <NavLink className={state===17? "activeyoutube unit" :"unit"} onClick={() => setstate(17)}>
                    <p> 18. Reusable Content Blocks </p>
                    <p>3:17 </p>
                  </NavLink>
                </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" className=" ">
                <Accordion.Header className="">
                  Creating a shop
                </Accordion.Header>
                <Accordion.Body>
                  <NavLink className={state===18? "activeyoutube unit" :"unit"} onClick={() => setstate(18)}>
                    <p> 19. Setting Up WooCommerce </p>
                    <p>5:09 </p>
                  </NavLink>
                  <NavLink className={state===19? "activeyoutube unit" :"unit"} onClick={() => setstate(19)}>
                    <p> 20. Customizaing Product Page </p>
                    <p>7:16 </p>
                  </NavLink>
                  <NavLink className={state===20? "activeyoutube unit" :"unit"} onClick={() => setstate(20)}>
                    <p>
                      {" "}
                      21. Customizaing Product Catalog with the Grid Template{" "}
                    </p>
                    <p>3:21 </p>
                  </NavLink>
                  <NavLink className={state===21? "activeyoutube unit" :"unit"} onClick={() => setstate(21)}>
                    <p> 22. Customizing Cart,Checkout,and Thank You Pages </p>
                    <p>6:20 </p>
                  </NavLink>
                </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4" className=" ">
                <Accordion.Header className="">
                  Advanced Techniques
                </Accordion.Header>
                <Accordion.Body>
                  <NavLink className={state===22? "activeyoutube unit" :"unit"} onClick={() => setstate(22)}>
                    <p> 23. Using Custom Field with ACF Pro </p>
                    <p>9:10 </p>
                  </NavLink>

                  <NavLink className={state===23? "activeyoutube unit" :"unit"} onClick={() => setstate(23)}>
                    <p> 24. Optimizing Loading Preformance </p>
                    <p>4:24 </p>
                  </NavLink>
                  <NavLink className={state===24? "activeyoutube unit" :"unit"} onClick={() => setstate(24)}>
                    <p> 25. Search Loading Performance </p>
                    <p>2:13 </p>
                  </NavLink>
                </Accordion.Body>
                </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="col-md-12 col-lg-8 p-0">
          <div className="showyoutube">
            <h4>
              there is no Internet <i class="bi bi-wifi-off"></i>
            </h4>
            <iframe
              width="100%"
              height="100%"
              src={`${youtube[state]}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="item1 youtube "
            ></iframe>
          </div>
        </div>
      </Row>

  );
};

export default ImprezaCasts;
