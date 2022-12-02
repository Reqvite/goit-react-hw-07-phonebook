import { createSlice} from "@reduxjs/toolkit";

import {fetchContacts} from './operations'

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
      // You can chain calls, or have separate `builder.addCase()` lines each time
        .addCase(fetchContacts.fulfilled, (state, action) => {
             state.isLoading = false;
      state.error = null;
      state.items = action.payload;
      })
      .addMatcher(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
      state.error = action.payload;
        }
      )
    //     [fetchContacts.pending](state, action) {
    //         state.isLoading = true;
    //      },
    //     [fetchContacts.fulfilled](state, action) {
    //     state.isLoading = false;
    //   state.error = null;
    //   state.items = action.payload;
    // },
    //     [fetchContacts.rejected](state, action) {
    //     state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
})

export const  contactsReducer = contactsSlice.reducer