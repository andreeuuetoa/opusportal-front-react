import React from "react";
import {PasswordProps} from "./PasswordProps";

export const CurrentPasswordValues = (passwordProps: PasswordProps) => {

    const eventHandler = (e: React.ChangeEvent) => {passwordProps.handleChange(e.target as EventTarget & HTMLInputElement)};

    return {
        value: passwordProps.values.currentPassword,
        type: "CurrentPassword",
        placeholder: "Praegune salasõna",
        autocomplete: "current-password",
        name: "current-password",
        onchange: eventHandler
    };
}