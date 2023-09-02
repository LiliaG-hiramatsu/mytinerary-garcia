import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

const read_users = createAsyncThunk(
    'read_users',
    async() => {
        try {
            let data = await axios(apiUrl+'users')
            //console.log(data)
            return {
                users: data.data.response
            }
        } catch (error) {
            console.log(error)
            return {
                users: []
            }
        }
    }
)

const user_actions = { read_users }
export default user_actions