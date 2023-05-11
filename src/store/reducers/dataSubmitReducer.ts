import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface DataSubmit {
  name: string;
  email: string;
}

const initialState: DataSubmit = {
  name: '',
  email: '',
};

const dataSubmitSlice = createSlice({
  name: 'dataSubmitSlice',
  initialState: initialState,
  reducers: {
    setName(state: any, action: PayloadAction<DataSubmit>) {
      state.name = action?.payload;
    },
    setEmail(state: any, action: PayloadAction<DataSubmit>) {
      state.email = action?.payload;
    },
  },
});
// Action
export const dataSubmitActions = dataSubmitSlice.actions;

// Selector
export const selectEmail = (state: any) => state?.dataSubmitSlice?.email;
export const selectName = (state: any) => state?.dataSubmitSlice?.name;

// Reducers
const dataSubmitReducer = dataSubmitSlice.reducer;
export default dataSubmitReducer;
