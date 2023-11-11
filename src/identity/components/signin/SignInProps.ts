import React from "react";
import {SignInData} from "../../DTO/SignInData";

export interface SignInProps {
    values: SignInData;

    handleChange: (target:
                       EventTarget & HTMLInputElement) => void;

    onSubmit: (target: React.MouseEvent) => void;

    validationErrors: string[];
}
