import React from "react";
import {UserProps} from "./UserProps";

export const FirstNameValues = (userProps: UserProps) => {
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
