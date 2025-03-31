import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    loggedIn: (state, action) => {
      return (state = action.payload);
    },
    loggedOut: (state, action) => {
      return (state = null);
    },
  },
});

export const { loggedIn, loggedOut } = userSlice.actions;
export default userSlice.reducer;
