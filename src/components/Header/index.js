import './style.css'
import Button from '../Button'
import DemoBtn from '../DemoBtn'

export default function Header({color}){
    return(
        <div style={{paddingTop:'5%'}}>
        <Button colored={color}/>
        
        <div><h2 style={{color:'white' , float:'left',marginTop:'1%', marginLeft:'0.7%', zIndex:10}}> EXP|CON </h2></div>
         <div style={{float:'right', marginRight:'10%'}}><DemoBtn colored={color} text="TRY IT NOW"/></div>
</div>
    )
}