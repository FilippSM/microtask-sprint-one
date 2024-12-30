type NewComponentType = {
    students: Array<StydentType>
}

type StydentType = {
    id: number,
    name: string,
    age: number
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <ul>
            {props.students.map((elem, index) => {
                return (
                    <li key={elem.id}>
                        <span>name: {elem.name} </span>
                        <span>age: {elem.age}</span>
                    </li>
                )
            })}
        </ul>
    );
}