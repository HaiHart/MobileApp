import { createSlice } from '@reduxjs/toolkit'

export const accountSlice = createSlice({
    name: 'accounts',
    initialState: {
        accounts: [
            {
                name: "Vũ Nguyễn Minh Huy",
                nickname: "Huy",
                phonenumber: "0123456789",
                email: "nguyenvanan@gmail.com",
            },
            {
                name: "Châu Thành Đạt",
                nickname: "Đạt",
                phonenumber: "9876543210",
                email: "thanhdat@gmail.com",
            },
            {
                name: "Đặng Quốc Thanh",
                nickname: "Thanh",
                phonenumber: "13151719",
                email: "thanhquoc@gmail.com",
            },
            {
                name: "Tran Hoang Hai",
                nickname: "Hai",
                phonenumber: "03042289",
                email: "hai@gmail.com",
            },
        ]
    },
    reducers: {
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

export const { addAccount, popAccount } = accountSlice.actions
export default accountSlice.reducer