import {RegisterUserProps} from "./RegisterUserProps";
import React from "react";

export const ConfirmPasswordValues = (userProps: RegisterUserProps) => {
    const eventHandler = (e: React.ChangeEvent) => {userProps.handleChange(e.target as EventTarget & HTMLInputElement)};

    return {
        value: userProps.values.confirmPassword,
        type: "password",
        placeholder: "Kinnita salasõna",
        autocomplete: "confirm-password",
        name: "confirmPassword",
        onchange: eventHandler
    };
}
