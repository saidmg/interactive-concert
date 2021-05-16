import {useEffect} from 'react'
import './style.css'
import Footer from '../../components/Footer'
import PaymentBtn2 from '../../components/PaymentBtn2'
import DownloadBtn from '../../components/DownloadBtn'
export default function Payment() {
    useEffect(() => {
        document.title = 'Payment';
    }, []);

    return (
        
        <div style={{backgroundColor:'white', paddingTop:'5%'}}>            
        <PaymentBtn2  colored='white'/>
            <h3 style={{paddingTop:'0.7%'}}>EXP|CON</h3>
            <div className="container p-5">
          
                
                    <h1>PAYMENT</h1>
                        <form>
                            
                        <div className="row py-5 ">
                        <h3>1. Select your plan</h3>
                        <div>
                        <div class="form-check">
                            <input type="radio" class="form-check-input basic-radio-input" id="validationFormCheck1" name="radio-stacked" required />
                            <label class="form-check-label  basic-radio" for="validationFormCheck1">Basic</label>
                            <div class="invalid-feedback">Please Select a plan</div>
                        </div>
                        <div  class="form-check ">
                            <input type="radio" class="form-check-input advanced-radio-input" id="validationFormCheck2" name="radio-stacked" required />
                            <label class="form-check-label advanced-radio" for="validationFormCheck2"> Advanced</label>
                            <div class="invalid-feedback">Please Select a plan</div>
                        </div>
                        <div  class="form-check ">
                            <input type="radio" class="form-check-input pro-radio-input" id="validationFormCheck3" name="radio-stacked" required />
                            <label class="form-check-label pro-radio" for="validationFormCheck3"> Pro</label>
                            <div class="invalid-feedback">Please Select a plan</div>
                        </div></div>

                </div>
                <div className="row">

                    <div className="col-lg-6 col-md-">
                        <h3>2. Billing Information</h3>

                        <div class="row">
                            <div class="col-12">
                                <label for="validationDefault01" class="form-label">FULL NAME</label>
                                <input type="text" class="form-control" id="validationDefault01" required />
                            </div>
                            <div class="col-12">
                                <label for="validationDefault02" class="form-label">BILLING ADDRESS</label>
                                <input type="text" class="form-control" id="validationDefault02" required />
                            </div>
                            <div class="col-md-6">
                                <label for="validationDefault03" class="form-label">CITY</label>
                                <input type="text" class="form-control" id="validationDefault03" required />
                            </div>
                            <div class="col-md-6">
                                <label for="validationDefault05" class="form-label">POSTAL CODE</label>
                                <input type="text" class="form-control" id="validationDefault05" required />
                            </div>
                            <div class="col-12">
                                <label for="validationDefault04" class="form-label">COUNTRY</label>
                                <select class="form-select" id="validationDefault04" required>
                                    <option selected disabled value="">Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-">
                        <h3>3. Credit Card Information</h3>
                        <div class="row">
                            <div class="col-12">
                                <label for="validationDefault01" class="form-label">CARDHOLDER'S NAME</label>
                                <input type="text" class="form-control" id="validationDefault01" required />
                            </div>
                            <div class="col-12">
                                <label for="validationDefault02" class="form-label">CARD NUMBER</label>
                                <input type="text" class="form-control" id="validationDefault02" required />
                            </div>
                            <div class="col-md-6">
                                <label for="validationDefault03" class="form-label">EXPIRY MONTH</label>
                                <select class="form-select" id="validationDefault03" required>
                                    <option selected disabled value="">Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label for="validationDefault05" class="form-label">EXPIRY YEAR</label>
                                <select class="form-select" id="validationDefault05" required>
                                    <option selected disabled value="">Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div class="col-12">
                                <label for="validationDefault04" class="form-label">CVV</label>
                                <input type="text" class="form-control" id="validationDefault04" required />

                            </div>                        </div>
                    </div>
                            <div class="form-check">
                            <p className="py-2">By continuing, I acknowledge that I’ve read and agree to the <span style={{color:'#2F1FE9'}}>Terms of Service</span> & <span style={{color:'#2F1FE9'}}>Privacy Policy.</span> </p>    
                            </div>
                        </div>
                            <DownloadBtn/>
            </form>
            </div>
            <Footer/>
        </div>
    )
}