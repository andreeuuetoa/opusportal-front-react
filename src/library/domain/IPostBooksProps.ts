import React from "react";
import {IBook} from "../DTO/IBook";

export interface IPostBooksProps {
    bookData: IBook;

    handleChange: (target:
                       EventTarget & HTMLInputElement) => void;

    onSubmit: (target: React.MouseEvent) => void;

    validationErrors: string[];
}
