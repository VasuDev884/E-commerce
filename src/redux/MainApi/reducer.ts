import { AllDataApi } from "./api";
import { InitialState } from "./type";
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState:InitialState = {
    isLoading:false,
    LoadData :[],
    setViewData: [],
    AddCart:[]
}

export const AllData = createSlice({
    name:'Data',
    initialState,
    reducers:{
        ViewProduct: (state: any, action: PayloadAction<Array<any>>) => {
            state.setViewData = action?.payload
          },
          AddCartData:(state:any , action:PayloadAction<Array<any>>)=>{
            state.AddCart = action?.payload
          }
    },
    extraReducers:{
        [AllDataApi.pending.toString()]:(state)=>{
            state.isLoading = true
        },
        [AllDataApi.fulfilled.toString()]:(
            state,
            action:PayloadAction<Array<any>>
        )=>{
            state.isLoading = false
            state.LoadData = action.payload
        },
        [AllDataApi.rejected.toString()]:(state)=>{
            state.isLoading = false
        },
    }
})

export default AllData.reducer