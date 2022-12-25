import { createSlice } from '@reduxjs/toolkit'

export const accountSlice = createSlice({
    name: 'users',
    initialState: {
        accounts: [
            {
                name: "Admin",
                nickname: "admin",
                email: "admin@gmail.com",
                phone: "000000000",
                room: []
            },
            {
                name: "Minh Huy",
                nickname: "SimpleNeverWin",
                email: "huy@gmail.com",
                phone: "111111111", // Key
                room: ["room1"]
            },
            {
                name: "Chau Thanh Dat",
                nickname: "Dat",
                email: "dat@gmail.com",
                phone: "222222222",
                room: ["room2"]
            },
            {
                name: "Hồ Vũ Đại Hải",
                nickname: "Hải",
                email: "hai@gmail.com",
                phone: "333333333",
                room: ["room2"]
            },
            {
                name: "Dang Quoc Thanh",
                nickname: "Thanh",
                email: "thanh@gmail.com",
                phone: "444444444",
                room: ["room3"]
            }
        ]
    },
    reducers: {
        initAccounts: (state, action) => {
            state.accounts = action.payload
        },
        addAccount: (state, action) => {
            state.accounts.push(action.payload);
        },
        popAccount: (state, action) => {
            _phonenumber = action.payload;
            new_accounts = [];
            for (let i = 0; i < state.accounts.length; ++i) {
                if (state.accounts[i].phonenumber.localeCompare(_phonenumber) != 0) {
                    new_accounts.push(state.accounts[i]);
                }
            }
            state.accounts = new_accounts;
        }
    }
})

export const { addAccount, popAccount, initAccounts} = accountSlice.actions
export default accountSlice.reducer