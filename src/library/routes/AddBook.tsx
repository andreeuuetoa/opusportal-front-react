import React, {useContext, useState} from "react";
import {BookData} from "../DTO/BookData";
import {AddBookView} from "../views/AddBookView";
import {JWTContext} from "../../root/Root";
import {BookAPI} from "../API/BookAPI";
import {useNavigate} from "react-router-dom";
import {AdminNavbar} from "../../common/viewparts/AdminNavbar";

export const AddBook = () => {
    const {JWTResponse, setJWTResponse} = useContext(JWTContext);

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

        if (JWTResponse === null) {
            setValidationErrors(["No JWT!"]);
            return;
        }
        await bookAPI.create(values, JWTResponse);

        navigate("/raamatud");
    };

    return (
        <>
            <AdminNavbar/>
            <AddBookView bookData={values} onSubmit={onSubmit} handleChange={handleChange}
                         validationErrors={validationErrors}/>
        </>
    );
}
