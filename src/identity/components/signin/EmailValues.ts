import React from "react";
import {SignInProps} from "./SignInProps";

export const EmailValues = (signInProps: SignInProps) => {
    const eventHandler = (e: React.ChangeEvent) => {signInProps.handleChange(e.target as EventTarget & HTMLInputElement)};

    return {
        value: signInProps.values.email,
        type: "email",
        placeholder: "Kasutajatunnus",
        autocomplete: "username",
        name: "email",
        onchange: eventHandler
    };
}
