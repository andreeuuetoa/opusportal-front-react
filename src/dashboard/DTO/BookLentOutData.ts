import {IBaseEntity} from "../../common/domain/contracts/IBaseEntity";
import {BookData} from "../../library/DTO/BookData";

interface BookLentOutData extends IBaseEntity {
    book: BookData;
    returnAt: Date;
}

export default BookLentOutData;
