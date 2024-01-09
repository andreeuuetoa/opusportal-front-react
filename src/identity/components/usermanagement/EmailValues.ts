import {RegisterUserProps} from "./RegisterUserProps";
import React from "react";
import {EditUserProps} from "./EditUserProps";

export const EmailValues = (userProps: RegisterUserProps | EditUserProps) => {
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
