import {useState} from 'react'
import './style.css'

export default function Button({colored}) {
    
    const [toggle, setToggle] = useState(false);

    return(
        <>
        <div  class= {toggle? 'open oppenned': 'open'} onClick={()=> setToggle(!toggle)} style={{float:'left',paddingLeft:'80px'}}>
	<span  class="cls" style={{backgroundColor: toggle? colored:'white'}} ></span>
	<span  style={{backgroundColor: toggle? colored:'white'}} ><h3 style={{color: colored === '#191919'?"white":colored ,position:"absolute",top:'37%', right:"7%", zIndex:'100'}}> EXP|CON</h3>
		<ul style={{backgroundColor: colored === '#191919'?"#1FE1E9":''}} class="sub-menu ">
			<li>
				<a href="#about" title="about" style={{color: colored === '#191919'?"white":colored, fontWeight:'bold'}}> WHAT IS IT</a>
			</li>
			<li>
				<a href="#skills" title="skills" style={{color: colored === '#191919'?colored:"white",fontWeight:'bold'}}> PERKS</a>
			</li>
			<li>
				<a href="#jobs" title="jobs" style={{fontWeight:'bold'}}> PRICING</a>
			</li>
		</ul>
	</span>
    
	<span class="cls"  style={{backgroundColor: toggle? colored:'white'}} ></span>
</div>
{/* </div>   */}

        </>
    )
}