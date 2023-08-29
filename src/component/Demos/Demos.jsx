import React from "react";
import "./Demos.css";
import { Row, Tab, Tabs } from "react-bootstrap";
import Data from "./data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion"; 

const Demos = () => {

  const sorting = [...Data].sort((a, b) => (a.title > b.title ? 1 : -1));

  const blog = sorting.filter((ele) => {
    return ele.id === "Blog" || ele.id2 === "Blog";
  });
  const Business = sorting.filter((ele) => {
    return ele.id === "Business" || ele.id2 === "Business";
  });
  const One = sorting.filter((ele) => {
    return ele.id === "One" || ele.id2 === "One";
  });
  const other = sorting.filter((ele) => {
    return ele.id2 === "Other";
  });
  const portfolio = sorting.filter((ele) => {
    return ele.id3 === "portfolio";
  });
  const shop = sorting.filter((ele) => {
    return ele.id4 === "shop";
  });
//  ***** to do animation *****
const { ref, inView } = useInView();
const animation = useAnimation();

useEffect(() => {
  if(inView){ animation.start("show")}
  if(!inView){ animation.start( "hidden")}
},[animation,inView] );

const parent = {
hidden:{ opacity: 0},
show : { opacity:1, transition : { staggerChildren:0.2}}
}
const child = {
hidden:{opacity : 0},
show : { opacity: 1, transition: {duration:0.3}}
}

  return (
    <section className="Demos">
      <div className="head">
          <h1>Smart Pre-Built Demos</h1>
      </div>
      <Tabs
        defaultActiveKey="All"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="All" title="All">
          <motion.div ref = {ref}
           variants  = {parent}
           animate={animation}
          className="mx-3 content row">
            {sorting.map((item) => {
              return (
                <Link className="col-sm-12 col-md-6 col-lg-4 col-xl-3 ">
                  <motion.div
                   variants  ={child} 
                   className="box">
                    <div className="title">{item.title}</div>
                    <img src={item.image} alt="" />
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>
        </Tab>

        <Tab eventKey="Blog" title="Blog 6">
          <motion.div 
            variants  = {parent}
            animate="show"
            initial ="hidden"
            className="mx-3 content row">
            {blog.map((item) => {
              return (
                <Link className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                  <motion.div
                    variants  ={child} 
                    className="box">
                    <div className="title">{item.title}</div>
                    <img src={item.image} alt="" />
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>
        </Tab>

        <Tab eventKey="Business" title="Business 30">
          <motion.div
            variants  = {parent}
            animate="show"
            initial ="hidden"
          className="mx-3 content row">
            {Business.map((item) => {
              return (
                <Link className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                  <motion.div
                  variants={child}
                  className="box">
                    <div className="title">{item.title}</div>
                    <img src={item.image} alt="" />
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>
        </Tab>

        <Tab eventKey="OnePage" title="One Page 11">
          <Row className="mx-3 content">
            {One.map((item) => {
              return (
                <Link className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                  <div className="box">
                    <div className="title">{item.title}</div>
                    <img src={item.image} alt="" />
                  </div>
                </Link>
              );
            })}
          </Row>
        </Tab>

        <Tab eventKey="Other" title="Other 14">
          <Row className="mx-3 content ">
            {other.map((item) => {
              return (
                <Link className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                  <div className="box">
                    <div className="title">{item.title}</div>
                    <img src={item.image} alt="" />
                  </div>
                </Link>
              );
            })}
          </Row>
        </Tab>

        <Tab eventKey="Portfolio" title="Portfolio 14">
          <Row className="mx-3 content">
            {portfolio.map((item) => {
              return (
                <Link className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                  <div className="box">
                    <div className="title">{item.title}</div>
                    <img src={item.image} alt="" />
                  </div>
                </Link>
              );
            })}
          </Row>
        </Tab>

        <Tab eventKey="Shop" title="Shop 6">
          <Row className="mx-3 content">
            {shop.map((item) => {
              return (
                <Link className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                  <div className="box">
                    <div className="title">{item.title}</div>
                    <img src={item.image} alt="" />
                  </div>
                </Link>
              );
            })}
          </Row>
        </Tab>
      </Tabs>
    </section>
  );
};

export default Demos;
