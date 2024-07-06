import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slices/UserSlice";
import ImageSlice from "./slices/ImageSlice";



const Strore = configureStore({
    reducer: {
        user: UserSlice,
        image: ImageSlice
    }
});

export default Strore

