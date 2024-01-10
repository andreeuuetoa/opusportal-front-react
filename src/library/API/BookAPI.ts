import {BaseEntityAPI} from "../../common/API/BaseEntityAPI";
import {BookData} from "../DTO/BookData";
import {JWTResponse} from "../../identity/DTO/JWTResponse";

export class BookAPI extends BaseEntityAPI<BookData> {
    constructor(setJWTResponse: ((data: JWTResponse | null) => void)) {
        super('books', setJWTResponse);
    }

    async updateBook(bookId: string, newBookValues: BookData) {
        try {
            const response = await this.axios.put<JWTResponse>('EditBook/' + bookId, newBookValues);

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
