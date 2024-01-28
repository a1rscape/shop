import React from 'react'
import '../../index.css'
import Logo from './logo'
import Language from './LanguageController/language'
import { FaShoppingCart } from "react-icons/fa";

function Header() {
    return (
        <div className='main-header'>
            <Logo />
            <FaShoppingCart className='cart-in-header' />
            <Language />
        </div>
    )
}

export default Header