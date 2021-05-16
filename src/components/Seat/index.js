import './style.css'
import Header from '../../components/Header'
import DemoBtn from '../DemoBtn'

export default function Seat() {
    return (
        <div style={{backgroundColor:'#FFB33F'}} >
                   

            <div className="background-img">
            <Header color='#FFB33F'/>
            <div class="container" style={{height:'70vh'}}>
                <div className="row justify-content-end" style={{paddingTop:'10%'}}>
                   
                    <div className="col-lg-7 col-md-12">
                        <h1 style={{color:'white'}}>FRONT ROW SEATS</h1>
                        <h3>Experience concerts up close and personal.</h3>
                        <DemoBtn colored='#FFB33F' text='SEE DEMO'/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
