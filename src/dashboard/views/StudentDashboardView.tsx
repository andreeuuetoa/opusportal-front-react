import YourPerformances from "../routes/YourPerformances";
import {Contacts} from "../routes/Contacts";
import YourBooksLentOut from "../routes/YourBooksLentOut";

const StudentDashboardView = () => {
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

export default StudentDashboardView;
