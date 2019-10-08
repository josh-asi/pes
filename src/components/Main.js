import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import wdhbLogo from "../media/WDHB_Logo.svg";
import tvIcon from "../media/retro-tv.svg";
import musicIcon from "../media/music-solid.svg";
import diceIcon from "../media/dice-solid.svg";

const Main = ({ history }) => {
  useEffect(() => {
    if (localStorage.getItem("tcAccepted") !== "true") {
      history.push("/");
    }
    return () => {};
  }, [history]);

  return (
    <main className="interface">
      <header className="interface__header">
        <img
          src={wdhbLogo}
          alt="WDHB Logo"
          className="interface__logo wdhb-logo"
        />
        <h1 className="heading-primary">Welcome to Lakeview</h1>
      </header>

      <div className="interface__apps">
        <a className="interface__app interface__app--netflix" href="nflx://">
          <img src={tvIcon} alt="TV Icon" className="icon icon--tv" />
          Watch
        </a>
        <a className="interface__app interface__app--spotify" href="spotify://">
          <img src={musicIcon} alt="Music Icon" className="icon icon--music" />
          Listen
        </a>

        <Link className="interface__app interface__app--games" to="/games">
          <img src={diceIcon} alt="Game icon" className="icon icon--game" />
          Play
        </Link>
      </div>
    </main>
  );
};

export default Main;
