import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

const signup = createAsyncThunk(
    'signup',
    async(obj) => {
        try {
            let data = await axios.post(apiUrl+'auth/register', obj.data)
            //console.log(data)
            return {
                user: data.data.response,
                messages: []
            }
        } catch (error) {
            console.log(error)
            return {
                user: {},
                messages: error.response.data.messages || [error.response.data.message]
            }
        }
    }
)

const signin = createAsyncThunk(
    'signin',
    async(obj) => {
        try {
            let data = await axios.post(apiUrl+'auth/signin', obj.data)
            //console.log(data)
            localStorage.setItem('token', data.data.response.token)
            return {
                user: data.data.response.user,
                token: data.data.response.token,
                messages: []
            }
        } catch (error) {
            console.log(error)
            return {
                user: {},
                token: '',
                messages: error.response.data.messages || [error.response.data.message]
                //se configuran los dos errores (uno de JOI y otro del middleware de autenticacion)
                //el del middleware lo convierto en array
            }
        }
    }
)

const signin_token = createAsyncThunk(
    'signin_token',
    async() => {
        try {
            let token = localStorage.getItem('token')
            let authorization = { headers: { 'Authorization': `Bearer ${token}` } }
            let data = await axios.post(apiUrl+'auth/token', null, authorization)
            //console.log(data)
            localStorage.setItem('token', data.data.response.token)
            return {
                user: data.data.response.user,
                token: data.data.response.token
            }
        } catch (error) {
            console.log(error)
            return {
                user: {},
                token: ''
            }
        }
    }
)

const logout = createAsyncThunk(
    'logout',
    async() => {
        try {
            let token = localStorage.getItem('token')
            let authorization = { headers: { 'Authorization': `Bearer ${token}` } }
            let data = await axios.post(apiUrl+'auth/logout', null, authorization)
            //console.log(data)
            localStorage.removeItem('token')
            return {
                user: {},
                token: ''
            }
        } catch (error) {
            console.log(error)
            return {
                user: {},
                token: ''
            }
        }
    }
)

const user_actions = { signup, signin, signin_token, logout }
export default user_actions