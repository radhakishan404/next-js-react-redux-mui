import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dark_mode: "dark",
    sidebar_open: true,
    snackbar: {
        open: false,
        message: "",
        severity: "info",
    },
    authentication_loading: false,
};

export const commonSlice = createSlice({
    name: "common",
    initialState,
    reducers: {
        set_dark_mode: (state, action) => {
            state.dark_mode = action.payload
                ? action.payload
                : state.dark_mode === "light"
                    ? "dark"
                    : "light";
        },
        setSidebarMenu: (state, action) => {
            state.sidebar_open = action.payload;
        },
        setSnackBar: (state, action) => {
            state.snackbar = action.payload;
        },
        setAuthenticationLoading: (state, action) => {
            state.authentication_loading = action.payload.state;
        },
    },
    extraReducers: (builder) => {
    }
});

// Action creators are generated for each case reducer function
export const { setAuthenticationLoading, setSnackBar, setSidebarMenu, set_dark_mode } = commonSlice.actions;

export default commonSlice;
