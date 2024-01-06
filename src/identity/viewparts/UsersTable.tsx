import {IGetUsersProps} from "../domain/IGetUsersProps";
import {UsersTableRow} from "./UsersTableRow";
import {UsersTableHeader} from "./UsersTableHeader";

export const UsersTable = (users: IGetUsersProps) => {
    return (
        <>
            <div className="table-row">
                <table>
                    <UsersTableHeader/>
                    <tbody>
                    {
                        users.users.map(user => (
                            <tr><UsersTableRow name={user.name} roleName={user.roleName}/></tr>))
                    }
                    </tbody>
                </table>
            </div>
        </>
    );
}
