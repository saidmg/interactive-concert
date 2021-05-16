import {useState} from 'react'
import './style.css'

export default function PaymentBtn2({colored}) {
    
    const [toggle, setToggle] = useState(false);

    return(
        <>
        
        {/* <div style={{display:'inline'}}> */}
<div  class= {toggle? 'open oppenned': 'open'} onClick={()=> setToggle(!toggle)} style={{float:'left'}}>
	<span  class="cls" style={{backgroundColor: toggle? colored:'black'}} ></span>
	<span  style={{backgroundColor: toggle? colored:'black'}} ><h3 style={{color:colored ,position:"absolute",top:'37%', right:"7%", zIndex:'100'}}> EXP|CON</h3>
		<ul class="sub-menu ">
			<li>
				<a href="#about" title="about" style={{color:colored}}> WHAT IS IT</a>
			</li>
			<li>
				<a href="#skills" title="skills"> PERKS</a>
			</li>
			<li>
				<a href="#jobs" title="jobs"> PRICING</a>
			</li>
		</ul>
	</span>
    
	<span class="cls"  style={{backgroundColor: toggle? colored:'black'}} ></span>
</div>

        </>
    )
}