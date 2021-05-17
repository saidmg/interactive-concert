import './style.css'
import Header from '../../components/Header'
import DemoBtn from '../DemoBtn'
import { useEffect, useState, useCallback } from 'react'

export default function Seat() {
    const [cursor, setCursor] = useState({ active: false });
    const [position, setPosition] = useState({ clientX: 0, clientY: 0, });
    const [curs, setCurs] = useState({ pageX: '0%', pageY: '0%' })

    function revealPic(event) {

        let x = event.clientX
        let y = event.clientY - event.pageY / 10
        setCurs({
            x,
            y
        });
    }

    const updatePosition = event => {
        const { clientX, clientY } = event;
        setPosition({
            clientX,
            clientY,
        });
    };
    const toggleCursor = useCallback(() => {
        setCursor(({ active }) => ({ active: !active }));
    });

    useEffect(() => {
        document.addEventListener("mousemove", updatePosition, false);
        document.addEventListener("mouseenter", updatePosition, false);

        return () => {
            document.removeEventListener("mousemove", updatePosition);
            document.removeEventListener("mouseenter", updatePosition);
        };
    }, [])

    return (
        <div onMouseEnter={toggleCursor} onMouseMove={revealPic}
            onMouseLeave={toggleCursor} className={cursor.active ? 'insideTheDiv backk' : 'outsideTheDiv backk'}>

            <div>

                <Header color='#FFB33F' />
                <div class="container" style={{ height: '70vh' }}>
                    <div className="row justify-content-end" style={{ paddingTop: '10%' }}>
                        <div className="col-lg-7 col-md-12" >
                            <div className="background-img" style={{ top: (curs.y), left: curs.x, zIndex: '0' }}>
                            </div>
                            <div className='inverting' style={{ position: 'relative' }}>
                                <h1 style={{ color: 'white' }}>FRONT ROW SEATS</h1>
                                <h3 >Experience concerts up close and personal.</h3>

                                <DemoBtn colored='#FFB33F' text='SEE DEMO' />
                            </div>
                        </div>

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
                    pointerEvents: "none",

                }}
            >
                <svg
                    width={50}
                    height={50}
                    viewBox="0 0 50 50"
                    style={{
                        mixBlendMode: 'difference',

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
                    <text x="50%" y="50%" text-anchor="middle" fontColor="white" stroke-width="0.2px" dy="0.5em" fontSize='5px'>REVEAL</text>
                </svg>
            </div>
        </div>
    )
}
