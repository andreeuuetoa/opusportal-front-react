import {BookProps} from "../domain/BookProps";
import React from "react";

const AuthorsValues = (bookProps: BookProps) => {
    const eventHandler = (e: React.ChangeEvent) => {bookProps.handleChange(e.target as EventTarget & HTMLInputElement)};

    return {
        value: bookProps.bookData.authors,
        type: "authors",
        placeholder: "Autorid",
        autocomplete: "authors",
        name: "authors",
        onchange: eventHandler
    }
}

export default AuthorsValues;
