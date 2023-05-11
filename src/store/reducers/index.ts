import {combineReducers} from '@reduxjs/toolkit';
import dataSubmitReducer from './dataSubmitReducer';

const rootReducer = combineReducers({
  dataSubmitSlice: dataSubmitReducer,
});

export default rootReducer;
