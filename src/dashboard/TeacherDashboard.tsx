import {StudentsPerformances} from "../concerts/StudentsPerformances";
import {YourBooksLentOut} from "../library/components/YourBooksLentOut";
import {YourStudents} from "./YourStudents";
import {Contacts} from "./Contacts";

export const TeacherDashboard = () => {
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
