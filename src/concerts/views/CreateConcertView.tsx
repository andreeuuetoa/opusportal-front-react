import {FormPart} from "../../common/viewparts/FormPart";
import {ConcertProps} from "../components/ConcertProps";
import {NameValues} from "../components/NameValues";
import {LocationValues} from "../components/LocationValues";

export const CreateConcertView = (concertProps: ConcertProps) => {
    const nameValues = NameValues(concertProps);
    const locationValues = LocationValues(concertProps);

    return (
        <form id="registerForm" method="post">
            <h2>Loo uus kontsert</h2>
            <hr/>

            <ul style={{'display': concertProps.validationErrors.length === 0 ? 'none' : ''}}>
                <li>
                    {concertProps.validationErrors.length > 0 ? concertProps.validationErrors[0] : ''}
                </li>
            </ul>

            <div>
                <div className="float-child">
                    <FormPart fieldElements={nameValues} />
                    <FormPart fieldElements={locationValues} />
                </div>
                <div className="float-child">
                    <button
                        onClick={(e) => concertProps.onSubmit(e)}
                        id="registerSubmit" className="w-50 btn btn-lg submit-btn">
                        Lisa kontsert
                    </button>
                </div>
            </div>
        </form>
    );
}