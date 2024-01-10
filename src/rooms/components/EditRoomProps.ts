import React from "react";
import {RoomData} from "../DTO/RoomData";

export interface EditRoomProps {
    roomData: RoomData;

    handleChange: (target:
                       EventTarget & HTMLInputElement) => void;

    onSubmit: (target: React.MouseEvent) => void;

    validationErrors: string[];
}
