import React, { useState, useEffect } from 'react'
import '../../../index.css'
import AM from '../Flags/am.png'
import RU from '../Flags/ru.webp'
import EN from '../Flags/en.png'

function Lang() {
    let [langChanger, setLangChanger] = useState([AM, AM, RU, EN])

    let [show, setshow] = useState(false);

    useEffect(() => {
        const storedArray = JSON.parse(localStorage.getItem('langChanger')) || [AM, AM, RU, EN];
        setLangChanger(storedArray);
    }, []);

    const handleLanguageChange = (langChanger) => {
        localStorage.setItem('langChanger', JSON.stringify(langChanger));
    };

    return (
        <>
            <div className='language-current-status'>
                <img src={langChanger[0]}
                    onClick={() => {
                        setshow(!show)
                    }}
                    className='am-lang' alt='AM' />
            </div>
            {show && (
                <div className='language-other-variants'>
                    {langChanger[0] !== AM && <img src={langChanger[1]} onClick={() => {
                        langChanger[0] = langChanger[1];

                        handleLanguageChange(langChanger);
                        setshow(!show);
                    }} className='am-lang' alt='AM' />}
                    {langChanger[0] !== langChanger[2] && <img src={langChanger[2]} onClick={() => {
                        langChanger[0] = langChanger[2];

                        handleLanguageChange(langChanger);
                        setshow(!show);
                    }} className='ru-lang' alt='RU' />}
                    {langChanger[0] !== langChanger[3] && <img src={langChanger[3]} onClick={() => {
                        langChanger[0] = langChanger[3];

                        handleLanguageChange(langChanger);
                        setshow(!show);
                    }} className='en-lang' alt='EN' />}
                </div>
            )}
        </>
    )
}

export default Lang