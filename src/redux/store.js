import { configureStore , getDefaultMiddleware} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import parcelsReducer from './parcels/parcels-reducer'

const persistConfig = {
    key: 'parcels',
    storage
}

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
]


const store = configureStore({
    reducer: {
        parcels: persistReducer(persistConfig, parcelsReducer),
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development'
})
const persistor = persistStore(store)
export default { store, persistor };

// const persistConfig = {
//     key: 'parcels',
//     storage
// }

// const rootReducer = combineReducers({
//     parcels: parcelsReducer
// })

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ]

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = configureStore({
//     reducer: persistedReducer,
//     middleware,
//     devTools: process.env.NODE_ENV === 'development'
// })