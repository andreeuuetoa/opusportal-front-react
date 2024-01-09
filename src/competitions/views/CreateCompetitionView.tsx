import {FormPart} from "../../common/viewparts/FormPart";
import {CompetitionProps} from "../DTO/CompetitionProps";
import {NameValues} from "../components/NameValues";

export const CreateCompetitionView = (competitionProps: CompetitionProps) => {
    const nameValues = NameValues(competitionProps);

    return (
        <form id="competitionForm" method="post">
            <h2>Loo uus konkurss</h2>
            <hr/>

            <ul style={{'display': competitionProps.validationErrors.length === 0 ? 'none' : ''}}>
                <li>
                    {competitionProps.validationErrors.length > 0 ? competitionProps.validationErrors[0] : ''}
                </li>
            </ul>

            <div className="float-child">
                <FormPart fieldElements={nameValues}/>
            </div>
            <div className="float-child">
                <button
                    onClick={(e) => competitionProps.onSubmit(e)}
                    id="registerSubmit" className="w-50 btn btn-lg submit-btn">
                    Lisa konkurss
                </button>
            </div>
        </form>
    );
}
