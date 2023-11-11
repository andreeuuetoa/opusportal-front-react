import {UserProps} from "./UserProps";
import React from "react";

export const PasswordValues = (userProps: UserProps) => {
    const eventHandler = (e: React.ChangeEvent) => {userProps.handleChange(e.target as EventTarget & HTMLInputElement)};

    return {
        value: userProps.values.password,
        type: "password",
        placeholder: "Salasõna",
        autocomplete: "new-password",
        name: "password",
        onchange: eventHandler
    };
}
