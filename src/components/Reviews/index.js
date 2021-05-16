import './style.css'
import smallSpeaker1 from '../../images/small-speaker-1.png'
import smallSpeaker2 from '../../images/small-speaker-2.png'
import Header from '../Header'


export default function Reviews() {
    return (    
    <div style={{backgroundColor:'#1FE1E9'}}>
        <Header color='#1FE1E9'/>
        <div className="row">
            <div className="col-3">
            <img src={smallSpeaker1} width="300" style={{marginTop:'10%'}}/>
            <img src={smallSpeaker2} width="300" style={{marginLeft:'20%'}}/>
            </div>
            <div className="col-9">
                <h1>REVIEWS</h1>
                <div className="row">
                    <div className="col-4">
                        *****
                        <h5>ARTIST</h5>
                        <p>“Love it, it’s the Best.I can’t live without it!”</p>
                    </div>
                    <div className="col-4">
                        *****
                        <h5>ARTIST</h5>
                        <p>“Love it, it’s the Best.I can’t live without it!”</p>
                    </div>
                    <div className="col-4">
                        *****
                        <h5>MUSIC FAN</h5>
                        <p>“Love it, it’s the Best.I can’t live without it!”</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
