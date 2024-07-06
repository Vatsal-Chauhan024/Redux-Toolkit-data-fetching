import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodo = createAsyncThunk("fetchTodo", async() => {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos")
    return data.json()
})

const UserSlice = createSlice({
    name: "userSlice",
    initialState: {
        user: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodo.pending, (state, action) => {
            state.loading = true
        });
        builder.addCase(fetchTodo.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        });
        builder.addCase(fetchTodo.rejected, (state, action) => {
            state.error = true;
            state.loading = false;  
        })
    }
})

export default UserSlice.reducer;