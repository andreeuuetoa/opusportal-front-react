import React from "react";
import {ISignInData} from "../../../DTO/ISignInData";

export interface ISignInProps {
    values: ISignInData;

    handleChange: (target:
                       EventTarget & HTMLInputElement) => void;

    onSubmit: (target: React.MouseEvent) => void;

    validationErrors: string[];
}