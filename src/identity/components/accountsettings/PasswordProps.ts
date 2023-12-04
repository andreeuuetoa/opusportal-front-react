import React from "react";
import {PasswordData} from "../../DTO/PasswordData";

export interface PasswordProps {
    values: PasswordData;

    handleChange: (target:
                       EventTarget & HTMLInputElement) => void;

    onSubmit: (target: React.MouseEvent) => void;

    validationErrors: string[];
}