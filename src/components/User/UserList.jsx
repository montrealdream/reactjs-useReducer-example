import { UserListItem } from "./UserListItem";
import { useContext } from "react";
import { UserContext } from "./User";

export const UserList = (props) => {
    const {users} = useContext(UserContext);

    return (
        <>
            <table className="user-list">
                <thead>
                    <tr>
                        <th>Họ tên</th>
                        <th>Email</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map(user => <UserListItem key={user.id} user={user}/>)}
                </tbody>
            </table>
        </>
    );
}