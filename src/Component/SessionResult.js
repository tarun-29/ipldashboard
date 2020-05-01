import React, { useState, useEffect } from "react";
import "./sessioncard.css";
import seasonData from "../store/seasons.json";

function SessionResult({ match }) {
  const [key, setKey] = useState(0);

  const picker = da => {
    return da.match_details.map((date, key) => {
      return <option value={`${key}`}>{date.Match_Date}</option>;
    });
  };

  const renderMatch = da => {
    var m = da.match_details[key];
    console.log(m);
    return (
      <div style={{}}>
        <div style={{ display: "flex", flexDirection: "row", marginTop: 20, marginLeft: 15}}>
          <div style={{ marginRight: 20 }}>
            <img
              src={require(`./teamlogo/${m.Team_Name}.png`)}
              style={{ height: 50 }}
            ></img>
          </div>
          <div> VS</div>
          <div style={{ marginLeft: 20 }}>
            <img
              src={require(`./teamlogo/${m.Opponent_Team}.png`)}
              style={{ height: 50 }}
            ></img>
          </div>
        </div>
        <div style={{ color: "white", marginTop: 20 }}>
          <div style={{ fontSize: 13 }}>{`${m.Match_Winner} WON`}</div>
          <div style={{ fontSize: 13 }}>{`BY ${m.Won_By} ${m.Win_Type}`}</div>
        </div>
      </div>
    );
  };

  const handleChange = e => {
    let { name, value } = e.target;
    setKey(parseInt(value));
    // console.log(typeof(value))
    // console.log("key")
    // console.log(key)
  };

  const data = () => {
    return seasonData.map(da => {
      if (da.year === parseInt(match.params.year)) {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: 0
            }}
          >
            <div style={{ marginLeft: 0 }}>
              <div
                style={{
                  marginLeft: 30,
                  marginBottom: 30,
                  fontSize: 20,
                  color: "white"
                }}
              >
                Mathes played across different cities
              </div>
              <img src={require("./ipl.png")} style={{ height: 150 }}></img>
              <div style={{ marginLeft: 85, fontSize: 60, color: "white" }}>
                {da.year}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 0,
                textAlign: "center"
              }}
            >
              <div style={{ color: "white", fontSize: 50 }}>AWARDS</div>
              <div style={{ textAlign: "center" }}>
                <div style={{ color: "orange", fontSize: 27 }}>ORANGE CAP</div>
                <div style={{ color: "white", fontSize: 20 }}>
                  {da.awards.Orange_Cap.name}
                </div>
                <div
                  style={{ color: "white", fontSize: 10 }}
                >{`MATCHES: ${da.awards.Orange_Cap.matches} RUNS:${da.awards.Orange_Cap.runs}`}</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ color: "purple", fontSize: 27 }}>PURPLE CAP</div>
                <div style={{ color: "white", fontSize: 20 }}>
                  {da.awards.Purple_Cap.name}
                </div>
                <div
                  style={{ color: "white", fontSize: 10 }}
                >{`MATCHES: ${da.awards.Purple_Cap.matches} WICKETS:${da.awards.Purple_Cap.wickets}`}</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ color: "#fc6c85", fontSize: 27 }}>
                  MAXIMUM SIXES
                </div>
                <div style={{ color: "white", fontSize: 20 }}>
                  {da.awards.Maximum_Sixes.name}
                </div>
                <div
                  style={{ color: "white", fontSize: 10 }}
                >{`MATCHES: ${da.awards.Maximum_Sixes.matches} SIXES:${da.awards.Maximum_Sixes.sixes}`}</div>
              </div>
            </div>
            <div
              style={{
                marginTop: 10,
                justifyContent: "center",
                textAlign: "center",
                marginLeft: 0
              }}
            >
              <div
                style={{
                  fontSize: 40,
                  color: "#787878"
                }}
              >
                SEASON RESULT
              </div>
              <div style={{}}>
                <div style={{ color: "white" }}>
                  <div>
                    <div style={{ fontSize: 30 }}>1st</div>
                    <img
                      src={require(`./teamlogo/${da.season_result[0]}.png`)}
                      style={{ height: 80 }}
                    ></img>
                  </div>
                  <div>
                    <div style={{ fontSize: 15 }}>2nd</div>
                    <img
                      src={require(`./teamlogo/${da.season_result[1]}.png`)}
                      style={{ height: 80 }}
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                fontSize: 35,
                color: "#787878",
                justifyContent: "center",
                textAlign: "center",
                marginTop: 15,
                marginLeft: -50
              }}
            >
              <div>Match Detail</div>
              <div>
                <select
                  onChange={e => {
                    handleChange(e, data);
                  }}
                  id="cars"
                  style={{ height: 20, fontSize: 12, width: 150 }}
                >
                  {picker(da)}
                </select>
                {renderMatch(da)}
              </div>
            </div>
          </div>
        );
      }
    });
  };

  return <div>{data()}</div>;
}

const styles = {
  rotate: {
    transform: [{ rotate: "90deg" }]
  }
};

export default SessionResult;
