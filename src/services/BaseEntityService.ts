import {BaseService} from "./BaseService";
import {IBaseEntity} from "../domain/contracts/IBaseEntity";
import {AxiosError} from "axios";
import {IdentityService} from "./IdentityService";
import {IJWTResponse} from "../DTO/IJWTResponse";

export abstract class BaseEntityService<TEntity extends IBaseEntity> extends BaseService {
    protected constructor(baseURL: string, private setJwtResponse: ((data: IJWTResponse | null) => void)) {
        super(baseURL);
    }

    async getAll(JWT: IJWTResponse): Promise<TEntity[] | undefined> {
        try {
            const [response] = await Promise.all([this.axios.get<TEntity[] | undefined>('', {
                headers: {
                    'Authorization': 'Bearer ' + JWT.JWT
                }
            })]);

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
                let identityService = new IdentityService();
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