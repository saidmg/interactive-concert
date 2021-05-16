import {useEffect} from 'react'
import './style.css'
import Sound from '../../components/Sound'
import Seat from '../../components/Seat'
import Perks from '../../components/Perks'
import Reviews from '../../components/Reviews'
import Purchase from '../../components/Purchase'
import Footer from '../../components/Footer'
import Slider from '../../components/Slider'

export default function Landing() {
    useEffect(() => {
        document.title = 'Interactive Concert Experience';
    }, []);

    return (    
    <>
    <Sound/>
    <Seat/>
    <Perks/>
    <Reviews/>
    <Purchase/>
    <Footer/>
    </>
    )
}
