import { FarmListJson } from "@/Config";
import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
const profileSlice = createSlice({
  name: "profile",
  initialState: { 
    name: "Trần Văn A",
    email: "atran@gmail.com"
  },
  reducers: {
    editprofile: (state, action) => {
        state.name = action.payload.name;
        state.email = action.payload.email;
        // state = action.payload;
    }
  },
});

export const { editprofile } = profileSlice.actions;

export const profileReducers = profileSlice.reducer;
