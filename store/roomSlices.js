import { createSlice } from '@reduxjs/toolkit'
import { createAssetAsync } from 'expo-media-library';

const noti_type = ["Tiền nhà", "Dịch vụ", "HĐ"]

export const roomsSlice = createSlice({
    name: 'rooms',
    initialState: {
        rooms: [
            {
                id: "1",
                ownerPhone: "",
                renters: ["03042289"], // Phone những người được thuê
                service: [], // MS service co trong phong
            },
            {
                id: "2",
                ownerPhone: "",
                renters: ["13151719", ], // Phone những người được thuê
                service: [], // MS service co trong phong
            },
            {
                id: "3",
                ownerPhone: "",
                renters: ["9876543210"], // Phone những người được thuê
                service: [], // MS service co trong phong
            },
            // {
            //     id: "4",
            //     ownerPhone: "",
            //     renters: [], // Phone những người được thuê
            //     service: [], // MS service co trong phong
            // },
            // {
            //     id: "5",
            //     ownerPhone: "",
            //     renters: [], // Phone những người được thuê
            //     service: [], // MS service co trong phong
            // },
            // {
            //     id: "6",
            //     ownerPhone: "",
            //     renters: [], // Phone những người được thuê
            //     service: [], // MS service co trong phong
            // },
            // {
            //     id: "7",
            //     ownerPhone: "",
            //     renters: [], // Phone những người được thuê
            //     service: [], // MS service co trong phong
            // },
            // {
            //     id: "8",
            //     ownerPhone: "",
            //     renters: [], // Phone những người được thuê
            //     service: [], // MS service co trong phong
            // },
            // {
            //     id: "9",
            //     ownerPhone: "",
            //     renters: [], // Phone những người được thuê
            //     service: [], // MS service co trong phong
            // }
        ]
    },
    reducers: {
        addRoom: (state, action) => {
            state.rooms.push(action.payload);
        },
        popRoomByID: (state, action) => {
            _id = action.payload;
            new_rooms = []
            for (let i = 0; i < state.rooms.length; ++i) {
                if (state.rooms[i].id.localeCompare(_id)) {
                    new_rooms.push(state.rooms[i])
                }
            }
            state.rooms = new_rooms;
        }
    }
})

export const { addRoom, popRoomByID } = roomsSlice.actions

export default roomsSlice.reducer