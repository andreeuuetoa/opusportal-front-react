import {Timetable} from "./studying/Timetable";
import {YourPerformances} from "./performances/YourPerformances";
import {StudentSubjects} from "./studying/StudentSubjects";
import {YourBooksLentOut} from "./library/YourBooksLentOut";
import {Contacts} from "./Contacts";
import {Curriculum} from "./studying/Curriculum";

export const StudentDashboard = () => {
    return (
        <>
            Tunniplaan
            <Timetable/>
            Esinemised
            <YourPerformances/>
            Toimuvad õppeained
            <StudentSubjects/>
            Laenutatud raamatud
            <YourBooksLentOut/>
            Õppekava
            <Curriculum/>
            Kontaktid
            <Contacts/>
        </>
    );
}