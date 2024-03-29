import {Header} from "../common/viewparts/Header";
import {Footer} from "../common/viewparts/Footer";
import {Outlet, useNavigate} from "react-router-dom";
import {createContext, useState} from "react";
import {JWTResponse} from "../identity/DTO/JWTResponse";
import {AdminNavbar} from "../common/viewparts/AdminNavbar";

export const JWTContext = createContext<{
    JWTResponse: JWTResponse | null,
    setJWTResponse: ((data: JWTResponse | null) => void) | null
}>({JWTResponse: null, setJWTResponse: null});

export const Root = () => {
    const [JWTResponse, setJWTResponse] = useState(null as JWTResponse | null);
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
