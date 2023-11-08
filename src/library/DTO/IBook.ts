import {IBaseEntity} from "../../common/domain/contracts/IBaseEntity";

export interface IBook extends IBaseEntity {
    name: string,
    authors: string,
    yearReleased: number
}
