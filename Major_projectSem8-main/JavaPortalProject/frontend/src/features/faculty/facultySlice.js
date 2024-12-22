import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {

    fetchFacultyByEmail,
    fetchFacultyById,
    fetchFaculties,
    updateFacultyById,
} from "./facultyAPI";

const initialState = {
    value: 0,
    status: "idle",
    faculties: [],
    selectFaculty: null,
    error: null,
};

export const fetchFacultiesAsync = createAsyncThunk(
    "faculty/fetchFacultyList",
    async () => {
        const response = await fetchFaculties();

        return response.data;
    }
);

export const fetchFacultyByIdAsync = createAsyncThunk(
    "faculty/fetchFacultyById",
    async (id) => {
        const response = await fetchFacultyById(id);
        return response.data;
    }
);
export const updateFacultyByIdAsync = createAsyncThunk(
    "faculty/updateFacultyById",
    async ({ data, id }) => {
        const response = await updateFacultyById(data, id);

        return response.data;
    }
);
export const fetchFacultyByEmailAsync = createAsyncThunk(
    "faculty/fetchFacultyByEmail",
    async (id, { rejectWithValue }) => {
        try {
            const response = await fetchFacultyByEmail(id);
            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const facultySlice = createSlice({
    name: "faculty",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchFacultiesAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchFacultiesAsync.fulfilled, (state, action) => {
                state.status = "idle";
                state.error = null;
                state.faculties = action.payload;
            })
            .addCase(fetchFacultyByIdAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchFacultyByIdAsync.fulfilled, (state, action) => {
                state.status = "idle";
                state.error = null;
                state.selectFaculty = action.payload;
            })
            .addCase(updateFacultyByIdAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(updateFacultyByIdAsync.fulfilled, (state, action) => {
                state.status = "idle";
                state.error = null;
                state.selectFaculty = action.payload;
            })
            .addCase(fetchFacultyByEmailAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchFacultyByEmailAsync.rejected, (state, action) => {
                state.status = "idle";
                state.error = action.error;
            })
            .addCase(fetchFacultyByEmailAsync.fulfilled, (state, action) => {
                state.status = "idle";
                state.error = null;

                if (Array.isArray(action.payload)) {
                    state.faculties = action.payload; // Already an array, no conversion needed
                } else {
                    state.faculties = [action.payload]; // Convert a single object to an array with one element
                }
            });
    },
});

export const selectFaculties = (state) => state.faculty.faculties;
export const selectFacultyById = (state) => state.faculty.selectFaculty;
export const selectError = (state) => state.faculty.error;
export default facultySlice.reducer;
