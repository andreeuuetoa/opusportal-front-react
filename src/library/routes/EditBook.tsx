import React, {useContext, useState} from "react";
import {JWTContext} from "../../root/Root";
import {BookData} from "../DTO/BookData";
import {BookAPI} from "../API/BookAPI";
import {useNavigate, useParams} from "react-router-dom";
import EditBookView from "../views/EditBookView";
import {AdminNavbar} from "../../common/viewparts/AdminNavbar";

const EditBook = () => {
    const {id} = useParams();

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
        const updatedUser = await bookAPI.update(id!, values, JWTResponse);

        if (updatedUser === undefined) {
            setValidationErrors(["Vabandust, midagi läks valesti. Raamatut ei saadud uuendada."]);
            return;
        }

        navigate("/raamatud");
    };

    return (
        <>
            <AdminNavbar/>
            <EditBookView bookData={values} onSubmit={onSubmit} handleChange={handleChange}
                          validationErrors={validationErrors}/>
        </>
    );
}

export default EditBook;
