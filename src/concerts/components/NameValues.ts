import {ConcertProps} from "./ConcertProps";
import React from "react";
import {UserData} from "../../identity/DTO/UserData";

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