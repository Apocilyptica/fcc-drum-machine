import controlTypes from "./controls.types";

export const setPower = (controlPower) => ({
  type: controlTypes.CONTROL_POWER,
  payload: controlPower,
});

export const setBank = (controlBank) => ({
  type: controlTypes.CONTROL_BANK,
  payload: controlBank,
});

export const setBankItems = (items) => ({
  type: controlTypes.SET_BANK_ITEMS,
  payload: items,
});

export const setDisplay = (text) => ({
  type: controlTypes.SET_DISPLAY,
  payload: text,
});

export const setKeyCode = (value) => ({
  type: controlTypes.SET_KEYCODE,
  payload: value,
});
