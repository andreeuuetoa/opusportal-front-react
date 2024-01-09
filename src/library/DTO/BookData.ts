import {IBaseEntity} from "../../common/domain/contracts/IBaseEntity";

export interface BookData extends IBaseEntity {
    name: string,
    authors: string
}
