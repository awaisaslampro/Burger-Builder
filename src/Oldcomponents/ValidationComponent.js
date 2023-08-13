const UserInput = (props) => {

    const textString = ['Text too short!', 'Text too long'];

    return <div>


        {
            props.textLength < 5 ? <b className="text-red">{textString[0]}</b>
                :
                <h1>{textString[1]}</h1>
        }
    </div>
}
export default UserInput;