import React from "react";
import {IRegisterData} from "../../DTO/IRegisterData";

export interface IRegisterProps {
    values: IRegisterData;

    handleChange: (target:
        EventTarget & HTMLInputElement) => void;

    onSubmit: (target: React.MouseEvent) => void;

    validationErrors: string[];
}
