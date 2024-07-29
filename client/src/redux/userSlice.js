import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  email: null,
  jwtoken: null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.jwtoken = action.payload.jwtoken;
    },
  },
});

export const {setUserInfo} = userSlice.actions;
export default userSlice.reducer;
