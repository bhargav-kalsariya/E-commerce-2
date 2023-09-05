import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import cartReducer from './cartSlice';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import thunk from 'redux-thunk'

const persistConfig = {
    key: 'root',
    storage,
}
const rootReducer = combineReducers({
    categoryReducer,
    cartReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})
export const persistor = persistStore(store)