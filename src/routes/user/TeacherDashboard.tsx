import {Timetable} from "./studying/Timetable";
import {StudentsPerformances} from "./performances/StudentsPerformances";
import {YourBooksLentOut} from "./library/YourBooksLentOut";
import {YourStudents} from "./studying/YourStudents";
import {Contacts} from "./Contacts";

export const TeacherDashboard = () => {
    return (
        <>
            Tunniplaan
            <Timetable/>
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