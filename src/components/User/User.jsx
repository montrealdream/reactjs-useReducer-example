import { BoxTitle } from "../BoxTitle/BoxTitle";
import { UserCreate } from "./UserCreate";
import { UserEdit } from "./UserEdit";
import { UserList } from "./UserList";
import { useReducer, createContext } from "react";

// sử dụng useContext
export const UserContext = createContext();

// giá trị khởi tạo ban đầu cho reducerUser
const initUser = [
    {
      id: 1,
      fullName: "Le Van A",
      email: "levana@gmail.com",
      status: "active"
    },
    {
      id: 2,
      fullName: "Le Van B",
      email: "levanb@gmail.com",
      status: "inactive"
    },
    {
      id: 3,
      fullName: "Le Van C",
      email: "levanc@gmail.com",
      status: "initial"
    }
];

// userReducer
const userReducer = (state, action) => {
    const type = action.type;
    const newState = [...state];
    switch(type) {
        case "CREATE_USER": 
            return [...state, action.payload];

        case "EDIT_USER":
            const index = state.findIndex(item => item.id === action.payload.id);
            console.log(index);
            newState[index] = action.payload;
            return newState;

        default: return state;
    }
}

export const User = () => {
    const [users, dispatchUser] = useReducer(userReducer, initUser);

    // tạo mới tài khoản
    const handleCreateUser = (event) => {
        event.preventDefault();
        
        const payload = {
            id: users.length + 10,
            fullName: event.target.fullName.value,
            email: event.target.email.value,
            status: event.target.status.value
        }

        dispatchUser({
            type: "CREATE_USER",
            payload
        });

        event.target.fullName.value = "";
        event.target.email.value = "";
    }

    // lấy thông tin chỉnh sửa tài khoản
    const handleEditUser = (user) => {
        const formEdit = document.querySelector(".formEdit");
        formEdit.setAttribute('user-id', user.id);
        formEdit.fullName.value = user.fullName;
        formEdit.email.value = user.email;
        formEdit.status.value = user.status;
    }

    // chỉnh sửa tài khoản
    const handleUpdateUser = (event) => {
        event.preventDefault();
        const payload = {
            id: parseInt(event.target.getAttribute('user-id')),
            fullName: event.target.fullName.value,
            email: event.target.email.value,
            status: event.target.status.value
        }

        dispatchUser({
            type: "EDIT_USER",
            payload
        });

        event.target.fullName.value = "";
        event.target.email.value = "";
    }
 
    // gửi 1 object useContext
    const providerToContext = {
        users,
        handleCreateUser,
        handleEditUser,
        handleUpdateUser,
    }

    return (
        <>
            <BoxTitle title={'User dùng useReducer'} />

            <UserContext.Provider value={providerToContext}>
                <UserList/>
                <UserCreate />
                <UserEdit />
            </UserContext.Provider>
        </>
    );
}