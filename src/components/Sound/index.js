import {useEffect, useState} from 'react'
import './style.css'
import Header from '../../components/Header'
import stereo1 from '../../images/stereo-1.png'
import stereo2 from '../../images/stereo-2.png'
import DemoBtn from '../DemoBtn'

export default function Sound() {
    const [audioContext, setAudioContext] = useState(null)
    const [audioElement, setAudioElement] = useState(null)
    const [togglePlay, setTogglePlay] = useState(false)
  
    useEffect(() => {
        // for legacy browsers
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContexts = new AudioContext();
setAudioContext(audioContexts)
const audioElements = document.querySelector('audio');
setAudioElement(audioElements)
audioElement &&  audioContext.createMediaElementSource(audioElement).connect(audioContext.destination);
      }, []);
      function playHandler(e){
        setTogglePlay(!togglePlay)
        if(togglePlay===false){
            audioElement.play()
        }else(
            audioElement.pause()
        )
          
      }
        
    return (
        <div style={{ backgroundColor: '#D34848' }}>
            <Header color='#D34848' />
            <audio src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/858/outfoxing.mp3" crossOrigin="anonymous" ></audio>
            <div className="container" style={{marginLeft:'11%'}}>
                {/* <Slider/> */}
                <div className="row" style={{marginTop:'15%',paddingBottom:'5%'}}>
                    <div className="col-lg-7 col-md-12">
                        <h1 style={{color:'white', paddingTop:'90px'}}>SUPERIOR SOUND</h1>
                        <h3>Experience live versions of your favourite songs.</h3>
                        <DemoBtn colored='#D34848' text='SEE DEMO'/>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <button onClick={playHandler} style={{ backgroundColor: 'transparent', borderWidth: '0' }}><img src={stereo1} width='150' /></button>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <button onClick={playHandler} style={{ backgroundColor: 'transparent', borderWidth: '0' }}>
                            <img src={stereo2} alt="" width='150' style={{ paddingTop: '50%' }} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
