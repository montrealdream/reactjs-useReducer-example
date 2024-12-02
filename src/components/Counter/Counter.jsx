import { BoxTitle } from "../BoxTitle/BoxTitle";

import { useReducer } from "react";

// flow Reducer: [eventClick, ...] => [dispatch] => [reducer] => [state]
 
const reducerCount = (state, action) => {
    switch(action) {
        case 'UP':
            return state + 1;
        
        case 'DOWN':
            return state - 1;
        
        case 'RESET':
            return state = 0;
            
        default: return state;
    }
}

export const Counter = () => {
    const [count, dispatchCount] = useReducer(reducerCount, 0);

    const handleClickUp = () => {
        dispatchCount('UP');
    }

    const handleClickDown = () => {
        dispatchCount('DOWN');
    }

    const handleClickReset = () => {
        dispatchCount('RESET');
    }

    return (
        <>
            <BoxTitle title={'Counter dùng useReducer'} />
            
            <div className="">{count}</div>
            <button onClick={handleClickUp}>Tăng</button>
            <button onClick={handleClickDown}>Giảm</button>
            <button onClick={handleClickReset}>Reset</button>
        </>
    );
}