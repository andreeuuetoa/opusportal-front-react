import { StudentDashboard } from "../views/StudentDashboard";
import {TeacherDashboard} from "../views/TeacherDashboard";
import {ErrorPage} from "../../common/routes/ErrorPage";

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
