import './style.css'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import Header from '../../components/Header'
import PaymentBtn from '../../components/PaymentBtn'

export default function Pricing() {
    return (
        <div style={{ backgroundColor: '#191919', paddingTop: '5%' }}>
            <Button colored='white' />
            <div className="container">

                <div className="row" style={{ paddingTop: '10%', paddingLeft: '0%' }}>
                    <h1 style={{ color: 'white' }}>Pricing</h1>
                    <h3 style={{ color: 'white' }}>Test out our app today! Choose from three subscription Based payment models
    </h3>
                    <div className="row align-items-start py-5">
                        <div className="col">
                            <h5 className="border-bottomm-bas" style={{ color: '#D24848' }} >Basic</h5>
                            <h4 style={{ color: '#D24848' }} >Monthly</h4>
                            <h1 style={{ color: '#D24848' }}>$9</h1>
                            <ul style={{ paddingLeft: '0%' }}>
                                <li>Very good</li>
                                <li>Amazing</li>
                                <li>Perfect job</li>
                                <li>Love this</li>
                                <li>It's so good</li>
                                <li>Features</li>
                            </ul>
                            <PaymentBtn colored="#D24848" text="SELECT" />
                        </div>
                        <div className="col">

                            <h5 className="border-bottomm-adv" style={{ color: '#FFB33F' }}>Advanced</h5>
                            <h4 style={{ color: '#FFB33F' }}>Yearly</h4>
                            <h1 style={{ color: '#FFB33F' }}>$99</h1>
                            <ul style={{ paddingLeft: '0%' }}>
                                <li>Very very good</li>
                                <li>Even Amazing</li>
                                <li>Perfect job</li>
                                <li>Love this more</li>
                                <li>It's so so good</li>
                                <li>More Features</li>
                            </ul>
                            <PaymentBtn colored="#FFB33F" text="eee" />
                        </div>
                        <div className="col">

                            <h5 className="border-bottomm-pro description-title" style={{ color: '#1FE1E9' }}>Pro</h5>
                            <h4 class='description-title'>Yearly</h4>
                            <h1 className='price-title'>$120</h1>
                            <ul style={{ paddingLeft: '0%' }}>
                                <li>Very very good</li>
                                <li>Even more</li>
                                <li>Perfect job</li>
                                <li>Love this more</li>
                                <li>It's so so good</li>
                                <li>More Features</li>
                            </ul>
                            <PaymentBtn colored="#1FE1E9" text="eee" />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#D34848', paddingTop: '5%' }}>
                <Button colored='#D34848' />
                <div className="container pb-5">
                <div className="row align-items-start" style={{ paddingTop: '10%', paddingLeft: '0%' }}>
                    <h1 style={{color:'white', marginBottom:'5%'}}>PERKS</h1>

                        <div className="col">
                            <h3  style={{color:'white'}} className="border-topp">Subscription Payment Model</h3>
                            <p>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                        </div>
                        <div className="col">

                            <h3  style={{color:'white'}} className="border-topp">No Fee Cancelation Policy </h3>
                            <p>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>

                        </div>
                        <div className="col">

                            <h3  style={{color:'white'}} className="border-topp">Subscription Payment Model</h3>
                            <p>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>

                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}