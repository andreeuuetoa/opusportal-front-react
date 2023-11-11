import {YourPerformances} from "../../concerts/routes/YourPerformances";
import {YourBooksLentOut} from "../viewparts/YourBooksLentOut";
import {Contacts} from "../viewparts/Contacts";

export const StudentDashboard = () => {
    return (
        <>
            Esinemised
            <YourPerformances/>
            Laenutatud raamatud
            <YourBooksLentOut/>
            Kontaktid
            <Contacts/>
        </>
    );
}
