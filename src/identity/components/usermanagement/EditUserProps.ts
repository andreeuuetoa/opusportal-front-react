import {UserDataToEdit} from "../../DTO/UserDataToEdit";
import React from "react";

export interface EditUserProps {
    newUserData: UserDataToEdit;

    handleChange: (target:
                       EventTarget & HTMLInputElement) => void;

    onSubmit: (target: React.MouseEvent) => void;

    validationErrors: string[];
}
