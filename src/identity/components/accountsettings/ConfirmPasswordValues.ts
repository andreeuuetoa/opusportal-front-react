import {PasswordProps} from "./PasswordProps";
import React from "react";

export const ConfirmPasswordValues = (passwordProps: PasswordProps) => {

    const eventHandler = (e: React.ChangeEvent) => {passwordProps.handleChange(e.target as EventTarget & HTMLInputElement)};

    return {
        value: passwordProps.values.currentPassword,
        type: "ConfirmPassword",
        placeholder: "Kinnita salasõna",
        autocomplete: "confirm-password",
        name: "confirm-password",
        onchange: eventHandler
    };
}