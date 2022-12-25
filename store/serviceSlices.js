import { createSlice } from '@reduxjs/toolkit'

const service_type = {
    "INTERNET": 0,
    "ELECTRICITY": 1,
    "WATER": 2,
    "GARBAGE-COLLECTING": 3
}

export const serviceSlice = createSlice({
    name: 'services',
    initialState: {
        services: [
            {
                id: "service1",
                type: service_type["INTERNET"],
                cost: 300000,
                renterPhone: "111111111",
                time_start: "12-23-2022" 
            },
            {
                id: "service2",
                type: service_type["INTERNET"],
                cost: 300000,
                renterPhone: "222222222",
                time_start: "12-23-2022"  
            },
            {
                id: "service3",
                type: service_type["INTERNET"],
                cost: 300000,
                renterPhone: "444444444",
                time_start: "12-12-2022"  
            },
            {
                id: "service4",
                type: service_type["ELECTRICITY"],
                cost: 500000,
                renterPhone: "111111111",
                time_start: "12-23-2022"  
            },
            {
                id: "service5",
                type: service_type["WATER"],
                cost: 500000,
                renterPhone: "111111111",
                time_start: "12-24-2022"  
            },
            {
                id: "service6",
                type: service_type["GARBAGE-COLLECTING"],
                cost: 100000,
                renterPhone: "111111111",
                time_start: "12-21-2022"  
            },
            {
                id: "service7",
                type: service_type["ELECTRICITY"],
                cost: 500000,
                renterPhone: "222222222",
                time_start: "12-22-2022"  
            },
            {
                id: "service8",
                type: service_type["WATER"],
                cost: 500000,
                renterPhone: "222222222",
                time_start: "12-11-2022"  
            },
            {
                id: "service9",
                type: service_type["GARBAGE-COLLECTING"],
                cost: 100000,
                renterPhone: "222222222",
                time_start: "12-20-2022"  
            },
            {
                id: "service10",
                type: service_type["ELECTRICITY"],
                cost: 500000,
                renterPhone: "444444444",
                time_start: "12-19-2022"  
            },
            {
                id: "service11",
                type: service_type["WATER"],
                cost: 500000,
                renterPhone: "444444444",
                time_start: "12-18-2022"  
            }
        ]
    },
    reducers: {
        initServices: (state, action) => {
            state.services = action.payload;
        },
        addService: (state, action) => {
            state.services.push(action.payload);
        },
        popService: (state, action) => {
            _id= action.payload;
            let index = -1;
            for (let i = 0; i < state.services.length; ++i) {
                if (state.services[i].id.localeCompare(_id) == 0) {
                    index = i;
                    break;
                }
            }
            state.services.splice(index, 1);
        }
    }
})

export const { addService, popService, initServices} = serviceSlice.actions
export default serviceSlice.reducer