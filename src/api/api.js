import * as axios from 'axios';

const instance = axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY':'d538c08b-0a5b-4fe6-b5ae-73c0051f7975'
    }
})
export const usersAPI ={
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response=>{
            return response.data;
        })
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response=>{
            return response.data;
        })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`).then(response=>{
            return response.data;
        })
    }
};
export const authAPI ={
    getAuthMe() {
        return instance.get(`auth/me`).then(response=>{
            return response.data;
        })
    },
};
export const profileAPI ={
    getUserProfile(userId) {
        return instance.get(`profile/`+userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/`+userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
};



