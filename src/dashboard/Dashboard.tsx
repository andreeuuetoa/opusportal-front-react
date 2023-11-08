import { StudentDashboard } from "./StudentDashboard";
import {TeacherDashboard} from "./TeacherDashboard";
import {ErrorPage} from "../common/routes/ErrorPage";

export const Dashboard = () => {
    const role = "Student";

    if (role === "Student") {
        return <StudentDashboard/>;
    } else if (role === "Teacher") {
        return <TeacherDashboard/>;
    } else {
        return <ErrorPage/>;
    }
}
