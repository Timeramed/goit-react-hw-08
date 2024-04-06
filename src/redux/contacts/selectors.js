import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filters/selectors";

export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectContacts = (state) => state.contacts.items;

export const filteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contact, filter) => {
    return contact.filter((e) =>
      e.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
