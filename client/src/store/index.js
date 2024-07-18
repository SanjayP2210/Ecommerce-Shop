import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "../reducers";
import userReducer from "../reducers/userReducer";
import contactReducer from "../reducers/contactReducer";
import authReducer from "../reducers/authReducer";
import cartReducer from "../reducers/cartReducer";

const store = configureStore({
    reducer: {
        user: userReducer,
        auth: authReducer,
        contact: contactReducer,
        cart:cartReducer
    }
})

export default store;