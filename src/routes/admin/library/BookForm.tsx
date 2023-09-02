import React, {useContext, useState} from "react";
import {IBook} from "../../../domain/contracts/library/IBook";
import {BookFormView} from "./BookFormView";
import {BookService} from "../../../services/BookService";
import {JWTContext} from "../../Root";

export const BookForm = () => {
    const {JWTResponse, setJWTResponse} = useContext(JWTContext);

    const [values, setValues] = useState({
        name: "",
        authors: "",
        yearReleased: 0
    } as IBook);

    const [validationErrors, setValidationErrors] = useState([] as string[]);

    const handleChange = (target: EventTarget & HTMLInputElement) => {
        setValues({...values, [target.name]: target.value});
    };

    const onSubmit = async (event: React.MouseEvent) => {

    };

    return (
        <BookFormView bookData={values} onSubmit={onSubmit} handleChange={handleChange} validationErrors={validationErrors}/>
    );
}
