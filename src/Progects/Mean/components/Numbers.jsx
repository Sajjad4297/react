export default function Numbers({number,deleteNumber}) {
    return(
        <div className="number" onClick={()=>deleteNumber(number)}> {number?.value} </div>
    )
}
