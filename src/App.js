import React from "react";
import TeamCard from "./Component/TeamCard";
import SessionResult from "./Component/SessionResult"
import SessionCard from "./Component/SessionCard";
import Batsmen from "./Component/Batsmen";
import Bowler from "./Component/Bowler";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useRouteMatch
} from "react-router-dom";

export default function App({ props }) {
  console.log(props);
  return (
    <div>
      <div>
        <Router>
          <div style={{ marginTop: 10 }}>
            <ul>
              <li style={{ fontSize: 50 }}>
                <NavLink
                  exact
                  style={{ textDecoration: "none", color: "	#787878" }}
                  activeClassName="active"
                  activeStyle={{ color: "white" }}
                  to="/"
                >
                  TEAMS
                </NavLink>
              </li>
              <li style={{ fontSize: 50 }}>
                <NavLink
                  exact
                  style={{ textDecoration: "none", color: "	#787878" }}
                  activeClassName="active"
                  activeStyle={{ color: "white" }}
                  to="/batsmen"
                >
                  BATSMAN
                </NavLink>
              </li>
              <li style={{ fontSize: 50 }}>
                <NavLink
                  exact
                  style={{ textDecoration: "none", color: "	#787878" }}
                  activeClassName="active"
                  activeStyle={{ color: "white" }}
                  to="/bowlers"
                >
                  BOWLERS
                </NavLink>
              </li>
            </ul>
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <div>
                    <TeamCard {...props} />
                    <SessionCard {...props} />
                  </div>
                )}
              />
              <Route
                path="/batsmen"
                render={props => (
                  <div>
                    <Batsmen {...props} />
                    <SessionCard {...props} />
                  </div>
                )}
              />
              <Route
                path="/bowlers"
                render={props => (
                  <div>
                    <Bowler {...props} />
                    <SessionCard {...props} />
                  </div>
                )}
              />
              <Route
                path="/year/:year"
                render={props => (
                  <div>
                    <SessionResult {...props} />                  
                    <SessionCard/>
                  </div>
                )}
              />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

function Hello() {
  return <div>OK BABBA</div>;
}
// function SessionCard() {
//   console.log();
//   return (
//     <div style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
//       <div class="container-fluid py-2">
//         <h2
//           class="font-weight-light"
//           style={{ marginBottom: 15, color: "#d0f0c0", fontSize: 50 }}
//         >
//           SEASONS
//         </h2>
//         <div class="scroll">
//           {seasonData.map(card => {
//             return (
//               <div
//                 class="flip-card"
//                 onClick={e => {
//                   this.handleClick(e, card);
//                 }}
//               >
//                 <div class="flip-card-inner">
//                   <div
//                     class="flip-card-front"
//                     style={{
//                       background: `${card.backgroundColor}`,
//                       color: "white"
//                     }}
//                   >
//                     <div
//                       style={{
//                         display: "flex",
//                         justifyContent: "start",
//                         fontSize: 35,
//                         fontWeight: "bolder",
//                         marginLeft: 15
//                       }}
//                     >
//                       <div>{card.year}</div>
//                       <div></div>
//                     </div>
//                     <div style={{ fontSize: 80, marginTop: -15 }}>
//                       {card.matchPlayed}
//                     </div>
//                     <div style={{ marginTop: -30 }}>matches played</div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }
