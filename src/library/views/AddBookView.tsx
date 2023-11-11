import React, {useState} from "react";
import {IPostBooksProps} from "../domain/IPostBooksProps";
import {FormPart} from "../../common/viewparts/FormPart";

export const AddBookView = (props: IPostBooksProps) => {
    const eventHandler = (e: React.ChangeEvent) => {props.handleChange(e.target as EventTarget & HTMLInputElement)};

    const [bookName, setBookName] = useState("");

    return (
        <form id="add-book-form" method="post">
            <h2>Lisa raamat.</h2>
            <hr/>

            <ul style={{'display': props.validationErrors.length === 0 ? 'none' : ''}}>
                <li>
                    {props.validationErrors.length > 0 ? props.validationErrors[0] : ''}
                </li>
            </ul>

            <FormPart fieldElements={{
                value: props.bookData.name,
                type: "book-name",
                placeholder: "Nimi",
                autocomplete: "book-name",
                name: "book-name",
                onchange: eventHandler
            }} />
            <FormPart fieldElements={{
                value: props.bookData.authors,
                type: "authors",
                placeholder: "Autorid",
                autocomplete: "authors",
                name: "authors",
                onchange: eventHandler
            }} />
            <button
                onClick={(e) => props.onSubmit(e)}
                id="registerSubmit" className="w-100 btn btn-lg btn-primary">
                Register
            </button>
        </form>
    );
}
