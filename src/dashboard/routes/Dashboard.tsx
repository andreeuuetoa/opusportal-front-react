import { StudentDashboard } from "../views/StudentDashboard";
import {TeacherDashboard} from "../views/TeacherDashboard";
import {ErrorPage} from "../../common/routes/ErrorPage";
import {useContext} from "react";
import {JWTContext} from "../../root/Root";

export const Dashboard = () => {
    const {JWTResponse, setJWTResponse} = useContext(JWTContext);

    if (JWTResponse?.role === "Student") {
        return <StudentDashboard/>;
    } else if (JWTResponse?.role === "Teacher") {
        return <TeacherDashboard/>;
    } else {
        return <ErrorPage/>;
    }
}
