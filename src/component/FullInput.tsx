import { ChangeEvent, useState } from "react"
//инпут с кнопкой вместе


type FullInputPropsType = {
    addMessage: (title: string) => void
  
}

export const FullInput = (props: FullInputPropsType) => {
    let [title, setTiltle] = useState("")

    
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTiltle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addMessage(title)
        setTiltle("")
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler} />
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    )
} 