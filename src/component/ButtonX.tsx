
type ButtonPropsType = {
    name: string,
    callback:() => void
}



export const ButtonX = (props: ButtonPropsType) => {
    const onClickButtonHandler = () => {
        props.callback()
    }

    return (
        <button onClick={onClickButtonHandler}>{props.name}</button>
    );
};