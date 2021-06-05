import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    name: "",
    username: "",
  },
  reducers: {
    authenticate: (
      state,
      action: PayloadAction<{ id: string; name: string; username: string }>
    ) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.username = action.payload.username;
    },
  },
});

// Action creators are generated for each case reducer function
export const { authenticate } = userSlice.actions;

export const userReducer = userSlice.reducer;
