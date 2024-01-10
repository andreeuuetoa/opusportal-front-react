import AddRoomView from "../views/AddRoomView";
import React, {useContext, useState} from "react";
import {JWTContext} from "../../root/Root";
import {useNavigate} from "react-router-dom";
import {RoomAPI} from "../API/RoomAPI";
import {RoomData} from "../DTO/RoomData";

const AddRoom = () => {
    const {setJWTResponse} = useContext(JWTContext);

    const [values, setValues] = useState({
        roomNumber: ""
    } as RoomData);

    const [validationErrors, setValidationErrors] = useState([] as string[]);

    const handleChange = (target: EventTarget & HTMLInputElement) => {
        setValues({...values, [target.name]: target.value});
    };

    const roomAPI = new RoomAPI(setJWTResponse!);
    const navigate = useNavigate();

    const onSubmit = async (event: React.MouseEvent) => {
        event.preventDefault();

        if (values.roomNumber.length === 0) {
            setValidationErrors(["Ruumi number ei saa olla tühi!"]);
            return;
        }

        // Remove errors
        setValidationErrors([]);

        await roomAPI.create(values);

        navigate("/ruumid");
    };

    return (
        <AddRoomView roomData={values} onSubmit={onSubmit} handleChange={handleChange} validationErrors={validationErrors}/>
    );
}

export default AddRoom;