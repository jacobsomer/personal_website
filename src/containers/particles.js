import React, { Component } from 'react';
import Particles from 'react-particles-js';

class ParticleAnimation extends React.Component {
  render() {
    return (
      <Particles 
        height='200vh'
        width='100vw'
         params={{
           particles: {
             number: {
               value: 120,
               density: {
                 enable: true,
                 value_area: 750,
               }
             },
             size: {
                value: 2,
                random: false,
                anim: {
                    enable: false,
                    speed: 40,
                    minimumValue: 0,
                    sync: false
                },
             },
          
            "color": {
              "value": "#262626"
            },
          
           },
           
           "interactivity":{
               "detect_on":'canvas',
               "events":{
                   "onhover":{
                       "enable":true,
                       "mode":"repulse"
                   }

               }
           }
         }
        }
       />

    );
  }
}
export default ParticleAnimation;
