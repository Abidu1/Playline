import React, { Component } from 'react'; 
import progress from './assets/icons/progress@3x.png'
import notify from './assets/icons/notify-me@2x.png';
import moneyBag from './assets/icons/money-bag@2x.png';
import appStore from './assets/icons/ios-app@2x.png';
import googlePlay from './assets/icons/google-play@2x.png';
import PlayerList from './PlayerList';

function Main() {
        return(
            // Loading page of when users can see the team members that they selected 
            <div className="playerCard">
                <main>
                    <section>
                        <div className="wrapper">
                            <img className="progress" src= {progress} alt="greenbar that shows playline is set" />
                            <div className="playlineDesc">
                                <h2>Your Playline is Set!</h2>
                                <h3>Come Back @ 7:30pm to Track it Live!</h3>
                                <p>Pro tip: You can manage your Playline's until they go live in the Upcoming area</p>
                            </div>
                            <div>
                                <PlayerList/>
                            </div>
                            <div className="notifyDespositSection">
                                <div> 
                                    <img src={notify} alt="yellow bell" />  
                                    <a href="#"><h4>Notify Me</h4></a>
                                </div>
                                <div>
                                    <img src={moneyBag} alt="green bag with dollar sign" /> 
                                    <a href="#"><h4>Deposit</h4></a>
                                </div>
                            </div>
                            <div className="appSection">
                                <h4>Download the App</h4>
                                    <div>
                                        <a href="https://www.apple.com/ca/app-store/"> <img src={appStore} alt="sign with apple logo thats says available in app store" /> </a>
                                        <a href="https://play.google.com/store/apps?hl=en_CA&gl=US"><img src ={googlePlay} alt="triangle on the side with a sign that says get it on google play" /></a>
                                    </div>
                            </div>
                        </div>
                    </section>  
                </main>
            </div>

        )
    }

export default Main;