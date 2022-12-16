import { createSlice } from '@reduxjs/toolkit'

const noti_type = ["Tiền nhà", "Dịch vụ", "HĐ"]

export const notiSlice = createSlice({
    name: 'noti',
    initialState: {
        noti: [
            {
                id: "1",
                receivers: ["0123456789", "9876543210", "13151719", "03042289"],
                type: noti_type[0],
                content: "Tiền phí tháng này của bạn là 12 tiếng",
                cost: 12000000,
                extends: true,
                time_start: new Date(),
                approve: false
            },
            {
                id: "2",
                receivers: ["0123456789", "9876543210", "13151719", "03042289"],
                type: noti_type[1],
                content: "Tiền phí Dịch vụ tháng này  của bạn là",
                cost: 300000,
                extends: true,
                time_start: new Date(),
                approve: false
            },
            {
                id: "3",
                receivers: ["0123456789", "9876543210", "13151719", "03042289"],
                type: noti_type[0],
                content: "Tiền phí tháng này của bạn là 12 tiếng",
                cost: 12000000,
                extends: true,
                time_start: new Date(),
                approve: false
            }
        ]
    },
    reducers: {
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

export const { addItem, popItemByID } = notiSlice.actions

export default notiSlice.reducer