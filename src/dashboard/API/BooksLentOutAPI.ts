import {BaseAPI} from "../../common/API/BaseAPI";
import {JWTResponse} from "../../identity/DTO/JWTResponse";
import BookLentOutData from "../DTO/BookLentOutData";
import {AxiosError} from "axios";
import {IdentityAPI} from "../../identity/API/IdentityAPI";

class BooksLentOutAPI extends BaseAPI {
    constructor(private setJwtResponse: ((data: JWTResponse | null) => void)) {
        super('');
    }

    async getAllWithUserId(JWT: JWTResponse): Promise<BookLentOutData[] | undefined> {
        try {
            return this.makeGetAllWithUserIdRequest(JWT);
        } catch (error) {
            if ((error as AxiosError).response?.status === 401) {
                let identityService = new IdentityAPI();
                let refreshedJWT = await identityService.refreshToken(JWT);

                if (refreshedJWT) {
                    this.setJwtResponse(refreshedJWT);
                    return this.makeGetAllWithUserIdRequest(refreshedJWT);
                }
            }
            return undefined;
        }
    }

    async makeGetAllWithUserIdRequest(JWT: JWTResponse): Promise<BookLentOutData[] | undefined> {
        const response = await this.axios.get<BookLentOutData[] | undefined>('usersBooks', {
            headers: {
                'Authorization': 'Bearer ' + JWT.JWT
            }
        });

        if (response.status === 200) {
            return response.data;
        }
        return undefined;
    }
}

export default BooksLentOutAPI;
