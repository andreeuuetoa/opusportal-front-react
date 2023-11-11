import {StudentsPerformances} from "../../concerts/routes/StudentsPerformances";
import {YourBooksLentOut} from "../viewparts/YourBooksLentOut";
import {YourStudents} from "../viewparts/YourStudents";
import {Contacts} from "../viewparts/Contacts";

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
