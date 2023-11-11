import {UserProps} from "./UserProps";
import React from "react";

export const RoleValues = (userProps: UserProps) => {
    const eventHandler = (e: React.ChangeEvent) => {userProps.handleChange(e.target as EventTarget & HTMLInputElement)};

    return {
        value: userProps.values.roleName,
        type: "text",
        placeholder: "Role",
        autocomplete: "rolename",
        name: "roleName",
        onchange: eventHandler
    };
}
