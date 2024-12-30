/* универсальная кнопка */

import { ButtonComponent } from "./ButtonComponent"

export const ButtonTwo = () => {
    const Button1Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address);
    }
    const Button2Foo = (subscriber: string) => {
        console.log(subscriber);
    }
    const Button3Foo = () => {
        console.log("stupidBurron");
    }


    return (
        <div>
            <p>универсальная кнопка:</p>
           {/*  <button>ButtonOne</button>
            <button>ButtonTwo</button> */}
            <ButtonComponent name={"ButtonCompOne"} callBack={()=>Button1Foo("Vasya", 21, "Live in Minsk")}/>
            <ButtonComponent name={"ButtonCompTwo"} callBack={()=>Button2Foo("Vanya")}/>
            <ButtonComponent name={"ButtonCompFour"} callBack={Button3Foo}/>
        </div>
    )
}