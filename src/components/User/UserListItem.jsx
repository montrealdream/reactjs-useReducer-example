import { useContext } from "react";
import { UserContext } from "./User";

export const UserListItem = (props) => {
    const { handleEditUser } = useContext(UserContext);

    const user = props.user;

    return (
        <>
            <tr>
                <td className="fullName"> {user.fullName} </td>
                <td className="email"> {user.email} </td>
                <td className="status">  {user.status} </td>
                <td className="action"> 
                    <button onClick={() => handleEditUser(user)}>Sửa</button>
                    <button>Xóa</button>
                </td>
            </tr>
        </>
    );
}