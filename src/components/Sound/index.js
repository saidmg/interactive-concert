import { useEffect, useState, useCallback } from 'react'
import './style.css'
import Header from '../../components/Header'
import stereo1 from '../../images/stereo-1.png'
import stereo2 from '../../images/stereo-2.png'
import DemoBtn from '../DemoBtn'

export default function Sound() {
    const [audioContext, setAudioContext] = useState(null)
    const [audioElement, setAudioElement] = useState(null)
    const [togglePlay, setTogglePlay] = useState(false)

    const [cursor, setCursor] = useState({ active: false });

    const [position, setPosition] = useState({ clientX: 0, clientY: 0, });
    const updatePosition = event => {
        const { pageX, pageY, clientX, clientY } = event;

        setPosition({
            clientX,
            clientY,
        });
    };
    const toggleCursor = useCallback(() => {
        setCursor(({ active }) => ({ active: !active }));
    });
    useEffect(() => {
        // for legacy browsers
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const audioContexts = new AudioContext();
        setAudioContext(audioContexts)
        const audioElements = document.querySelector('audio');
        setAudioElement(audioElements)
        audioElement && audioContext.createMediaElementSource(audioElement).connect(audioContext.destination);

        document.addEventListener("mousemove", updatePosition, false);
        document.addEventListener("mouseenter", updatePosition, false);

        return () => {
            document.removeEventListener("mousemove", updatePosition);
            document.removeEventListener("mouseenter", updatePosition);
        };
    }, []);

    function playHandler(e) {
        setTogglePlay(!togglePlay)
        if (togglePlay === false) {
            audioElement.play()
        } else (
            audioElement.pause()
        )

    }

    return (

        <div onMouseEnter={toggleCursor}
            onMouseLeave={toggleCursor} style={{ backgroundColor: '#D34848' }} className={cursor.active ? 'insideTheDiv' : 'outsideTheDiv'}>
            <Header color='#D34848' />
            <audio src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/858/outfoxing.mp3" crossOrigin="anonymous" ></audio>
            <div className="container" style={{ marginLeft: '11%' }}>
                {/* <Slider/> */}
                <div className="row" style={{ marginTop: '15%', paddingBottom: '5%' }}>
                    <div className="col-lg-7 col-md-12">
                        <h1 style={{ color: 'white', paddingTop: '90px' }}>SUPERIOR SOUND</h1>
                        <h3>Experience live versions of your favourite songs.</h3>
                        <DemoBtn colored='#D34848' text='SEE DEMO' />
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
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 9999,
                    pointerEvents: "none"
                }}
            >
                <svg
                    //   text='say'
                    width={50}
                    height={50}
                    viewBox="0 0 50 50"
                    style={{
                        position: "absolute",
                        left: position.clientX,
                        top: position.clientY,
                        transform: `translate(-50%, -50%) scale(${cursor.active ? 2.5 : 0})`,
                        stroke: cursor.active ? "white" : "black",
                        strokeWidth: 0.5,
                        fill: cursor.active ? "rgba(211,72,72,0)" : "black",
                        transition: "transform .2s ease-in-out",
                    }}
                >
                    <circle
                        cx="25"
                        cy="25"
                        r="12"
                    />
                    <text x="50%" y="50%" text-anchor="middle" fontColor="white" stroke-width="0.2px" dy="0.5em" fontSize='5px'>CLICK</text>
                </svg>
            </div>
        </div>
    )
}
