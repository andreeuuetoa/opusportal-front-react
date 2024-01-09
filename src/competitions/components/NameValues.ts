import React from "react";
import {CompetitionProps} from "../DTO/CompetitionProps";

export const NameValues = (competitionProps: CompetitionProps) => {

    const eventHandler = (e: React.ChangeEvent) => {competitionProps.handleChange(e.target as EventTarget & HTMLInputElement)};

    return {
        value: competitionProps.values.name,
        type: "name",
        placeholder: "Nimi",
        autocomplete: "name",
        name: "name",
        onchange: eventHandler
    };
}
