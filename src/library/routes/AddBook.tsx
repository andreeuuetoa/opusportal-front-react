import React, {useContext, useState} from "react";
import {BookData} from "../DTO/BookData";
import {AddBookView} from "../views/AddBookView";
import {JWTContext} from "../../root/Root";
import {BookAPI} from "../API/BookAPI";

export const AddBook = () => {
    const {JWTResponse, setJWTResponse} = useContext(JWTContext);

    const [values, setValues] = useState({
        name: "",
        authors: ""
    } as BookData);

    const [validationErrors, setValidationErrors] = useState([] as string[]);

    const handleChange = (target: EventTarget & HTMLInputElement) => {
        setValues({...values, [target.name]: target.value});
    };

    const bookAPI = new BookAPI(setJWTResponse!);

    const onSubmit = async (event: React.MouseEvent) => {
        event.preventDefault();

        if (values.name.length === 0 ||
            values.authors.length === 0) {
            setValidationErrors(["Bad input values!"]);
            return;
        }

        // Remove errors
        setValidationErrors([]);

        await bookAPI.create(values);
    };

    return (
        <AddBookView bookData={values} onSubmit={onSubmit} handleChange={handleChange} validationErrors={validationErrors}/>
    );
}
