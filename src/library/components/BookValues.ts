import React from "react";
import {BookProps} from "../domain/BookProps";

const BookValues = (bookProps: BookProps) => {
    const eventHandler = (e: React.ChangeEvent) => {bookProps.handleChange(e.target as EventTarget & HTMLInputElement)};

    return {
        value: bookProps.bookData.title,
        type: "book-name",
        placeholder: "Nimi",
        autocomplete: "book-name",
        name: "book-name",
        onchange: eventHandler
    };
}

export default BookValues;
