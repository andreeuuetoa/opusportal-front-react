import {useContext, useEffect, useState} from "react";
import {JWTContext} from "../../root/Root";
import {UserData} from "../DTO/UserData";
import {UsersTable} from "../views/UsersTable";
import {UserAPI} from "../API/UserAPI";
import {Link} from "react-router-dom";
import {AdminNavbar} from "../../common/viewparts/AdminNavbar";

export const Users = () => {
    const {JWTResponse, setJWTResponse} = useContext(JWTContext);
    const userAPI = new UserAPI(setJWTResponse!);

    const [data, setData] = useState([] as UserData[]);

    useEffect(() => {
        if (JWTResponse) {
            userAPI.getAll(JWTResponse).then(
                response => {
                    if (response) {
                        setData(response);
                    } else {
                        // TODO: Delete JWT and redirect to sign-in page
                        setData([]);
                    }
                }
            );
        }
    }, []);

    return (
        <>
            <AdminNavbar/>
            <div className="float-child">
                <br/>
                <UsersTable users={data}/>
            </div>
            <div className="float-child">
                <br/>
                <Link to="/lisa-kasutaja">
                    <button className="btn link-btn">Lisa kasutaja</button>
                </Link>
            </div>
        </>
    );
}
