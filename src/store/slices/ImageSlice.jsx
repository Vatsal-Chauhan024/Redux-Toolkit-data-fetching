import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchImages = createAsyncThunk("fetchImages", async() => {
    const data = await fetch("https://jsonplaceholder.typicode.com/photos")
    return  data.json();
})

const ImageSlice =  createSlice({
    name: "image",
    initialState : {
        isLoading: false,
        error: false,
        images : []
    },
    extraReducers : (builder) =>{
     builder.addCase(fetchImages.pending, (state, action) => {
        state.isLoading =  true
     });
     builder.addCase(fetchImages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.images = action.payload;
     });
     builder.addCase(fetchImages.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true
     })
    }
})

export default ImageSlice.reducer;