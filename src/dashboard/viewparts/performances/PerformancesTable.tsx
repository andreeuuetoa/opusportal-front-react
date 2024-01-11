import IGetPerformancesProps from "../../domain/IGetPerformancesProps";
import PerformancesTableHeader from "./PerformancesTableHeader";
import PerformancesTableRow from "./PerformancesTableRow";

const PerformancesTable = (performances: IGetPerformancesProps) => {
    return (
        <div className="dashboard-table">
            <table>
                <PerformancesTableHeader/>
                <tbody>
                {
                    performances.performances.map(performance => (
                        <tr><PerformancesTableRow concertName={performance.concertName} time={performance.time} location={performance.location} /></tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}

export default PerformancesTable;
