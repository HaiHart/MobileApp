import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlices'
import notiReducer from './notificationSlices'
import roomReducer from './roomsSlices'
import accountReducer from './accountSlices'
import serviceReducer from './serviceSlices'

export default configureStore({
  reducer: {
    user: userReducer,
    noti: notiReducer,
    rooms: roomReducer,
    accounts: accountReducer,
    services: serviceReducer
  }
})