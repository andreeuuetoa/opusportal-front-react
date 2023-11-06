import React from "react";

export interface IIdentityFormField {
    fieldElements: {
        value: string,
        type: string,
        placeholder: string,
        autocomplete: string,
        name: string,

        onchange: (event: React.ChangeEvent) => void
    };
}
