import React from "react";
import {SignInProps} from "./SignInProps";

export const PasswordValues = (signInProps: SignInProps) => {
    const eventHandler = (e: React.ChangeEvent) => {signInProps.handleChange(e.target as EventTarget & HTMLInputElement)};

    return {
        value: signInProps.values.password,
        type: "password",
        placeholder: "Salasõna",
        autocomplete: "new-password",
        name: "password",
        onchange: eventHandler
    };
}
