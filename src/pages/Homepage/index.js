import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";
import DrumMachine from "../../components/DrumMachine";

const Homepage = (props) => {
  return (
    <div className="homepage">
      <div className="wrap">
        <h1 className="title">
          FCC{"  "}
          <span>
            (
            <FontAwesomeIcon icon={faFire} />)
          </span>
        </h1>
        <DrumMachine />
      </div>
    </div>
  );
};

export default Homepage;
