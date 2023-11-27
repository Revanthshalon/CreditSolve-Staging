import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CompanyState {
  _uid: string;
  name: string;
  contact: string;
  balance: number;
}

const initialState: CompanyState = {
  _uid: "",
  name: "",
  contact: "",
  balance: 0.0,
};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    addNewCompany: (state, action: PayloadAction<CompanyState>) => {
      state._uid = action.payload._uid;
      state.name = action.payload.name;
      state.contact = action.payload.contact;
      state.balance = action.payload.balance;
    },
  },
});

export const { addNewCompany } = companySlice.actions;

export default companySlice.reducer;
