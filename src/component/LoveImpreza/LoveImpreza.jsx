import React from "react";
import "./LoveImpreza.css";
import { Container } from "react-bootstrap";
import DataLove from "./DataLove";

const LoveImpreza = () => {
  return (
    <>
      <section className="loveImpreza">
        <div className="head">
          <h1>Why People Love Impreza</h1>
          <h5>The #1 Best-Rated Top-Seller (90,000+ Sales) Theme</h5>
          <div className="star">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </div>
        </div>
        <div className="content">
          <Container>
            <div className=" row ">
              {DataLove.map((item) => {
                return (
                  <>
                    <div className="col-sm-12 col-md-6 puket">
                      <div className="comment">
                        <h4>{item.title}</h4>
                        <p>{item.comment} </p>
                      </div>
                      <div className="sign">
                        <h6>{item.sign}</h6>
                        <p>{item.titleSign}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default LoveImpreza;
