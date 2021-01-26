import controlTypes from "./controls.types";
import { bankOne } from "../../components/SoundBanks";

const INITIAL_STATE = {
  power: false,
  bank: "Heater Kit",
  bankItems: bankOne,
  display: "Power Off",
  keyCode: 0,
};

const controlReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case controlTypes.CONTROL_POWER: {
      return {
        ...state,
        power: action.payload,
      };
    }
    case controlTypes.CONTROL_BANK: {
      return {
        ...state,
        bank: action.payload,
      };
    }
    case controlTypes.SET_BANK_ITEMS: {
      return {
        ...state,
        bankItems: action.payload,
      };
    }
    case controlTypes.SET_DISPLAY: {
      return {
        ...state,
        display: action.payload,
      };
    }
    case controlTypes.SET_KEYCODE: {
      return {
        ...state,
        keyCode: action.payload,
      };
    }
    default:
      return state;
  }
};

export default controlReducer;
