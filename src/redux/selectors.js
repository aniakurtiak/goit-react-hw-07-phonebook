import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.getIsLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const selectVisibleItems = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => {
        return contacts.filter(contact => contact.name.toLowerCase()
            .includes(filter.toLowerCase())
  );
})
