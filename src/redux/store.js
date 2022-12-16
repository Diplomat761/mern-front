import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./slices/posts";
import { authReduser } from "./slices/auth";

const store = configureStore({
    reducer: {
        posts: postsReducer,
        auth: authReduser,
    },
});

export default store;