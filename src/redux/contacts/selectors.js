import { createSelector } from "@reduxjs/toolkit";
import { getFilter } from "../filters/selectors";

export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectContacts = (state) => state.contacts.items;
export const filteredContacts = createSelector(
  [selectContacts, getFilter],
  (contact, filter) => {
    return contact.filter((evt) =>
      evt.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
