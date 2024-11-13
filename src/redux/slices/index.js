import { combineReducers } from "@reduxjs/toolkit";
import skillTypeSlice from "./skillSlice";
import projectSlice from "./projectSlice";
import socialIconSlice from "./socialIconSlice"

export const rootReducer = combineReducers({
    skill: skillTypeSlice,
    project: projectSlice,
    iconPosition: socialIconSlice
})