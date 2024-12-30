import { useState } from "react"
import { FullInput } from "../component/FullInput"
import { InputX } from "../component/InputX"
import { ButtonX } from "../component/ButtonX"

export const Input = () => {
    let [message, setMessage] = useState([
        { message: 'message1' },
        { message: 'message2' },
        { message: 'message3' },
    ])


    let [title, setTitle] = useState("")
    console.log(title);

    const addMessage = (title: string) => {
        let newMessage={message: title};
        setMessage([newMessage, ...message]);
    }

    const callBackButtonHandler = () => {
        addMessage(title);
        setTitle("");
    }

    return (
        <div>
            {/* <FullInput addMessage={addMessage}/> */}
            <InputX setTitle={setTitle} title={title} />
            <ButtonX name={'+'} callback={callBackButtonHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )
}