import { createSelector } from "@reduxjs/toolkit";

export const selectLoading = (state) => state.isLoading
export const selectError = (state) => state.error
export const selectFilter = (state) => state.filter
export const selectContacts = (state) => state.contacts.contacts;

export const selectVisibleContacts = createSelector(
[ selectContacts, selectFilter],
    (contacts, {filter}) => {
        return contacts.filter(contact =>
            contact.name.toLowerCase()
                .includes(filter.toLowerCase()))
 }
)
