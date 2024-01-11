import {BaseAPI} from "./BaseAPI";
import {IBaseEntity} from "../domain/contracts/IBaseEntity";
import {AxiosError} from "axios";
import {IdentityAPI} from "../../identity/API/IdentityAPI";
import {JWTResponse} from "../../identity/DTO/JWTResponse";

export abstract class BaseEntityAPI<TEntity extends IBaseEntity> extends BaseAPI {
    protected constructor(baseURL: string, private setJwtResponse: ((data: JWTResponse | null) => void)) {
        super(baseURL);
    }

    async getAll(JWT: JWTResponse): Promise<TEntity[] | undefined> {
        try {
            const response = await this.axios.get<TEntity[] | undefined>('', {
                headers: {
                    'Authorization': 'Bearer ' + JWT.JWT
                }
            });

            this.axios.interceptors.request.use(request => {
                console.log(request.headers);
                return request;
            });

            if (response.status === 200) {
                return response.data;
            }
            return undefined;
        } catch (error) {
            if ((error as AxiosError).response?.status === 401) {
                let identityService = new IdentityAPI();
                let refreshedJWT = await identityService.refreshToken(JWT);

                if (refreshedJWT) {
                    this.setJwtResponse(refreshedJWT);
                    const [response] = await Promise.all([this.axios.get<TEntity[] | undefined>('', {
                        headers: {
                            'Authorization': 'Bearer ' + JWT.JWT
                        }
                    })]);
                    if (response.status === 200) {
                        return response.data;
                    }
                }
            }
            return undefined;
        }
    }

    async create(data: TEntity, JWT: JWTResponse) {
        try {
            const response = await this.axios.post<TEntity>('', data, {
                headers: {
                    'Authorization': 'Bearer ' + JWT.JWT
                }
            });

            console.log('Response: ', response);
            if (response.status === 201) {
                return response.data;
            }
            return undefined;
        } catch (error) {
            if ((error as AxiosError).response?.status === 401) {
                let identityService = new IdentityAPI();
                let refreshedJWT = await identityService.refreshToken(JWT);

                if (refreshedJWT) {
                    this.setJwtResponse(refreshedJWT);
                    const [response] = await Promise.all([this.axios.get<TEntity[] | undefined>('', {
                        headers: {
                            'Authorization': 'Bearer ' + JWT.JWT
                        }
                    })]);
                    if (response.status === 200) {
                        return response.data;
                    }
                }
            }
            return undefined;
        }
    }

    async update(id: string, data: TEntity, JWT: JWTResponse) {
        try {
            const response = await this.axios.put<TEntity>('', data, {
                headers: {
                    'Authorization': 'Bearer ' + JWT.JWT
                }
            });

            console.log('Response: ', response);
            if (response.status === 201) {
                return response.data;
            }
            return undefined;
        } catch (error) {
            if ((error as AxiosError).response?.status === 401) {
                let identityService = new IdentityAPI();
                let refreshedJWT = await identityService.refreshToken(JWT);

                if (refreshedJWT) {
                    this.setJwtResponse(refreshedJWT);
                    const [response] = await Promise.all([this.axios.get<TEntity[] | undefined>('', {
                        headers: {
                            'Authorization': 'Bearer ' + JWT.JWT
                        }
                    })]);
                    if (response.status === 200) {
                        return response.data;
                    }
                }
            }
            return undefined;
        }
    }

    async delete(id: string, JWT: JWTResponse) {
        try {
            const response = await this.axios.delete('', {
                headers: {
                    'Authorization': 'Bearer ' + JWT.JWT
                }
            });

            console.log('Response: ', response);
            if (response.status === 201) {
                return response.data;
            }
            return undefined;
        } catch (error) {
            if ((error as AxiosError).response?.status === 401) {
                let identityService = new IdentityAPI();
                let refreshedJWT = await identityService.refreshToken(JWT);

                if (refreshedJWT) {
                    this.setJwtResponse(refreshedJWT);
                    const [response] = await Promise.all([this.axios.get<TEntity[] | undefined>('', {
                        headers: {
                            'Authorization': 'Bearer ' + JWT.JWT
                        }
                    })]);
                    if (response.status === 200) {
                        return response.data;
                    }
                }
            }
            return undefined;
        }
    }
}
