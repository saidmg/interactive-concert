import './style.css'
import smallSpeaker1 from '../../images/small-speaker-1.png'
import smallSpeaker2 from '../../images/small-speaker-2.png'
import Header from '../Header'


export default function Reviews() {
    return (    
        <>
    <div style={{backgroundColor:'#1FE1E9'}}>
        <Header color='#1FE1E9'/>
        <div className="container"  style={{paddingTop:'10%'}}>
        <div className="row">
            <div className="col-lg-4 col-md-12">
            <img src={smallSpeaker1} alt="first speaker " width="250"/>
            <img src={smallSpeaker2} alt="second speaker" width="250" style={{marginLeft:'15%'}}/>
            </div>
            <div className="col-lg-8 col-md-12">
                <h1 className="my-5" style={{color:'white'}}>REVIEWS</h1>
                <div className="row align-items-start">
                    <div className="col">
                    <span class="fa fa-star m-1"></span>
                    <span class="fa fa-star m-1"></span>
                    <span class="fa fa-star m-1"></span>
                    <span class="fa fa-star m-1"></span>
                    <span class="fa fa-star m-1"></span>
                        <h5 style={{color:'white'}}>ARTIST</h5>
                        <p>“Love it, it’s the Best.I can’t live without it!”</p>
                    </div>
                    <div className="col">
                    <span class="fa fa-star m-1"></span>
                    <span class="fa fa-star m-1"></span>
                    <span class="fa fa-star m-1"></span>
                    <span class="fa fa-star m-1"></span>
                    <span class="fa fa-star m-1"></span>
                        <h5 style={{color:'white'}}>PRODUCER</h5>
                        <p>“Love it, it’s the Best.I can’t live without it!”</p>
                    </div>
                    <div className="col">
                    <span class="fa fa-star m-1"></span>
                    <span class="fa fa-star m-1"></span>
                    <span class="fa fa-star m-1"></span>
                    <span class="fa fa-star m-1"></span>
                    <span class="fa fa-star m-1"></span>
                        <h5 style={{color:'white'}}>MUSIC FAN</h5>
                        <p>“Love it, it’s the Best.I can’t live without it!”</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    </>
    )
}
