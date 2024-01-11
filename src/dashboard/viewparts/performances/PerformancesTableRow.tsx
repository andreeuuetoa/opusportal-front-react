import PerformanceData from "../../DTO/PerformanceData";
import MonthValue from "../../domain/MonthValue";

const PerformancesTableRow = (performanceData: PerformanceData) => {
    return (
        <>
            <td>{performanceData.concertName}</td>
            <td>{performanceData.time.getDate()}. {MonthValue(performanceData.time.getMonth())} {performanceData.time.getFullYear()}</td>
            <td>{performanceData.location}</td>
        </>
    );
}

export default PerformancesTableRow;
