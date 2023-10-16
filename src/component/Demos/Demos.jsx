import React from "react";
import "./Demos.css";
import { Row, Tab, Tabs } from "react-bootstrap";
import Data from "./data";
import { Link } from "react-router-dom";



const Demos = ({demos , colorsetstate}) => {

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
    return ele.id2 === "other";
  });
  const portfolio = sorting.filter((ele) => {
    return ele.id3 === "portfolio";
  });
  const shop = sorting.filter((ele) => {
    return ele.id4 === "shop";
  });


  return (
    <section className="Demos" ref ={demos} >
      <div className="head">
          <h1>Smart Pre-Built Demos</h1>
      </div>
      <Tabs
        defaultActiveKey="All"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="All" title="All">
          <div className="mx-3 content row">
            {sorting.map((item) => {
              return (
                <Link className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="box">
                  <div className="title">{item.title}</div>
                  <img src={item.image} alt="" />
                </div>
              </Link>
              );
            })}
          </div>
        </Tab>

        <Tab eventKey="Blog" title="Blog 6">
          <div   className="mx-3 content row">
            {blog.map((item) => {
              return (
                <Link className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                  <div className="box">
                    <div className="title">{item.title}</div>
                    <img src={item.image} alt="" />
                  </div>
                </Link>
              );
            })}
          </div>
        </Tab>

        <Tab eventKey="Business" title="Business 30">
          <div className="mx-3 content row">
            {Business.map((item) => {
              return (
                <Link className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="box">
                  <div className="title">{item.title}</div>
                  <img src={item.image} alt="" />
                </div>
              </Link>
              );
            })}
          </div>
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
