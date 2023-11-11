import {BaseService} from "../../common/services/BaseService";
import {JWTResponse} from "../DTO/JWTResponse";
import {UserData} from "../DTO/UserData";
import {SignInData} from "../DTO/SignInData";

export class IdentityService extends BaseService {
    constructor() {
        super('Identity/Account/');
    }

    async register(data: UserData): Promise<JWTResponse | undefined> {
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

    async signOut(JWTdata: JWTResponse) {
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

    async refreshToken(JWT: JWTResponse) {
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
