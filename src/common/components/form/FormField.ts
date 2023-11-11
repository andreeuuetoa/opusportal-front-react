import React from "react";

export interface FormField {
    fieldElements: {
        value: string,
        type: string,
        placeholder: string,
        autocomplete: string,
        name: string,

        onchange: (event: React.ChangeEvent) => void
    };
}
