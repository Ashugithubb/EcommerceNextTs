import { configureStore, combineReducers } from '@reduxjs/toolkit'
import CounterReducer from '../slice/CartCountSlice'
import ProductReducer from '../slice/Products'
import UserReducer from '../slice/UsersSlice'
import logedUserReducer from '../slice/LogedInUserSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// Combine reducers
const rootReducer = combineReducers({
  counter: CounterReducer,
  product: ProductReducer,
  user: UserReducer,
  UserUid:logedUserReducer
})

// Persist config
const persistConfig = {
  key: 'root',
  storage,
}

// Wrap reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const makeStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })

  return store
}

// Export persistor
export const store = makeStore()
export const persistor = persistStore(store)

// Types
export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
