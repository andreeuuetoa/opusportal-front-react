import {UserData} from "../DTO/UserData";
import {Link} from "react-router-dom";

export const UsersTableRow = (user: UserData) => {
    return (
        <tr>
            <td>
                {user.firstName} {user.lastName}
            </td>
            <td>
                {user.roleName}
            </td>
            <td><Link to="/muuda-kasutajat">Muuda</Link></td>
            <td><Link className="delete-link" to="/kustuta-kasutaja">Kustuta</Link></td>
        </tr>
    );
}
