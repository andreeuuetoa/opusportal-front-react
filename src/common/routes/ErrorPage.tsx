import { useRouteError } from "react-router-dom";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

interface IError {
    statusText?: string,
    message?: string
}

export const ErrorPage = () => {
    const error = useRouteError() as IError;

    return (
        <>
            <Header/>
            <div id="error-page" className="container">
                <h1>Ups!</h1>
                <p>Vabandust, midagi läks ootamatult valesti.</p>
                <p>
                    Viga: <i>{error.statusText || error.message}</i>
                </p>
            </div>
            <Footer/>
        </>
    );
};
