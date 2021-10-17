export interface IUser {
    name: string
    email: string,
    id?: number,
    token: string,
};

export interface CreateUserDTO {
    name: string,
    email: string,
    password: string,
};

export interface LoginUser {
    email: string,
    password: string,
}