import React from "react";
import {RegisterData} from "../../DTO/RegisterData";

export interface UserProps {
    values: RegisterData;

    handleChange: (target:
        EventTarget & HTMLInputElement) => void;

    onSubmit: (target: React.MouseEvent) => void;

    validationErrors: string[];
}
