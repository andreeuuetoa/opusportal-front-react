import {IBaseEntity} from "../../common/domain/contracts/IBaseEntity";

export interface BookData extends IBaseEntity {
    title: string,
    authors: string
}
