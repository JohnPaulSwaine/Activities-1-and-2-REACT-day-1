const Pet = (props) => {

    return (
        <div>
            <h2>I have a pet {props.type}. My {props.type} is called {props.petname}.</h2>
        </div>
    )
}

export default Pet