import React from "react";
import {RegisterData} from "../../DTO/RegisterData";
import {UserData} from "../../DTO/UserData";

export interface RegisterUserProps {
    newUserData: RegisterData;

    teachers: UserData[];

    handleChange: (target:
        EventTarget & HTMLInputElement) => void;

    onSubmit: (target: React.MouseEvent) => void;

    validationErrors: string[];
}
