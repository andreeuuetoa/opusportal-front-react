import {ConcertsTableHeader} from "./ConcertsTableHeader";
import {ConcertsTableRow} from "./ConcertsTableRow";
import {IGetConcertsProps} from "../domain/IGetConcertsProps";

export const ConcertsTable = (concerts: IGetConcertsProps) => {
    return (
        <>
            <div className="table">
                <table>
                    <ConcertsTableHeader/>
                    <tbody>
                    {
                        concerts.concerts.map(concert => (
                            <tr><ConcertsTableRow name={concert.name} location={concert.location}
                                                  startTime={concert.startTime} endTime={concert.endTime}/></tr>))
                    }
                    </tbody>
                </table>
            </div>
        </>
    );
}
