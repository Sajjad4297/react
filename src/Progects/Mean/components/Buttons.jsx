export default function Buttons({seeResult1,seeResult2}) {
    return(
        <div  className="result-buttons">
            <button className="btn-mean" onClick={()=>{seeResult1()}} >حسابی</button>
            <button className="btn-mean" onClick={()=>{seeResult2()}} >هندسی</button>
            <button className="btn-mean"  >هارمونیک*بزودی</button>
        </div>
    )
}
