/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 Gọi các API đăng nhập, đăng ký, kích hoạt User
 yarn add axios
 */
import { SERVER_NAME, SERVER_PORT, APIResponse } from './apiParameters'
const API_REGISTER_USER = `${SERVER_NAME}:${SERVER_PORT}/users/registerUser`
export const registerUser = async (name, email, password) => {
    try {
        
        let response = await fetch(API_REGISTER_USER, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        })
        alert(`response = ${response}`)
        return new APIResponse(response.data, response.message, true) //success
    } catch (error) {
        return new APIResponse(null, error.message, false) //false
    } 
}