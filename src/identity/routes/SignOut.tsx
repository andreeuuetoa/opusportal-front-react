import {useContext, useEffect} from "react";
import {JWTContext} from "../../root/Root";
import {useNavigate} from "react-router-dom";
import {IdentityAPI} from "../services/IdentityAPI";

export const SignOut = () => {
    const { JWTResponse, setJWTResponse } = useContext(JWTContext);
    const navigate = useNavigate();
    const identityService = new IdentityAPI();

    useEffect(() => {
        if (JWTResponse)
            identityService.signOut(JWTResponse).then(() => {
                if (setJWTResponse) {
                    setJWTResponse(null);
                    navigate("/logi-sisse");
                }
            });
    }, []);

    return (
        <>
            Login välja...
        </>
    );
}
