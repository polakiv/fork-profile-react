import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3"
    }
});
 

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return axios.get(`https://wikirip.site/index.php?route=api/getthree&page=${currentPage}&limit=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return axios.get(`https://wikirip.site/index.php?route=api/addwishlist&customer_id=3&product_id=${userId}`)
    },
    unfollow(userId) {
        return axios.get(`https://wikirip.site/index.php?route=api/removewishlist&customer_id=3&product_id=${userId}`)
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId);
    }
} 

export const userHsAPI = {
    getUserHs(currentPage = 1, pageSize = 10) {
        return axios.get(`https://wikirip.site/index.php?route=api/getthree&page=${currentPage}&limit=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userHId) {
        return axios.post(`https://wikirip.site/index.php?route=api/addwishlist&customer_id=3&product_id=${userHId}`)
    },
    unfollow(userHId) {
        return axios.delete(`https://wikirip.site/index.php?route=api/removewishlist&customer_id=3&product_id=${userHId}`)
    },
    getProfile(userHId) {
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userHId);
    }
} 

export const profileAPI = {
    getProfile(userId) {
        
        return axios.get(`https://wikirip.site/index.php?route=api/profile&product_id=` + userId);
    },
    getStatus(userId) {
        return axios.get(`https://wikirip.site/index.php?route=api/profile&product_id=` + userId);
    },
    updateStatus(status) {
        return axios.put(`https://wikirip.site/index.php?route=api/profile&product_id=`, { status: status });
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile );
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe });
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}


 