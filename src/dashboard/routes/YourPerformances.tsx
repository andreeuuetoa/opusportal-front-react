import {useContext, useState} from "react";
import {JWTContext} from "../../root/Root";
import PerformanceData from "../DTO/PerformanceData";
import PerformancesTable from "../viewparts/performances/PerformancesTable";

const YourPerformances = () => {
    const {JWTResponse, setJWTResponse} = useContext(JWTContext);
    const [performances, setPerformances] = useState([] as PerformanceData[]);

    return (
        <PerformancesTable performances={performances}/>
    );
}

export default YourPerformances;
