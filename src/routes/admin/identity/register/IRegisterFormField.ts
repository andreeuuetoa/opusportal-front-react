import React from "react";

export interface IRegisterFormField {
    fieldElements: {
        value: string,
        type: string,
        placeholder: string,
        autocomplete: string,
        name: string,

        onchange: (event: React.ChangeEvent) => void
    };
}