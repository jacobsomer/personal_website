import React, { useState  } from "react";
import "./Projects.css"
import {Carousel } from 'react-bootstrap'
import Lefye from "./lefye.png"
import MPT from "./cover.png"
import MNIST from "./mnist.png"


const dark='#262626'

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
  };
  
    
  }
  render() {
    
    return (
        <div>
            <div style={{position:'relative',top:'12vh'}}>
                <h1 style={{textAlign:'center',color:dark}}>
                    Projects {this.value}
                </h1>
            </div>
            <div  style={{position:'relative', top:'15vh', height:'30vh'}}>
                 <Carousel >
                    <Carousel.Item style={{left:'15%',maxWidth:'70%',maxHeight:'60vh',backgroundColor:'black',overflow:'hidden'}} >
                        <a href="https://github.com/jacobsomer/lefye" target="_blank" >
                            <img
                            className="Lefye"
                            src={Lefye}
                            alt="First slide"
                            style={{width:'100%'}}
                            />
                        </a>
                        <Carousel.Caption>
                        <h1 style={{color:this.state.color}}>Lefye </h1>
                        <p style={{color:'#fff'}}>A react.js app that uses the Spotify API to give users unique, personalized reccomendations.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{left:'15%',maxWidth:'70%',maxHeight:'60vh',backgroundColor:'black',overflow:'hidden'}} >
                        <a href="https://github.com/jacobsomer/Modern-Portfolio-Theory-and-LSTMs" target="_blank" >   
                            <img
                            className="Lefye"
                            src={MPT}
                            alt="First slide"
                            style={{width:'100%'}}
                            />
                        </a>
                        <Carousel.Caption>
                        <h3>Modern Portfolio Theory and LSTMs</h3>
                        <p>A Data Science focused project where I use tensorflow Long Short-Term Memory Networks to forecast stock prices and covariance.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{left:'15%',maxWidth:'70%',maxHeight:'60vh',backgroundColor:'black',overflow:'hidden'}} >
                        <a href="https://github.com/jacobsomer/MNIST-Classifier-Pytorch" target="_blank" >   
                            <img
                            className="Lefye"
                            src={MNIST}
                            alt="First slide"
                            style={{height:'100%',width:'100%'}}
                            />
                        </a>
                        <Carousel.Caption>
                        <h3>MNIST Classifier   </h3>
                        <p>The most classic dataset in Image Recognition. Achieved 98% accuracy on test set.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>  
            </div>
            

           
        </div>
        
    );
  }
}

export default Project;

