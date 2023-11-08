import React from "react";
import {IPostBooksProps} from "../domain/IPostBooksProps";

export const BookFormView = (props: IPostBooksProps) => {
    const eventHandler = (e: React.ChangeEvent) => {props.handleChange(e.target as EventTarget & HTMLInputElement)};

    return (
        <>
        </>
    );
}
