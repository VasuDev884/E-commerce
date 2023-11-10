import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {LoadDataPayload} from './type'

export const AllDataApi = createAsyncThunk(
    'AllInOne',
    async({Limit}:LoadDataPayload):Promise<any> =>{
const res = await axios.get(
    `https://fakestoreapi.com/products?limit=${Limit}`
)
return res?.data
    }
)