import React, { Component } from 'react'; 
import logo from './assets/logo/logo@3x.png'

function Header() {
        return(
        //logo at the top
            <div>
                <header>
                <img src= {logo} alt="playline logo" />
                </header>
            </div>

        )
    }

export default Header;
