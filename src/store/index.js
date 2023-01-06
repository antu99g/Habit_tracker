import { configureStore } from "@reduxjs/toolkit";
import habit from '../reducers';

const store = configureStore({
   reducer: habit,
});

export default store;