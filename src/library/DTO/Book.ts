import {IBook} from "./IBook";
import {BaseEntity} from "../../common/domain/BaseEntity";

export class Book extends BaseEntity implements IBook {
    name: string;
    authors: string;
    yearReleased: number;

    constructor(name: string, authors: string, yearReleased: number) {
        super();
        this.name = name;
        this.authors = authors;
        this.yearReleased = yearReleased;
    }
}
