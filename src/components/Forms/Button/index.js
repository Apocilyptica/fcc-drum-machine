import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDisplay, setKeyCode } from "../../../redux/Controls/controls.action";

import "./styles.scss";

const mapState = ({ controls }) => ({
  power: controls.power,
});

const Button = ({ children, ...props }) => {
  const { power } = useSelector(mapState);
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener("keypress", handleKeyPress);
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
    // eslint-disable-next-line
  }, [power, props.volume]);

  useEffect(() => {
    setTimeout(() => setActive(false), 250);
  }, [active]);

  const handleKeyPress = (event) => {
    // dispatch(setKeyCode(event.keyCode));
    if (event.keyCode === props.keycode || event.keyCode === props.fcckeycode) playSound();
  };

  const playSound = () => {
    const sound = document.getElementById(props.keytrigger);
    setActive(true);
    sound.currentTime = 0;
    sound.volume = props.volume / 100;
    return power ? (sound.play(), dispatch(setDisplay(props.keyid.replace(/-/g, " ")))) : null;
  };

  const styles = {
    background: active ? "orange" : power ? "gray" : "darkgray",
    boxShadow: power && !active ? "5px 5px 5px 0 rgba(0,0,0,.9)" : "",
    transform: power && !active ? "translate(-2px, -2px)" : "",
    backgroun: active ? "orange" : power ? "gray" : "darkgray",
  };

  return (
    <div>
      <button className="btn drum-pad" {...props} onMouseDown={playSound} style={styles}>
        <audio id={props.keytrigger} preload="none" className="clip" src={props.keyurl} />
        {children}
      </button>
    </div>
  );
};

export default Button;
