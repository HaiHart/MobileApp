import { createSlice } from '@reduxjs/toolkit'

export const noti_type = {
    "RENT-FREE": 0,
    "EVENT": 1,
    "NEW-RENTER": 2
}
export const notiSlice = createSlice({
    name: 'noti',
    initialState: {
        noti: [
            {
                id: 0,
                receivers: ["000000000", "111111111"],
                type: noti_type["RENT-FREE"],
                content: "Tiền thuê trọ tháng 12",
                cost: 6000000,
                extend: true,
                time_start: "12-23-2022",
                approve: true
            },
            {
                id: 1,
                receivers: ["000000000", "222222222"],
                type: noti_type["RENT-FREE"],
                content: "Tiền thuê trọ tháng 12",
                cost: 6000000,
                extend: true,
                time_start: "12-23-2022",
                approve: true
            },
            {
                id: 2,
                receivers: ["000000000", "333333333"],
                type: noti_type["RENT-FREE"],
                content: "Tiền thuê trọ tháng 12",
                cost: 6000000,
                extend: true,
                time_start: "12-23-2022",
                approve: true
            },
            {
                id: 3,
                receivers: ["000000000", "444444444"],
                type: noti_type["RENT-FREE"],
                content: "Tiền thuê trọ tháng 12",
                cost: 6000000,
                extend: true,
                time_start: "12-23-2022",
                approve: true
            },
            {
                id: 4,
                receivers: ["0123456789", "444444444"],
                type: noti_type["RENT-FREE"],
                content: "Tiền thuê trọ tháng 12",
                cost: 6000000,
                extend: true,
                time_start: "12-23-2022",
                approve: true
            },
            {
                id: 5,
                receivers: ["0123456789", "444444444"],
                type: noti_type["EVENT"],
                content: "Tiền thuê trọ tháng 12",
                cost: 6000000,
                extend: true,
                time_start: "12-23-2022",
                approve: true
            },
            {
                id: 4,
                receivers: ["0123456789", "444444444"],
                type: noti_type["RENT-FREE"],
                content: "Tiền thuê trọ tháng 12",
                cost: 6000000,
                extend: true,
                time_start: "12-24-2022",
                approve: true
            },
            {
                id: 5,
                receivers: ["0123456789", "444444444"],
                type: noti_type["EVENT"],
                content: "Tiền thuê trọ tháng 12",
                cost: 6000000,
                extend: true,
                time_start: "12-24-2022",
                approve: true
            },
        ]
    },
    reducers: {
        initNotification: (state, action) => {
            state.noti = action.payload;
        },
        addItem: (state, action) => {
            state.noti.push(action.payload);
        },
        popItemByID: (state, action) => {
            _id = action.payload;
            new_noti = [];
            for (let i = 0; i < noti.length; ++i) {
                if (state.noti[i].id.localeCompare(_id)) {
                    new_noti.push(state.noti[i])
                }
                
            }
            state.noti = new_noti;
        }
    }
})

export const { addItem, popItemByID, initNotification} = notiSlice.actions

export default notiSlice.reducer