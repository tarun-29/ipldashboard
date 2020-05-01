import React, { Component } from "react";
import "./sessioncard.css";
import seasonData from "../store/seasons.json";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default function SessionCard({ match }) {
  console.log(match);
  return (
    <div style={{ marginLeft: 20, marginRight: 20 }}>
      <div class="container-fluid py-2">
        <h2
          class="font-weight-light"
          style={{ marginBottom: 15, color: "#d0f0c0", fontSize: 50 }}
        >
          SEASONS
        </h2>
        <div class="scroll">
          {seasonData.map(card => {
            return (
              <Link to={`/year/${card.year}`}>
                <div class="flip-card" onClick={e => {}}>
                  <div class="flip-card-inner">
                    <div
                      class="flip-card-front"
                      style={{
                        background: `${card.backgroundColor}`,
                        color: "white"
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "start",
                          fontSize: 35,
                          fontWeight: "bolder",
                          marginLeft: 15
                        }}
                      >
                        <div>{card.year}</div>
                        <div></div>
                      </div>
                      <div style={{ fontSize: 80, marginTop: -15 }}>
                        {card.matchPlayed}
                      </div>
                      <div style={{ marginTop: -30 }}>matches played</div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}ƒ
        </div>
      </div>
    </div>
  );
}
