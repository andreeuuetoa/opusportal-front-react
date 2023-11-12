import React from "react";
import {UserData} from "../../DTO/UserData";

export interface UserProps {
    values: UserData;

    handleChange: (target:
        EventTarget & HTMLInputElement) => void;

    onSubmit: (target: React.MouseEvent) => void;

    validationErrors: string[];
}
