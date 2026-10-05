import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, reset, decrement } from "../store/useraction";

const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>====From Redux====</h1>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>Add</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() => dispatch(decrement())}>Sub</button>
        </div>
    );
};

export default Counter;