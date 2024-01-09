import {IGetCompetitionsProps} from "../domain/IGetCompetitionsProps";
import {CompetitionsTableHeader} from "../viewparts/CompetitionsTableHeader";
import {CompetitionsTableRow} from "../viewparts/CompetitionsTableRow";

export const CompetitionsTable = (competitions: IGetCompetitionsProps) => {
    return (
        <>
            <div className="table">
                <table>
                    <CompetitionsTableHeader/>
                    <tbody>
                    {
                        competitions.competitions.map(competition => (
                            <tr><CompetitionsTableRow name={competition.name} rounds={competition.rounds}/></tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    );
}
