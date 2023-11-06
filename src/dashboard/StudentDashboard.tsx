import {YourPerformances} from "../concerts/YourPerformances";
import {YourBooksLentOut} from "../library/YourBooksLentOut";
import {Contacts} from "./Contacts";

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
