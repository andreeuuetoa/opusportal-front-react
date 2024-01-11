import { StudentDashboard } from "./StudentDashboard";
import {TeacherDashboard} from "./TeacherDashboard";
import {ErrorPage} from "../../common/routes/ErrorPage";
import {useContext} from "react";
import {JWTContext} from "../../root/Root";

export const Dashboard = () => {
    const {JWTResponse, setJWTResponse} = useContext(JWTContext);

    if (JWTResponse?.userData.roleName === "Student") {
        return <StudentDashboard/>;
    } else if (JWTResponse?.userData.roleName === "Teacher") {
        return <TeacherDashboard/>;
    } else {
        return <ErrorPage/>;
    }
}
