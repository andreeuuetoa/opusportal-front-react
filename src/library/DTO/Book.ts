import {IBook} from "../contracts/library/IBook";
import {BaseEntity} from "../BaseEntity";

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