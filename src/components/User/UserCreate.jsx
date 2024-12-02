import { useContext } from "react";
import { UserContext } from "./User";

export const UserCreate = () => {
    const { handleCreateUser } = useContext(UserContext);
    return (
        <>
            <form action="" className="user-create" onSubmit={handleCreateUser}>
                <h1> Tạo mới tài khoản </h1>
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
                <button type="submit">Tạo</button>
            </form>
        </>
    );
}