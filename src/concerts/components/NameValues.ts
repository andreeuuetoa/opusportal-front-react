import {ConcertProps} from "../DTO/ConcertProps";
import React from "react";

export const NameValues = (concertProps: ConcertProps) => {

    const eventHandler = (e: React.ChangeEvent) => {concertProps.handleChange(e.target as EventTarget & HTMLInputElement)};

    return {
        value: concertProps.values.name,
        type: "name",
        placeholder: "Nimi",
        autocomplete: "name",
        name: "name",
        onchange: eventHandler
    };
}
