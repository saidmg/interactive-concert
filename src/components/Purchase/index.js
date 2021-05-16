import './style.css'
import Button from '../Button'
import TryBtn from '../TryBtn'

export default function Purchase() {
    return (    
    <div style={{backgroundColor:'black'}}>
        <Button/>
        <div className="container">
            <div className="row" style={{paddingTop:'10%', paddingBottom:'10%'}}>
                <div className="col-lg-7 col-md-12">
        <div  style={{paddingTop:'10%', paddingBottom:'10%', paddingLeft:'5%'}}>
        <h2 style={{color:'#D34848'}}>GET EXP|CON NOW</h2>
        <h4 style={{color:'white'}}>Purchase and download the app.</h4>
        </div></div>
        <div className="col-lg-5 col-md-12" style={{paddingTop:'3%'}}>
        <TryBtn/>
        </div>
        </div>
    </div>
    </div>
    )
}
