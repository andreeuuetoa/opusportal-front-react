import {BaseEntityService} from "../../common/services/BaseEntityService";
import {IBook} from "../DTO/IBook";
import {IJWTResponse} from "../../identity/DTO/IJWTResponse";

export class BookService extends BaseEntityService<IBook> {
    constructor(setJWTResponse: ((data: IJWTResponse | null) => void)) {
        super('Books', setJWTResponse);
    }
}
