import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import favouritesReducer from "../slices/favourites/favouritesSlice";
import resultsReducer from "../slices/results/resultsSlice";

const reducers = combineReducers({
    favourites: favouritesReducer,
    results: resultsReducer,
});
const persistConfig = {
    key: "root",
    storage: storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
    reducer: persistedReducer,
});
