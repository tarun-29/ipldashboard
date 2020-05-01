import React, { Component } from "react";
import "./teamcards.css";
import csk from "./team/csk.jpg";
import kxi from "./team/kxi.jpg";
import rcb from "./team/rcb.jpg";
import rspg from "./team/rspg.jpg";
import dd from "./team/dd.jpg";
import rr from "./team/rr.jpg";
import srh from "./team/srh.jpg";
import dc from "./team/dc.jpg";
import gl from "./team/gl.jpg";
import ktk from "./team/ktk.jpg";
import kkr from "./team/kkr.jpg";
import mi from "./team/mi.jpg";
import pw from "./team/pw.jpg";
import cup from "./cup.png";
import teamData from "../store/teams.json";
import { Bar } from "react-chartjs-2";
import { totalmem } from "os";

export default class TeamCard extends Component {
  totalmatch = card => {
    var total = 0;
    card.totalMatches.forEach(d => {
      total = total + d;
    });
    return total;
  };

  winingRate = card => {
    var total = 0;
    var total1 = 0;
    card.totalMatches.forEach(d => {
      total = total + d;
    });
    card.totalMatchesWon.forEach(d => {
      total1 = total1 + d;
    });
    total = (total1 / total) * 100;
    var n = total.toFixed(2);
    return n;
  };

  cardRender = () => {
    var team = [kkr, rcb, csk, kxi, rr, dd, mi, dc, ktk, pw, srh, rspg, gl];
    var i = 0;
    return teamData.map(card => {
      if (card) {
        return (
          <div class="flip-cards">
            <div class="flip-cards-inner">
              <div class="flip-cards-front">
                <div
                  style={{
                    backgroundImage: `url("${team[i++]}")`,
                    height: 350
                  }}
                >
                  <div
                    style={{
                      height: 350,
                      background: `${card.color}`
                    }}
                  >
                    <div
                      style={{
                        flexDirection: "column",
                        display: "flex",
                        justifyContent: "space-around"
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          paddingTop: 15
                        }}
                      >
                        <div style={{ flex: 1 }}></div>
                        <div style={{ flex: 1 }}>
                          <img
                            src={require(`${card.image}`)}
                            style={{ height: 80 }}
                          ></img>
                        </div>
                        <div style={{ flex: 1 }}></div>
                      </div>
                      <div
                        style={{
                          color: "white",
                          fontSize: 25,
                          paddingTop: 24,
                          paddingBottom: 40,
                          fontWeight: "bolder"
                        }}
                      >
                        {card.name}
                      </div>
                      <div
                        style={{
                          backgroundImage: `url("${cup}")`,
                          height: 150,
                          display: "flex",
                          justifyContent: "space-between"
                        }}
                      >
                        <div></div>
                        <div
                          style={{
                            color: `${card.fontColor}`,
                            paddingTop: 35,
                            paddingRight: 10
                          }}
                        >
                          <div style={{ fontSize: 25 }}>Best Result</div>
                          <div style={{ fontSize: 80, marginTop: -35 }}>
                            {card.bestResult.position}
                          </div>
                          <div
                            style={{ fontWeight: "lighter", marginTop: -35 }}
                          >
                            {card.bestResult.year[0]},{card.bestResult.year[1]}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flip-cards-back">
                <div>
                  <div style={{ background: card.color, height: 35 }}>
                    <p style={{ fontSize: 25 }}>Performance</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      color: `${card.fontColor}`,
                      justifyContent: "space-evenly",
                      fontSize: 50
                    }}
                  >
                    <div>
                      <div>{this.totalmatch(card)}</div>
                      <div style={{ fontSize: 12, marginTop: -15 }}>
                        Total matches
                      </div>
                    </div>
                    <div>
                      <div>{this.winingRate(card)}</div>
                      <div style={{ fontSize: 12, marginTop: -15 }}>
                        Wining rate(%)
                      </div>
                    </div>
                    <div>
                      <div>{`${card.tie.win + card.tie.lose}`}</div>
                      <div style={{ fontSize: 12, marginTop: -15 }}>
                        T+W:{`${card.tie.win}`}|T+L:{`${card.tie.lose}`}
                      </div>
                    </div>
                  </div>
                  <div>
                    <Bar data={card.data} height={200} />
                  </div>
                  <div style={{ color: "black", fontSize: 9, marginTop: 10 }}>
                    *T+W and T+L indicates matches tied and then won or lost by
                    "Super Over"
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    });
  };

  render() {
    return (
      <div style={{ marginLeft: 20, marginRight: 20 }}>
        <div class="container-fluid py-2">
          <div class="scroll">{this.cardRender()}</div>
        </div>
      </div>
    );
  }
}
