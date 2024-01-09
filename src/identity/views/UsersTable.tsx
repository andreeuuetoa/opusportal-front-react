import {IGetUsersProps} from "../domain/IGetUsersProps";
import {UsersTableRow} from "../viewparts/UsersTableRow";
import {UsersTableHeader} from "../viewparts/UsersTableHeader";

export const UsersTable = (users: IGetUsersProps) => {
    return (
        <>
            <div className="table">
                <table>
                    <UsersTableHeader/>
                    <tbody>
                    {
                        users.users.map(user => (
                            <UsersTableRow name={user.name} roleName={user.roleName}/>))
                    }
                    </tbody>
                </table>
            </div>
        </>
    );
}
