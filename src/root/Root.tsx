import {Header} from "../common/components/Header";
import {Footer} from "../common/components/Footer";
import {Outlet, useNavigate} from "react-router-dom";
import {createContext, useEffect, useState} from "react";
import {IJWTResponse} from "../identity/DTO/IJWTResponse";

export const JWTContext = createContext<{
    JWTResponse: IJWTResponse | null,
    setJWTResponse: ((data: IJWTResponse | null) => void) | null
}>({JWTResponse: null, setJWTResponse: null});

export const Root = () => {
    const [JWTResponse, setJWTResponse] = useState(null as IJWTResponse | null);
    const navigate = useNavigate();

    let rootDiv =
        <>
            <Header/>
            <div className="container">
                <main role="main" className="pb-3">
                    <Outlet/>
                </main>
            </div>
            <Footer/>
        </>

    return (
        <JWTContext.Provider value={{JWTResponse, setJWTResponse}}>
            {rootDiv}
        </JWTContext.Provider>
    );
}
