import './style.css'

export default function DemoBtn({colored, text}){
    return(
        <>
        <button className="demo-btn" style={{color:colored,borderColor:colored}}>{text}</button>
        </>
    )
}