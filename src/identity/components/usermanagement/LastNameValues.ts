import {RegisterUserProps} from "./RegisterUserProps";
import React from "react";
import {EditUserProps} from "./EditUserProps";

export const LastNameValues = (userProps: RegisterUserProps | EditUserProps) => {
    const eventHandler = (e: React.ChangeEvent) => {userProps.handleChange(e.target as EventTarget & HTMLInputElement)};

    return {
        value: userProps.values.lastName,
        type: "text",
        placeholder: "Perekonnanimi",
        autocomplete: "lastname",
        name: "lastName",
        onchange: eventHandler
    };
}
