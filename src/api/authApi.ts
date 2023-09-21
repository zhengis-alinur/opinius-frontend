import { User } from '../types';
import { rootApi } from './rootApi';

export interface UserResponse {
    user: User;
    token: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface SignupRequest {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const authApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<UserResponse, LoginRequest>({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        isAuthenticated: builder.query<User, void>({
            query: () => ({
                url: '/auth/isAuthenticated',
            }),
        }),
        signup: builder.mutation<UserResponse, SignupRequest>({
            query: (credentials) => ({
                url: '/auth/signup',
                method: 'POST',
                body: { ...credentials },
            }),
        }),
    }),
});

export const { useLoginMutation, useSignupMutation, useIsAuthenticatedQuery } = authApi;
