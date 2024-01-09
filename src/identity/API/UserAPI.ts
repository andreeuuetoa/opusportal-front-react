import {BaseEntityAPI} from "../../common/API/BaseEntityAPI";
import {UserData} from "../DTO/UserData";
import {JWTResponse} from "../DTO/JWTResponse";
import {UserDataToEdit} from "../DTO/UserDataToEdit";

export class UserAPI extends BaseEntityAPI<UserData> {
    constructor(setJWTResponse: ((data: JWTResponse | null) => void)) {
        super('identity/account/', setJWTResponse);
    }

    async updateUser(userId: string, newUserValues: UserDataToEdit) {
        try {
            const response = await this.axios.put<JWTResponse>('EditUser/' + userId, newUserValues);

            console.log(response);
            if (response.status === 200) {
                return response.data;
            }
            return undefined;
        } catch (error) {
            console.log('Error: ', (error as Error).message);
            return undefined;
        }
    }
}
