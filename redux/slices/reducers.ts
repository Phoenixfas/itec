import { combineReducers } from "@reduxjs/toolkit";
import blogModalToggleReducer from "./blogModalToggleSlice";
import activeExhibitorReducer from "./activeExhibitorSlice";
import activeProfileReducer from "./activeProfileSlice";

export const rootReducer = combineReducers({
  blogModalToggle: blogModalToggleReducer,
  activeExhibitor: activeExhibitorReducer,
  activeProfile: activeProfileReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
