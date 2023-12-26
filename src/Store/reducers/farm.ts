import { FarmListJson } from "@/Config";
import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
const farmSlice = createSlice({
  name: "farmlist",
  initialState: { 
    farmlist: FarmListJson,
    inputFarmName: "",
    inputPlant: "",
    inputLocation: "",
    inputAcraege: "",
    selectedFarm: FarmListJson[0],
  },
  reducers: {
    addFarm: (state, { payload: { farmlist, inputFarmName,
      inputPlant,
      inputLocation,
      inputAcraege,} }) => {
        const newFarm = {
          name: inputFarmName,
          id: v4(),
          date: "27/12/2023",
          model: "",
          timeOn: "",
          plant: inputPlant,
          acraege: inputAcraege,
          location: inputLocation,
          sche: []
        };
        state.farmlist.push(newFarm);
    },
    clickFarm: (state, action) => {
      const currentFarm = {
        id: action.payload.id,
        name: action.payload.name,
        date: action.payload.date,
        model: action.payload.model,
        timeOn: action.payload.timeOn,
        plant: action.payload.plant,
        acraege: action.payload.acraege,
        location: action.payload.location,
        sche: action.payload.sche,
      };
      state.selectedFarm =  currentFarm;
    },
  },
});

export const { addFarm } = farmSlice.actions;

export const farnReducers = farmSlice.reducer;
