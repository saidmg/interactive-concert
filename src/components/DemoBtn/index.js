import './style.css'
import { NavLink } from "react-router-dom"

export default function DemoBtn({colored, text}){
    return(
        <>
        {text === 'TRY IT NOW' ?  <NavLink to="/pricing" className="nav-link" activeClassName="active" >
        <button className="demo-btn" style={{color:colored,borderColor:colored}}>{text}</button>
        </NavLink> : <button className="demo-btn" style={{color:colored,borderColor:colored}}>{text}</button>

}
        </>
    )
}