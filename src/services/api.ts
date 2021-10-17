import { AxiosPromise } from "axios";
import { IColumn } from "../redux/column";
import { CreateUserDTO, LoginUser, IUser } from "../redux/user/types"
import ApiClient from "./ApiClient"

export const signUp = (data: CreateUserDTO): AxiosPromise<IUser> => {
    return ApiClient.post('/auth/registration', { data });
}

export const signIn = (data: LoginUser): AxiosPromise<IUser> => {
    return ApiClient.post('/auth/login', { data });
}

export const getColumns = (id: number): AxiosPromise<IColumn[]> => {
    return ApiClient.get(`/users/${id}/column`);
}