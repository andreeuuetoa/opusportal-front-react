import {UserProps} from "./UserProps";
import React from "react";

export const LastNameValues = (userProps: UserProps) => {
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
