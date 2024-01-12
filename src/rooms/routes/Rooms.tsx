import {useContext, useEffect, useState} from "react";
import {JWTContext} from "../../root/Root";
import {RoomAPI} from "../API/RoomAPI";
import {RoomData} from "../DTO/RoomData";
import {Link} from "react-router-dom";
import RoomsTable from "../views/RoomsTable";
import {AdminNavbar} from "../../common/viewparts/AdminNavbar";

const Rooms = () => {
    const {JWTResponse, setJWTResponse} = useContext(JWTContext);
    const roomAPI = new RoomAPI(setJWTResponse!);

    const [data, setData] = useState([] as RoomData[]);

    useEffect(() => {
        if (JWTResponse) {
            roomAPI.getAll(JWTResponse).then(
                response => {
                    console.log(response);
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

    console.log(data);

    return (
        <>
            <AdminNavbar/>
            <div className="float-child">
                <br/>
                <RoomsTable rooms={data}/>
            </div>
            <div className="float-child">
                <br/>
                <Link to="/lisa-ruum">
                    <button className="btn link-btn">Lisa ruum</button>
                </Link>
            </div>
        </>
    );
}

export default Rooms;
