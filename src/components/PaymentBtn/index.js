import './style.css'

export default function PaymentBtn({colored, text}){
    return(
        <>
        <button className="demo-btn" style={{backgroundColor:colored,borderColor:colored}}>{text}</button>
        </>
    )
}