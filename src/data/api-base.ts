import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';

interface Entity {
    id: number;
}

class ApiBase<T extends Entity, C> {
    private axiosInstance: AxiosInstance;

    constructor(baseUrl: string) {
        this.axiosInstance = axios.create({ baseURL: baseUrl });
    }

    protected async http<R>(config: AxiosRequestConfig): Promise<R> {
        const response = await this.axiosInstance.request<R>(config);
        return response.data;
    }

    all(): AxiosPromise<T[]> {
        return this.http<T[]>({ method: 'get', url: '/' });
    }

    find(id: number): AxiosPromise<T> {
        return this.http<T>({ method: 'get', url: `/${id}` });
    }

    create(entity: C): AxiosPromise<T> {
        return this.http<T>({ method: 'post', url: '/', data: entity });
    }

    update(id: number, entity: C): AxiosPromise<T> {
        return this.http<T>({ method: 'put', url: `/${id}`, data: entity });
    }

    delete(id: number): AxiosPromise<void> {
        return this.http<void>({ method: 'delete', url: `/${id}` });
    }
}

export default ApiBase;