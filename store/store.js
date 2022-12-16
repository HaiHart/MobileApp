import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlices'
import notiReducer from './notiSlices'
import roomReducer from './roomSlices'
import accountReducer from './accountSlices'

export default configureStore({
  reducer: {
    user: userReducer,
    noti: notiReducer,
    rooms: roomReducer,
    accounts: accountReducer
  }
})