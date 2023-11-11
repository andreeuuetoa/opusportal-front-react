import {UserProps} from "./UserProps";
import React from "react";

export const EmailValues = (userProps: UserProps) => {
    const eventHandler = (e: React.ChangeEvent) => {userProps.handleChange(e.target as EventTarget & HTMLInputElement)};

    return {
        value: userProps.values.email,
        type: "email",
        placeholder: "Kasutajatunnus",
        autocomplete: "username",
        name: "email",
        onchange: eventHandler
    };
}
