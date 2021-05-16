import {NavLink} from 'react-router-dom'
import './style.css'

export default function PaymentBtn({colored, text}){
    return(
        <>
                <NavLink to="/payment" className="nav-link" activeClassName="active"  style={{padding:0}}>
        <button className="demo-btn" style={{backgroundColor:colored,borderColor:colored}}>{text}</button>
        </NavLink>
        </>
    )
}