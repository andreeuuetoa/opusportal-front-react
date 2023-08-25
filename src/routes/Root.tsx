import {Header} from "../components/common/Header";
import {Footer} from "../components/common/Footer";
import { Outlet } from "react-router-dom";
import {createContext, useState} from "react";
import {IJWTResponse} from "../DTO/IJWTResponse";

export const JWTContext = createContext<{
    JWTResponse: IJWTResponse | null,
    setJWTResponse: ((data: IJWTResponse | null) => void) | null
}>({JWTResponse: null, setJWTResponse: null});

export const Root = () => {
    const [JWTResponse, setJWTResponse] = useState(null as IJWTResponse | null);

    return (
        <JWTContext.Provider value={{JWTResponse, setJWTResponse}}>
            <Header/>
            <div className="container">
                <main role="main" className="pb-3">
                    <Outlet />
                </main>
            </div>
            <Footer/>
        </JWTContext.Provider>
    );
}