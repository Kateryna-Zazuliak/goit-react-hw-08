import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterValue) =>
    contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase()) ||
        contact.number.includes(filterValue)
    )
);
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;
export const selectCurrentContact = (state) => state.currentContact;
