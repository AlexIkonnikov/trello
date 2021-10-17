import { createAsyncThunk } from "@reduxjs/toolkit";
import { signIn, signUp } from "../../services/api";
import { CreateUserDTO, LoginUser } from "./types";

export const signUpRequest = createAsyncThunk(
    'user/signUpRequest',
    async (data: CreateUserDTO) => {
        const response = await signUp(data);
        return response.data;
    }
);

export const signInRequest = createAsyncThunk(
    'user/signInRequest',
    async (data: LoginUser) => {
        const response = await signIn(data);
        return response.data;
    }
);