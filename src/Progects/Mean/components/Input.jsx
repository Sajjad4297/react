export default function Input({enterNumber}) {
    return(
        <div className="input-div">
            <label htmlFor="number" >enter numbers:</label>
            <input className="input-mean" type="text" onKeyDown={enterNumber} />
        </div>
    )
}
