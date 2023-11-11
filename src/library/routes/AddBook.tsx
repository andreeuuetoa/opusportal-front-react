import React, {useContext, useState} from "react";
import {IBook} from "../DTO/IBook";
import {AddBookView} from "../views/AddBookView";
import {JWTContext} from "../../root/Root";

export const AddBook = () => {
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
        <AddBookView bookData={values} onSubmit={onSubmit} handleChange={handleChange} validationErrors={validationErrors}/>
    );
}
