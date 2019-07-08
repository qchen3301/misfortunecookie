import React, {useState} from 'react';
import axios from 'axios'
import Fortune from '../Fortune'
import Cookie from '../../assets/fortunecookie.jpg';
import {CookieImg, CookieContainer} from './FortuneCookie-styles'



const FortuneCookie = () => {
    const [fortune, setFortune] = useState('')

    const getFortune = async () => {
        const res = await axios.get('http://fortunecookieapi.herokuapp.com/v1/fortunes')
        const fortune = await res.data[Math.floor(Math.random() * res.data.length)]
        setFortune(fortune.message)
    }

    return (
        <CookieContainer>
            <CookieImg src={Cookie} alt="logo" onClick={() => getFortune()}/>
            <Fortune fortune={fortune}/>
        </CookieContainer>
    );
};

export default FortuneCookie;
