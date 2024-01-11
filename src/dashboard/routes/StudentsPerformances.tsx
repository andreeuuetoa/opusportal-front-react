import PerformancesTable from "../viewparts/performances/PerformancesTable";
import PerformanceData from "../DTO/PerformanceData";
import {useContext, useState} from "react";
import {JWTContext} from "../../root/Root";

const StudentsPerformances = () => {
    const {JWTResponse, setJWTResponse} = useContext(JWTContext);
    const [performances, setPerformances] = useState([] as PerformanceData[]);

    return (
        <PerformancesTable performances={performances}/>
    );
}

export default StudentsPerformances;
