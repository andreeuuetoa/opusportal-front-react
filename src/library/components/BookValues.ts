import React from "react";
import {IPostBooksProps} from "../domain/IPostBooksProps";

const BookValues = (bookProps: IPostBooksProps) => {
    const eventHandler = (e: React.ChangeEvent) => {bookProps.handleChange(e.target as EventTarget & HTMLInputElement)};

    return {
        value: bookProps.bookData.name,
        type: "book-name",
        placeholder: "Nimi",
        autocomplete: "book-name",
        name: "book-name",
        onchange: eventHandler
    };
}

export default BookValues;
