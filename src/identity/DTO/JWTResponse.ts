import {UserData} from "./UserData";

export interface JWTResponse {
    JWT: string;
    refreshToken: string;
    userData: UserData;
}
