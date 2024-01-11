import {useState} from "react";
import {UserData} from "../../identity/DTO/UserData";

const YourStudents = () => {
    const [students, setStudents] = useState([] as UserData[]);

    return (
        <div>
            {
                students.map(student => (
                    <p>{student.firstName} {student.lastName}</p>
                ))
            }
        </div>
    );
};

export default YourStudents;
