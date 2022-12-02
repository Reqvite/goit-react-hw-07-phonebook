import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = 'https://6389c220c5356b25a207a43d.mockapi.io/api/v1'

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    
    async (_, thunkAPI) => {
        try {
            const resp = await axios.get('/contacts');
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const addContact = createAsyncThunk(
    'contacts/addContact',

    async (contact, thunkAPI) => {
        try {
            const resp = await axios.post('/contacts', contact  )
            return resp;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',

    async (contactId, thunkAPI) => {
        try {
           const  resp = await axios.delete(`/contacts/${contactId}`);
            return resp;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }

    }
)