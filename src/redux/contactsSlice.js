import { createSlice} from "@reduxjs/toolkit";

import {addContact, deleteContact, fetchContacts} from './operations'

const tasksInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handlePending = (state, action) => {
   state.isLoading = true;
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: tasksInitialState,

  extraReducers:
  {
    [fetchContacts.pending]:handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected] : handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload.data);
    },
    [addContact.rejected]: handleRejected,
     [deleteContact.pending]: handlePending,
      [deleteContact.fulfilled] (state, action){
        state.isLoading = false;
        state.error = null;
        const idx = state.items.findIndex(contact => contact.id === action.payload.data.id)
        state.items.splice(idx, 1)
        
      },
      [deleteContact.rejected]: handleRejected
  }
})

export const  contactsReducer = contactsSlice.reducer