import {BaseEntityAPI} from "../../common/API/BaseEntityAPI";
import {ConcertData} from "../DTO/ConcertData";
import {JWTResponse} from "../../identity/DTO/JWTResponse";

export class ConcertAPI extends BaseEntityAPI<ConcertData> {
    constructor(setJWTResponse: ((data: JWTResponse | null) => void)) {
        super('concerts', setJWTResponse);
    }

    async createConcert(concertData: ConcertData) {
       try {
           const response = await this.axios.post<JWTResponse>('Create', concertData);

           console.log('Response: ', response);
           if (response.status === 200) {
               return response.data;
           }
           return undefined;
       } catch (error) {
           console.log(error);
           return undefined;
       }
    }
}
