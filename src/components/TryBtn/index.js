import './style.css'
import { NavLink } from "react-router-dom"


export default function TryBtn() {
    return (
        <NavLink to="/pricing" className="nav-link" activeClassName="active" >
      
<button class="btn-mix-noborder" style={{color:'black'}}>TRY IT NOW</button>
</NavLink>
    )
}