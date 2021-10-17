import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { AppStore } from "../redux/store";
const baseURL = 'http://localhost:3000';

let store: AppStore;

export const injectStore = (_store: AppStore): void => {
    store = _store;
};

class ApiClient {
    private api: AxiosInstance

    constructor() {
        this.api = axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json',
            }
        })
        this.api.interceptors.request.use((config) => {
            const token = store.getState().user.token;
            if (token !== null) {
                config.headers.Authorization = `${token}`;
            }
            return config;
        })
    }
    async post(url: string, { data }: AxiosRequestConfig) {
        return this.api.post(url, data);
    }

    async get(url: string) {
        return this.api.get(url);
    }

    async put(url: string, { data }: AxiosRequestConfig) {
        return this.api.put(url, data);
    }

    async delete(url: string) {
        return this.api.delete(url);
    }
}

export default new ApiClient();