import React from "react";
import {RegisterUserProps} from "./RegisterUserProps";
import {EditUserProps} from "./EditUserProps";

export const FirstNameValues = (userProps: RegisterUserProps | EditUserProps) => {
    const eventHandler = (e: React.ChangeEvent) => {userProps.handleChange(e.target as EventTarget & HTMLInputElement)};

    return {
        value: userProps.values.firstName,
            type: "text",
        placeholder: "Eesnimi",
        autocomplete: "firstname",
        name: "firstName",
        onchange: eventHandler
    };
}
