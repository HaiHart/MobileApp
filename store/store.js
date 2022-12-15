import { configureStore } from '@reduxjs/toolkit'
import userReducer from './users/userSlices'
export default configureStore({
  reducer: {
    user: userReducer
  }
})