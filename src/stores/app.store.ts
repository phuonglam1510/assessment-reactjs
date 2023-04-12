import { Draft, PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AppState {
  snackbar: boolean;
  snackbarMessage: string;
}

const initialState: AppState = { snackbar: false, snackbarMessage: "" };

const appSlice = createSlice<AppState, any>({
  name: "cart",
  initialState,
  reducers: {
    openSnackbar: (state: Draft<AppState>, action: PayloadAction<string>) => {
      const message = action.payload;
      state.snackbar = true;
      state.snackbarMessage = message;
    },
    closeSnackbar: (state: Draft<AppState>) => {
      state.snackbar = false;
      state.snackbarMessage = "";
    },
  },
});

export const { openSnackbar, closeSnackbar } = appSlice.actions;

export default appSlice.reducer;
