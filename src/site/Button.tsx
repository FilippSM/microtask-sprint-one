import { MouseEvent } from "react"

export const Button = () => {
    /* const myFirstSubdcriber = (event: MouseEvent<HTMLButtonElement>) => {
        console.log("Button TWo")
    }

    const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
        console.log("mySecondSubdcriber")
    } */
    /*    
       const mySecondSubscriber = () => {
           console.log("mySecondSubdcriber")
       } */

    /* return (
        <>
            <button onClick={(event) => {console.log("Button One")}}>Button One</button>
            <button onClick={myFirstSubdcriber}>Button two</button>
            <button onClick={mySecondSubscriber}>Button three</button>
        </>
    ) */



    const onClickHandler = (name: string) => {
        console.log(name);
    }

    return (
        <>
            <button onClick={(event) => onClickHandler("Button two")}>Button two</button >
            <button onClick={(event) => onClickHandler("Button three")}>Button three</button>
            <button onClick={() => onClickHandler("Button four")}>Button FOUR</button>
        </>
    )

}


