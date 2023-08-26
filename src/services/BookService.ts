import {BaseEntityService} from "./BaseEntityService";
import {IBook} from "../domain/contracts/library/IBook";
import {IJWTResponse} from "../DTO/IJWTResponse";

export class BookService extends BaseEntityService<IBook> {
    constructor(setJWTResponse: ((data: IJWTResponse | null) => void)) {
        super('Books', setJWTResponse);
    }
}