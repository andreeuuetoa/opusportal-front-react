import {BaseAPI} from "../../common/API/BaseAPI";
import {JWTResponse} from "../DTO/JWTResponse";
import {RegisterData} from "../DTO/RegisterData";
import {SignInData} from "../DTO/SignInData";

export class IdentityAPI extends BaseAPI {
    constructor() {
        super('Identity/Account/');
    }

    async register(data: RegisterData): Promise<JWTResponse | undefined> {
        try {
            const response = await this.axios.post<JWTResponse>('Register', data);

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

    async signIn(data: SignInData): Promise<JWTResponse | undefined> {
        try {
            const response = await this.axios.post<JWTResponse>('SignIn', data);

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

    async signOut(JWTdata: JWTResponse): Promise<true | undefined> {
        try {
            const response = await this.axios.post(
                'SignOut',
                JWTdata,
                {
                    headers: {
                        'Authorization': 'Bearer ' + JWTdata.JWT
                    }
                }
            );

            console.log('Sign-out response: ', response);
            if (response.status === 200) {
                return true;
            }
            return undefined;
        } catch (error) {
            console.log('Error: ', (error as Error).message);
            return undefined;
        }
    }

    async refreshToken(JWT: JWTResponse): Promise<JWTResponse | undefined> {
        console.log(JWT);

        try {
            const refreshTokenResponse = await this.axios.post<JWTResponse>(
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
