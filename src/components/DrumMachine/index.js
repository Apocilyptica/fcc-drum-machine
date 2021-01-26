import React, { useEffect, useState } from "react";
import { setBank, setBankItems, setDisplay, setPower } from "../../redux/Controls/controls.action";
import { useDispatch, useSelector } from "react-redux";
import Switch from "@material-ui/core/Switch";
import "./styles.scss";
import Button from "../Forms/Button";
import { FormControl, FormControlLabel, FormGroup, Grid, Slider, Typography, withStyles } from "@material-ui/core";
import { blue, grey } from "@material-ui/core/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeDown, faVolumeUp, faMusic } from "@fortawesome/free-solid-svg-icons";
import { bankOne, bankTwo } from "../SoundBanks";

const mapState = ({ controls }) => ({
  power: controls.power,
  bank: controls.bank,
  bankItems: controls.bankItems,
  display: controls.display,
});

const BankSwitch = withStyles({
  switchBase: {
    color: blue[500],
    "&$checked": {
      color: blue[500],
    },
    "&$checked + $track": {
      backgroundColor: grey[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

const DrumMachine = () => {
  const dispatch = useDispatch();
  const { power, bank, bankItems, display } = useSelector(mapState);
  const [volume, setVolume] = useState(75);
  const [bankChecked, setBankChecked] = useState(false);

  useEffect(() => {
    return power ? dispatch(setDisplay(bank)) : null;
    // eslint-disable-next-line
  }, [bank]);

  useEffect(() => {
    return power ? dispatch(setDisplay(`Volume: ${volume}`)) : null;
    // eslint-disable-next-line
  }, [volume]);

  const handlePowerChange = (event) => {
    dispatch(setPower(event));
    return event ? dispatch(setDisplay("Power On")) : dispatch(setDisplay("Power Off"));
  };

  const handleBankChange = (event) => {
    setBankChecked(event.target.checked);
    return event.target.name === "Heater Kit"
      ? (dispatch(setBank("Smooth Piano Kit")), dispatch(setBankItems(bankTwo)))
      : (dispatch(setBank("Heater Kit")), dispatch(setBankItems(bankOne)));
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
  };

  return (
    <div id="drum-machine" className="drumMachine">
      <div className="buttonWrap">
        {bankItems.map((item, index) => {
          return (
            <Button
              id={item.id}
              key={index}
              keyid={item.id}
              keycode={item.keyCode}
              fcckeycode={item.fccKeyCode}
              keytrigger={item.keyTrigger}
              keyurl={item.url}
              power={power.toString()}
              volume={volume}
            >
              {item.keyTrigger}
            </Button>
          );
        })}
      </div>
      <div className="controlWrap">
        <FormControl component="fieldset">
          <FormGroup aria-label="position">
            <FormControlLabel
              className="item"
              value="top"
              control={
                <Switch
                  checked={power}
                  onChange={(e) => handlePowerChange(e.target.checked)}
                  name="power"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              }
              label={<span style={{ fontSize: "2rem" }}>Power</span>}
              labelPlacement="top"
            />
            <div className="infoBox item">
              <div id="display" className="info">
                {display}
              </div>
            </div>
            <div className="item">
              <Grid container spacing={2}>
                <Grid item>
                  <FontAwesomeIcon icon={faVolumeDown} />
                </Grid>
                <Grid item xs>
                  <Slider disabled={!power} value={volume} onChange={handleVolumeChange} aria-labelledby="continuous-slider" />
                </Grid>
                <Grid item>
                  <FontAwesomeIcon icon={faVolumeUp} />
                </Grid>
              </Grid>
            </div>
            <Grid container spacing={2}>
              <Grid item>
                <div className="bankTitle">Heater Kit</div>
                {bank === "Heater Kit" && power ? <FontAwesomeIcon className="icon" icon={faMusic} /> : <div></div>}
              </Grid>
              <Grid item xs>
                <FormControlLabel
                  disabled={!power}
                  className="item"
                  value="top"
                  control={<BankSwitch checked={bankChecked} className="icon" onChange={handleBankChange} name={bank} />}
                  label={<span style={{ fontSize: "2rem" }}>Bank</span>}
                  style={{ transform: "translateX(15px)" }}
                  labelPlacement="top"
                />
              </Grid>
              <Grid item>
                <div className="bankTitle">Smooth Piano Kit</div>
                {bank === "Smooth Piano Kit" && power ? <FontAwesomeIcon icon={faMusic} /> : <div></div>}
              </Grid>
            </Grid>
          </FormGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default DrumMachine;
