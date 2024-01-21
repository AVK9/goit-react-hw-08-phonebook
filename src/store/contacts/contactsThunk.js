import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContactApi, getContactApi } from "services/сontact";

export const getContactThunk = createAsyncThunk(
    'contacts/getContacts',
    async (_, { rejectWithValue, getState }) => {
       try {
           return await getContactApi(getState().auth.token)
        } catch (error) {
            return rejectWithValue(error.response.data.error)
        }
    }
);
export const addContactThunk = createAsyncThunk(
    'contacts/addContacts',
    async (contact, { rejectWithValue}) => {
        try {
    const data = await addContactApi(contact);
      return data;
    
        } catch (error) {
            return rejectWithValue(error.response.data.error)
        }
    }
);

