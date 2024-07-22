import Pet from "./Pet"

const Person = (props) => {

    return (
        <div>
            <h1>Hi, my name is {props.name}. I am {props.age} years old.</h1>
            <Pet type = {props.type} petname = {props.petname} />
        </div>
        )
}
export default Person