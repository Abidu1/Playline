import React, { Component } from 'react';
import headshot1 from './assets/headshots/Lebron-James-PLP59D7092A6F6CEv2.png'
import headshot2 from './assets/headshots/Anthony-Davis-PLP59D70938C0B3Ev2.png'
import headshot3 from './assets/headshots/Aaron Gordon -PLP59D7092156491v2.png'
import headshot4 from './assets/headshots/Pascal-Siakam-PLP59D70927CC6DD.png'
import headshot5 from './assets/headshots/Kawhi-Leonard-PLP59D7093A107E7v2.png'
import headshot6 from './assets/headshots/Kyle-Lowry-PLP59D70927DF104.png'
import headshot7 from './assets/headshots/Dangelo Russell PLP59D709255D994v4.png'

//Database of team members with their last name, how many points they have and their headshot

const players= [
          {
            "last_name": "James",
            "points": 28,
            "headshot": headshot1
          },
          {
            "last_name": "Davis",
            "points": 29,
            "headshot": headshot2
          },
          {
            "last_name": "Gordon",
            "points": 16,
            "headshot": headshot3
          },
          {
            "last_name": "Siakam",
            "points": 24,
            "headshot": headshot4
          },
          {
            "last_name": "Leonard",
            "points": 27,
            "headshot": headshot5
          },
          {
            "last_name": "Lowry",
            "points": 18,
            "headshot": headshot6
          },
          {
            "last_name": "Russell",
            "points": 23,
            "headshot": headshot7
          }
        ]
      





export default players;