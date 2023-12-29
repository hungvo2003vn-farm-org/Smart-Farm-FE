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
    curSchedule:{
      id: "",
      waterHour: '',
      waterTime: '',
      water: '',
    },
  },
  reducers: {
    addFarm: (state) => {
      if (!state.inputLocation) state.inputLocation="Tp.Hồ Chí Minh";
      if (!state.inputPlant) state.inputPlant="Cây cam";
        const newFarm = {
          id: v4(),
          name: state.inputFarmName,
          date: "27/12/2023",
          model: {
            id: 0,
            name: ""
          },
          timeOn: "",
          plant: state.inputPlant,
          acraege: state.inputAcraege,
          location: state.inputLocation,
          sche: []
        };
        state.farmlist.push(newFarm);
        state.inputFarmName= "";
        state.inputPlant= "";
        state.inputLocation= "";
        state.inputAcraege= "";
    },
    clickFarm: (state, action) => {
      const idxTask = state.farmlist.findIndex(
        (task) => task.id == action.payload
      );
      state.selectedFarm =  state.farmlist[idxTask];
    },
    updateInputFarmName: (state, action) => {
      state.inputFarmName = action.payload;
    },
    updateInputPlant: (state, action) => {
      state.inputPlant = action.payload;
    },
    updateInputLocation: (state, action) => {
      state.inputLocation = action.payload;
    },
    updateInputAcraege: (state, action) => {
      state.inputAcraege = action.payload;
    },
    updateModel: (state, action) => {
      const idxTask = state.farmlist.findIndex(
        (task) => task.id == state.selectedFarm.id
      );
      state.farmlist[idxTask].model = action.payload;
      state.selectedFarm.model = action.payload;
    },
    addSchedule: (state, action) =>{
      const idxTask = state.farmlist.findIndex(
        (task) => task.id == state.selectedFarm.id
      );
      state.farmlist[idxTask].sche.push(action.payload);
      state.selectedFarm.sche.push( action.payload);
    },
    setCurSche:(state, action)=>{
      state.curSchedule = action.payload;
    },
    deleteSchedule: (state)=>{
      const idxTask = state.farmlist.findIndex(
        (task) => task.id == state.selectedFarm.id
      );
      const idxSche = state.selectedFarm.sche.findIndex(
        (task) => task.id === state.curSchedule.id
      );
      state.farmlist[idxTask].sche.splice(idxSche, 1);
      state.selectedFarm.sche.splice(idxSche, 1);
    },
    deleteFarm: (state) =>{
      const idxTask = state.farmlist.findIndex(
        (task) => task.id == state.selectedFarm.id
      );
      state.farmlist.splice(idxTask, 1);
    }
  },
});

export const { addFarm, clickFarm, updateInputAcraege, updateInputFarmName, updateInputLocation, updateInputPlant, updateModel, addSchedule, setCurSche, deleteSchedule, deleteFarm } = farmSlice.actions;

export const farmReducers = farmSlice.reducer;
