import {BaseService} from "./BaseService";
import {IJWTResponse} from "../DTO/IJWTResponse";
import {IRegisterData} from "../DTO/IRegisterData";
import {ISignInData} from "../DTO/ISignInData";
import {data} from "jquery";

export class IdentityService extends BaseService {
    constructor() {
        super('Identity/Account/');
    }

    async register(data: IRegisterData): Promise<IJWTResponse | undefined> {
        try {
            const response = await this.axios.post<IJWTResponse>('Register', data);

            console.log('Register response: ', response);
            if (response.status === 200) {
                return response.data;
            }
            return undefined;
        } catch (error) {
            console.log('Error: ', (error as Error).message);
            return undefined;
        }
    }

    async signIn(data: ISignInData): Promise<IJWTResponse | undefined> {
        try {
            const response = await this.axios.post<IJWTResponse>('SignIn', data);

            console.log('Sign-in response: ', response);
            if (response.status === 200) {
                return response.data;
            }
            return undefined;
        } catch (error) {
            console.log('Error: ', (error as Error).message);
            return undefined;
        }
    }

    async refreshToken(JWT: IJWTResponse) {
        console.log(JWT);

        try {
            const refreshTokenResponse = await this.axios.post<IJWTResponse>(
                'refreshToken',
                JWT
            );

            console.log('Refresh token response: ', refreshTokenResponse);

            if (refreshTokenResponse.status === 200) {
                return refreshTokenResponse.data;
            }
            return undefined;
        } catch (error) {
            console.log('Error: ', (error as Error).message);
            return undefined;
        }
    }
}