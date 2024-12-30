import { FilterType } from "./FilterComponent";

type MoneyType = {
    banknote: string
    nominal: number
    number: string
}

type OnClickFilterHandlerType = (nameButton: FilterType) => void;

type PropsType = {
    function: OnClickFilterHandlerType;
    currentMoney: Array<MoneyType>
}


export const Newcomponent = (props: PropsType) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>

            <button onClick={()=>props.function("all")}>All</button>
            <button onClick={()=>props.function("ruble")}>ruble</button>
            <button onClick={()=>props.function("dollar")}>dollar</button>
        </>

    )
}