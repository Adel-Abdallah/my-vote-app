import { configureStore } from "@reduxjs/toolkit";
import voteReducer from "./store/voteReducer";

const store = configureStore({
  reducer: {
    vote: voteReducer,
  },
});

export default store;
