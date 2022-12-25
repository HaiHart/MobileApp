import { createSlice } from '@reduxjs/toolkit'
import { createAssetAsync } from 'expo-media-library';

const noti_type = ["Tiền nhà", "Dịch vụ", "HĐ"]

export const roomsSlice = createSlice({
    name: 'rooms',
    initialState: {
        rooms: [
            {
                id: "room1",
                ownerPhone: "000000000",
                renters: ["111111111"],
                service: [
                    "service1",
                    "service5",
                    "service6",
                    "service7",
                ]
            },
            {
                id: "room2",
                ownerPhone: "000000000",
                renters: ["222222222", "333333333"],
                services: [
                    "service2",
                    "service7",
                    "service8",
                    "service9"
                ]
            },
            {
                id: "room3",
                ownerPhone: "000000000",
                renters: ["444444444"],
                services: [
                    "service3",
                    "service10",
                    "service11"
                ]
            },
        ]
    },
    reducers: {
        initRooms: (state, action) => {
            state.rooms = action.payload;
        },
        addRoom: (state, action) => {
            state.rooms.push({
                id: `room${state.rooms.length + 1}`,
                renters: action.payload.renters,
                ownerPhone: action.payload.ownerPhone,
                services: action.payload.services,
            });
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

export const { addRoom, popRoomByID, initRooms} = roomsSlice.actions

export default roomsSlice.reducer