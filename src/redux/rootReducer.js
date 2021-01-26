import { combineReducers } from "redux";

import controlReducer from "./Controls/controls.reducer";

export const rootReducer = combineReducers({
  controls: controlReducer,
});

export default rootReducer;
