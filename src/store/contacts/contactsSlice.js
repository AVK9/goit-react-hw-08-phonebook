import { createSlice } from "@reduxjs/toolkit";
import { handleFulfilled, handlePending, handleRejected } from "../auth/handlers";
import { handleGetContact } from "../contacts/handlers";
import { addContactThunk, getContactThunk } from "./contactsThunk";
const initialState = {
    contacts: [],
    isLoading: false,
    error: null,
}
const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: builder => {
        builder
          .addCase(getContactThunk.fulfilled, handleGetContact)
          .addCase(addContactThunk.fulfilled, handleGetContact)
            
          .addMatcher(({type}) => type.endsWith('/pendihg'), handlePending)
          .addMatcher(({type})=> type.endsWith('/fulfilled'), handleFulfilled)
          .addMatcher(({type})=> type.endsWith('/rejected'), handleRejected)
    }
})

export const contactsReduser = contactsSlice.reducer


