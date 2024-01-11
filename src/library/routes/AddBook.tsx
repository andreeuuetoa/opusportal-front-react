import React, {useContext, useState} from "react";
import {BookData} from "../DTO/BookData";
import {AddBookView} from "../views/AddBookView";
import {JWTContext} from "../../root/Root";
import {BookAPI} from "../API/BookAPI";
import {useNavigate} from "react-router-dom";

export const AddBook = () => {
    const {setJWTResponse} = useContext(JWTContext);

    const [values, setValues] = useState({
        title: "",
        authors: ""
    } as BookData);

    const [validationErrors, setValidationErrors] = useState([] as string[]);

    const handleChange = (target: EventTarget & HTMLInputElement) => {
        setValues({...values, [target.name]: target.value});
    };

    const bookAPI = new BookAPI(setJWTResponse!);
    const navigate = useNavigate();

    const onSubmit = async (event: React.MouseEvent) => {
        event.preventDefault();

        if (values.title.length === 0) {
            setValidationErrors(["Raamatu pealkiri ei saa olla tühi!"]);
            return;
        }

        if (values.authors.length === 0) {
            setValidationErrors(["Raamatul peab olema autor(id)!"]);
            return;
        }

        // Remove errors
        setValidationErrors([]);

        await bookAPI.create(values);

        navigate("/raamatud");
    };

    return (
        <AddBookView bookData={values} onSubmit={onSubmit} handleChange={handleChange} validationErrors={validationErrors}/>
    );
}
