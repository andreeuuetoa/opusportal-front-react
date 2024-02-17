import {useParams} from "react-router-dom";
import React, {useContext, useState} from "react";
import {JWTContext} from "../../root/Root";
import {RoomData} from "../DTO/RoomData";
import {RoomAPI} from "../API/RoomAPI";
import EditRoomView from "../views/EditRoomView";
import {AdminNavbar} from "../../common/viewparts/AdminNavbar";

const EditRoom = () => {
    const {id} = useParams();

    const [values, setValues] = useState({
        roomNumber: ""
    } as RoomData);

    const [validationErrors, setValidationErrors] = useState([] as string[]);

    const handleChange = (target: EventTarget & HTMLInputElement) => {
        setValues({...values, [target.name]: target.value});
    };

    const {JWTResponse, setJWTResponse} = useContext(JWTContext);

    const roomAPI = new RoomAPI(setJWTResponse!);

    const onSubmit = async (event: React.MouseEvent) => {
        event.preventDefault();

        if (values.roomNumber.length === 0) {
            setValidationErrors(["Ruumi number ei saa olla tühi!"]);
            return;
        }

        // Remove errors
        setValidationErrors([]);

        if (JWTResponse === null) {
            setValidationErrors(["No JWT!"]);
            return;
        }
        const updatedRoom = await roomAPI.update(id!, values, JWTResponse);

        if (updatedRoom === undefined) {
            setValidationErrors(["Oops, something went wrong. Unable to update user."]);
            return;
        }
    }

    return (
        <>
            <AdminNavbar/>
            <EditRoomView roomData={values} handleChange={handleChange} onSubmit={onSubmit}
                          validationErrors={validationErrors}/>
        </>
    );
}

export default EditRoom;
