import YourStudents from "../routes/YourStudents";
import {Contacts} from "../routes/Contacts";
import StudentsPerformances from "../routes/StudentsPerformances";
import YourBooksLentOut from "../routes/YourBooksLentOut";

const TeacherDashboardView = () => {
    return (
        <>
            Õpilaste esinemised
            <StudentsPerformances/>
            Laenutatud raamatud
            <YourBooksLentOut/>
            Sinu õpilased
            <YourStudents/>
            Kontaktid
            <Contacts/>
        </>
    );
}

export default TeacherDashboardView;
