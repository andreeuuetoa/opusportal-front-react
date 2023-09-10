import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {Outlet, useNavigate} from "react-router-dom";
import {createContext, useEffect, useState} from "react";
import {IJWTResponse} from "../DTO/IJWTResponse";

export const JWTContext = createContext<{
    JWTResponse: IJWTResponse | null,
    setJWTResponse: ((data: IJWTResponse | null) => void) | null
}>({JWTResponse: null, setJWTResponse: null});

export const Root = () => {
    const [JWTResponse, setJWTResponse] = useState(null as IJWTResponse | null);
    const navigate = useNavigate();

    let rootDiv =
        <div className="container">
            <main role="main" className="pb-3">
                <Outlet />
            </main>
        </div>

    useEffect(() => {
        rootDiv =
            <>
                <Header/>
                <div className="container">
                    <main role="main" className="pb-3">
                        <Outlet />
                    </main>
                </div>
                <Footer/>
            </>
        if (JWTResponse === null) {
            navigate("/logi-sisse");
        }
    });

    return (
        <JWTContext.Provider value={{JWTResponse, setJWTResponse}}>
            {rootDiv}
        </JWTContext.Provider>
    );
}
