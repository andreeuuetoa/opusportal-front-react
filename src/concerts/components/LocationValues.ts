import {ConcertProps} from "./ConcertProps";
import React from "react";

export const LocationValues = (concertProps: ConcertProps) => {

    const eventHandler = (e: React.ChangeEvent) => {concertProps.handleChange(e.target as EventTarget & HTMLInputElement)};

    return {
        value: concertProps.values.location,
        type: "location",
        placeholder: "Asukoht",
        autocomplete: "location",
        name: "location",
        onchange: eventHandler
    };
}