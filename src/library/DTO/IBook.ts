import {IBaseEntity} from "../IBaseEntity";

export interface IBook extends IBaseEntity {
    name: string,
    authors: string,
    yearReleased: number
}