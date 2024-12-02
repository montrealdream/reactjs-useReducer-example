import { useContext } from "react";
import { UserContext } from "./User";

export const UserEdit = () => {
    const { handleUpdateUser } = useContext(UserContext);
    return (
        <>
            <form action="" className="user-create formEdit" onSubmit={handleUpdateUser}>
                <h1> Edit tài khoản </h1>
                <input 
                    type="text" 
                    name="fullName" 
                    placeholder="Họ tên"
                />
                <input 
                    type="text" 
                    name="email" 
                    placeholder="Email"
                />
                <select name="status" id="">
                    <option value="active">Hoạt động</option>
                    <option value="inactive">Dừng hoạt động</option>
                </select>
                <button type="submit">Chỉnh Sửa</button>
            </form>
        </>
    );
}