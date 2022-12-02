import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./contactsApi";
import { filterReducer } from "./filterSlice";

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    
    filter: filterReducer
  },
   middleware: getDefaultMiddleware => [
     ...getDefaultMiddleware(),
      contactsApi.middleware
   ]
})

// import storage from 'redux-persist/lib/storage'
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'

// import { contactsReducer } from "./contactsSlice";
// import { filterReducer } from "./filterSlice";


// const persistConfig = {
//   key: 'phoneBook',
//     storage,
//     blacklist:['filter']
// }

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//     reducer: persistedReducer,
//      middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// })

// export const persistor = persistStore(store)