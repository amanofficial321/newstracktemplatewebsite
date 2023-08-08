import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "userSlice",
  initialState: {},
  reducers: {
    addUser(state, action) {
      console.log("adduser called");
      state = action.payload;
      return state;
    },
    deleteUser(state, action) {},
    deleteAllUser(state, action) {},
  },
});
// console.log(UserSlice);
export { UserSlice };
export const { addUser } = UserSlice.actions;
