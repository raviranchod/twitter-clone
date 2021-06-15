import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    name: "",
    username: "",
  },
  reducers: {
    authenticated: (
      state,
      action: PayloadAction<{ id: string; name: string; username: string }>
    ) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.username = action.payload.username;
    },
    notAuthenticated: (state) => {
      state.id = "";
      state.name = "";
      state.username = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { authenticated, notAuthenticated } = userSlice.actions;

export const userReducer = userSlice.reducer;
