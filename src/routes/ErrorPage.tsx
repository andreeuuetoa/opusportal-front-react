import { useRouteError } from "react-router-dom";
import {Header} from "../components/common/Header";
import {Footer} from "../components/common/Footer";

interface IError {
    statusText?: string,
    message?: string
}

export const ErrorPage = () => {
    const error = useRouteError() as IError;
    console.log(error);

    return (
        <>
            <Header/>
            <div id="error-page" className="container">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
            <Footer/>
        </>
    );
};