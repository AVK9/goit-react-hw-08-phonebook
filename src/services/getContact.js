import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = 'https://659a72e5652b843dea538e7c.mockapi.io';

export const getContactThunk = createAsyncThunk(
       'contacts/getContacts',
        async (_, { rejectWithValue }) => {
        try {
            const {data} = await axios.get('/contacts')
            return data
        } catch (message) {
            return rejectWithValue(message)
        }
    }
)

export const addContactThunk = createAsyncThunk(
       'contacts/addContacts',
        async (contact, { rejectWithValue }) => {
        try {
            const {data} = await axios.post("/contacts", contact);
            return data
        } catch (message) {
            return rejectWithValue(message)
        }
    }
)
export const delContactThunk = createAsyncThunk(
       'contacts/delContacts',
        async (delId, { rejectWithValue }) => {
        try {
            const {data} = await axios.delete(`/contacts/${delId}`);
            return data
        } catch (message) {
            return rejectWithValue(message)
        }
    }
)