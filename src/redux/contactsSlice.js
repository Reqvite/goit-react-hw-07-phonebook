import { createSlice} from "@reduxjs/toolkit";

import {addContact, deleteContact, fetchContacts} from './operations'

const tasksInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: tasksInitialState,

    extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.isLoading = true;
      })
        .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
      state.error = null;
          state.items = action.payload;
      })
      // .addMatcher(fetchContacts.rejected, (state, action) => {
      //   state.isLoading = false;
      // state.error = action.payload;
      //   }
      // )
      .addCase(addContact.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload.data);
      })
      // .addMatcher(addContact.rejected, (state, action) => {
      //   state.isLoading = false;
      // state.error = action.payload;
      // }
      // )
      .addCase(deleteContact.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const idx = state.items.findIndex(contact => contact.id === action.payload.data.id)
        state.items.splice(idx, 1)
        
      })
      .addMatcher(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
      state.error = action.payload;
        })
  },
})

export const  contactsReducer = contactsSlice.reducer