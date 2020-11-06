import React, { Component } from 'react';

function Footer(){
    return(
    //Naivagation Section where users could find out more info on the company
        <footer>
            <section>
                <div className="wrapper">
                    <div>
                        <nav>
                            <ul>
                                <li><a href="https://www.playline.com/about/">About <span>|</span></a></li>
                                <li><a href="https://www.playline.com/how-it-works/">Plb Bonus <span>|</span></a></li>
                                <li><a href="https://www.playline.com/contact-us/">Contact <span>|</span> </a></li>
                                <li><a href="https://www.playline.com/security/">Security <span>|</span> </a></li>
                                <li><a href="https://www.playline.com/responsible-play/">Responsible Play <span>|</span></a></li>
                                <li><a href="https://www.playline.com/privacy-policy-2/">Privacy <span>|</span></a></li>
                                <li><a href="https://www.playline.com/terms-of-use/">Terms <span>|</span></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer;