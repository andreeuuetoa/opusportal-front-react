import {ConcertData} from "../DTO/ConcertData";
import React from "react";

export interface ConcertProps {
    values: ConcertData;

    handleChange: (target:
                       EventTarget & HTMLInputElement) => void;

    onSubmit: (target: React.MouseEvent) => void;

    validationErrors: string[];
}