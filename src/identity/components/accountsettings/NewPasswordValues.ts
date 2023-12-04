import {PasswordProps} from "./PasswordProps";
import React from "react";

export const NewPasswordValues = (passwordProps: PasswordProps) => {

    const eventHandler = (e: React.ChangeEvent) => {passwordProps.handleChange(e.target as EventTarget & HTMLInputElement)};

    return {
        value: passwordProps.values.currentPassword,
        type: "NewPassword",
        placeholder: "Uus salasõna",
        autocomplete: "new-password",
        name: "new-password",
        onchange: eventHandler
    };
}