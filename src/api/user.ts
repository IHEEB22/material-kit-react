import axios, { AxiosResponse } from 'axios';

// Assuming the shape of the request data for login and signup
interface AuthRequest {
    email: string;
    password: string;
    username?: string; // Assuming username is only for signup
}

// Assuming the shape of the response data for login and signup
interface AuthResponse {
    token: string;
    user: {
        id: string;
        email: string;
        username?: string;
    };
}

// Assuming the shape of the profile fetch response
interface ProfileResponse {
    id: string;
    email: string;
    username: string;
}

// Typed function for login
export const apiLogin = (request_data: AuthRequest): Promise<AxiosResponse<AuthResponse>> => {
    return axios.post('/api/users/register', request_data);
};

// Typed function for fetching the profile
export const apiFetchProfile = (): Promise<AxiosResponse<ProfileResponse>> => {
    return axios.get('/api/v1/me');
};

// Typed function for signup
export const apiSignUp = (request_data: AuthRequest): Promise<AxiosResponse<AuthResponse>> => {
    return axios.post('/api/v1/register', request_data);
};
