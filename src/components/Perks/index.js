import './style.css'
import Header from '../Header'

export default function Perks() {
    return (    
    <>
    <div style={{backgroundColor:'#191919', color:'white'}}>
        <Header color="#191919"/>
        <div className="container" style={{paddingBottom:'10%'}}>
        <h1 style={{marginTop:'10%', marginLeft:'3%',paddingTop:'30px'}}>PERKS</h1>
        <div className="row mt-3">
            <div className="col-lg-4 p-5">
                <h2 style={{color:'#D34848'}}>
                    Subscription Payment Model
                </h2>
                <p>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
            </div>
            <div className="col-lg-4 p-5">
                <h2 style={{color:'#1FE1E9'}}>
                No Fee Cancelation Policy
                </h2>
                <p>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
            </div>
            <div className="col-lg-4 p-5">
                <h2 style={{color:'#FFB33F'}}>
                Subscription Payment Model
                </h2>
                <p>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
            </div>
            </div>
        </div>
    </div>
    </>
    )
}
