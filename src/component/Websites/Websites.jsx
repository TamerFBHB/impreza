import React from "react";
import "./Websites.css";
import pg1 from  "../../images/00.jpg"
import pg2 from  "../../images/01.jpg"
import pg3 from  "../../images/02.jpg"
import pg4 from  "../../images/03.jpg"
import pg5 from  "../../images/04.jpg"
import pg6 from  "../../images/05.jpg"
import pg7 from  "../../images/06.jpg"
import pg8 from  "../../images/07.jpg"
import pg9 from  "../../images/08.jpg"
import pg10 from  "../../images/09.jpg"
import pg11 from  "../../images/10.jpg"
import pg12 from  "../../images/11.jpg"


const Websites = () => {
  return (
    <>
      <section className="Websites">
        <div className="head">
          <h1>Real Websites Made With Impreza</h1>
          <h5>Manually picked from public support requests of our Clients.</h5>
        </div>
        <div className="photo row ">
            <div className="itemPhoto col-sm-6 col-md-4 col-lg-2"> <img src={pg1} alt=""  /></div>
            <div className="itemPhoto col-sm-6 col-md-4 col-lg-2"> <img src={pg2} alt=""  /></div>
            <div className="itemPhoto col-sm-6 col-md-4 col-lg-2"> <img src={pg3} alt=""  /></div>
            <div className="itemPhoto col-sm-6 col-md-4 col-lg-2"> <img src={pg4} alt=""  /></div>
            <div className="itemPhoto col-sm-6 col-md-4 col-lg-2"> <img src={pg5} alt=""  /></div>
            <div className="itemPhoto col-sm-6 col-md-4 col-lg-2"> <img src={pg6} alt=""  /></div>
            <div className="itemPhoto col-sm-6 col-md-4 col-lg-2"> <img src={pg7} alt=""  /></div>
            <div className="itemPhoto col-sm-6 col-md-4 col-lg-2"> <img src={pg8} alt=""  /></div>
            <div className="itemPhoto col-sm-6 col-md-4 col-lg-2"> <img src={pg9} alt=""  /></div>
            <div className="itemPhoto col-sm-6 col-md-4 col-lg-2"> <img src={pg10} alt="" /></div>
            <div className="itemPhoto col-sm-6 col-md-4 col-lg-2"> <img src={pg11} alt="" /></div>
            <div className="itemPhoto col-sm-6 col-md-4 col-lg-2"> <img src={pg12} alt="" /></div>
            <div className="itemPhoto col-sm-6 col-md-4 col-lg-2"> <img src={pg1} alt=""  /></div>
            <div className="itemPhoto col-sm-6 col-md-4 col-lg-2"> <img src={pg2} alt=""  /></div>
            <div className="itemPhoto col-sm-6 col-md-4 col-lg-2"> <img src={pg3} alt=""  /></div>
            <div className="itemPhoto col-sm-6 col-md-4 col-lg-2"> <img src={pg4} alt=""  /></div>
            <div className="itemPhoto col-sm-6 col-md-4 col-lg-2"> <img src={pg5} alt=""  /></div>
            <div className="itemPhoto col-sm-6 col-md-4 col-lg-2"> <img src={pg6} alt=""  /></div>
            <div className="itemPhoto col-sm-6 col-md-4 col-lg-2"> <img src={pg7} alt=""  /></div>
            <div className="itemPhoto col-sm-6 col-md-4 col-lg-2"> <img src={pg8} alt=""  /></div>
            <div className="itemPhoto col-sm-6 col-md-4 col-lg-2"> <img src={pg9} alt=""  /></div>
            <div className="itemPhoto col-sm-6 col-md-4 col-lg-2"> <img src={pg10} alt="" /></div>
            <div className="itemPhoto col-sm-6 col-md-4 col-lg-2"> <img src={pg11} alt="" /></div>
            <div className="itemPhoto col-sm-6 col-md-4 col-lg-2"> <img src={pg12} alt="" /></div>
        </div>
<div className="sections row">
    <div className="basket one col-md-12  col-lg-4">
        <h1>Extensive Knowledge Base</h1>
        <p>Online well-structured theme documentation.Extensive constantly updated FAQ.</p>
        <button className="btnn">Check the Knowledge Base</button>
    </div>
    <div className="basket two col-md-12  col-lg-4">
        <h1>Fast & Friendly Support</h1>
        <p>6 months of free support included.Convenient Upsolution Support Portal.</p>
        <button className="btnn">Go to Support Portal</button>
    </div>

    <div className="basket three col-md-12  col-lg-4">
        <h1>Free Test Drive Before Purchase</h1>
        <p>Try Impreza with all available features.No one else provides it!</p>
        <button className="btnn">Try Impreza For Free</button>
        
    </div>
</div>
      </section>
    </>
  );
};

export default Websites;
