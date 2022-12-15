import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
            userinfo: {
                name: "Nguyễn Văn An",
                nickname: "An Nguyễn",
                phonenumber: "0123456789",
                email: "nguyenvanan@gmail.com"
        }
    },
    reducers: {
        updateProfile: (state, action) => {
            console.log("==================================")
            console.log(action.payload)
            state.userinfo = action.payload;
        }
    }
})

export const { updateProfile } = userSlice.actions

export default userSlice.reducer

console.log(userSlice.actions.updateProfile)