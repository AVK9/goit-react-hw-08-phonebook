import { createSlice } from "@reduxjs/toolkit";
import { addContactThunk, delContactThunk, getContactThunk } from "services/getContact";

const initialState = {
    contacts: [],
    isLoading: false,
    error: null,
};
const handlePending = (state) => {
    state.isLoading = true;
    state.error= null
};
const handleFulfilled = (state) => {
    state.isLoading = false;
    state.error = null;
};

const handleRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
};
const handleStartFulfilled = (state, { payload }) => {
    state.contacts = payload;
};
const handleAddFulfilled = (state, { payload }) => {
    state.contacts.push(payload);
};
const handleDelFulfilled = (state, { payload }) => {
    // state.contacts = state.contacts.filter((el) => el.id !== payload);
 const item = state.contacts.findIndex(index => index.id === payload.id)
        state.contacts.splice(item, 1);
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: (builder)=>{
        builder
        
        .addCase(getContactThunk.fulfilled, handleStartFulfilled)
        .addCase(addContactThunk.fulfilled, handleAddFulfilled)
        .addCase(delContactThunk.fulfilled, handleDelFulfilled)
        
        
        .addMatcher(({type}) => type.endsWith('/pendihg'), handlePending)
        .addMatcher(({type})=> type.endsWith('/fulfilled'), handleFulfilled)
        .addMatcher(({type})=> type.endsWith('/rejected'), handleRejected)
        
    },
}
)
    export const contactosReduser = contactsSlice.reducer;
