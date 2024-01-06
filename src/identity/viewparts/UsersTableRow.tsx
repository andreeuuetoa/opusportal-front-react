import {UserData} from "../DTO/UserData";

export const UsersTableRow = (user: UserData) => {
    return (
        <>
            <td>
                {user.name}
            </td>
            <td>
                {user.roleName}
            </td>
        </>
    );
}
