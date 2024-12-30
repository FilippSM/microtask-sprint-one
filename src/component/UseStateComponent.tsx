import { useState } from "react";

export const UseStateComponent = () => {
   
   /* reacdom необновляет данные let a */
    /*  let a = 1;
    
    const onClickHandler = () => {
        ++a;
        console.log(a);
    }

    return (
        <div>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>Button</button>
        </div>
        
    ) */

    let [a, setA]=useState(1);
    
    const onClickHandler = () => {
        setA(++a);
        console.log(a);
    }

    const onClickHandlerNull = () => {
        setA(a = 0);
        console.log(a);
    }

    return (
        <div>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>Button</button>
            <button onClick={onClickHandlerNull}>0</button>
        </div>
        
    )
}