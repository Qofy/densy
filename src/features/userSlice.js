import { createSlice } from "@reduxjs/toolkit";

//start off blank
const initialState = {
  name: "",
  email: "",
  photo: ""
};

const userSlice = createSlice({
  name: "user",
  initialState,
  //when log in
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    //when logout
    setSignOutState: (state) => {
      state.name = "";
      state.email = "";
      state.photo = "";
    }
  },
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;
