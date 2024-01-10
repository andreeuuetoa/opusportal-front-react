import {IPostRoomProps} from "../domain/IPostRoomProps";
import React from "react";
import {EditRoomProps} from "./EditRoomProps";

const RoomNumberValues = (roomProps: IPostRoomProps | EditRoomProps) => {
    const eventHandler = (e: React.ChangeEvent) => {roomProps.handleChange(e.target as EventTarget & HTMLInputElement)};

    return {
        value: roomProps.roomData.roomNumber,
        type: "roomNumber",
        placeholder: "Ruumi number",
        autocomplete: "roomNumber",
        name: "roomNumber",
        onchange: eventHandler
    }
}

export default RoomNumberValues;
