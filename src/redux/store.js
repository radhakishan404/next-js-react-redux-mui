import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

// all api calling using rtk query
import commonApis from "./common/commonApis";

// redux state slices
import commonSlice from "./common/commonSlice";
import axiosInterceptor from "../utils/axios";

// axios interceptor

const reducers = {
    [commonSlice.name]: commonSlice.reducer,
    [commonApis.reducerPath]: commonApis.reducer,
};

const initialState = {};

const rootReducer = combineReducers(reducers);

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false
        }).concat([
            commonApis.middleware,
        ]);
    },
    devTools: true,
    preloadedState: initialState,
    enhancers: (defaultEnhancers) => [...defaultEnhancers]
});


export const useAppSelector = () => useSelector(rootReducer);
export const useAppDispatch = () => useDispatch(store.dispatch);

axiosInterceptor(store.dispatch);

export default store;