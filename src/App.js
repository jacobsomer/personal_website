import React, { Component,useState  } from "react";
import { Button, Navbar, NavDropdown,Nav } from 'react-bootstrap'
import "./App.css"
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Collapse from 'react-bootstrap/Collapse'
import Image from 'react-bootstrap/Image'
import Photo from './portrait.jpeg'
import Project from './containers/Projects'
import Skill from './containers/Skills'
import Resume from './containers/Resume'
import "react-sliding-pane/dist/react-sliding-pane.css";
import background from "./bg.jpeg";
import Pane from './containers/slidingPane'
import ParticleAnimation from './containers/particles'

const colors={
  col1:'#FFFFF0',
  col2:'#639c9a',
  col3:'#379683',
  col4:'#FFFFF0'
  
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll:window.pageYOffset,
    isPaneOpenLeft:false,
    color:colors.col1,
    contactcolor:colors.col4,
    fade:false,
    resume:false
  };

  }
 

  componentDidMount() {
    this.updateDimensions()
    this.load()
    window.addEventListener('scroll', this.updateDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateDimensions);
}
  async load(){
    await new Promise(r => setTimeout(r, 2000));
    this.setState({fade:true})

  }
  

  updateDimensions = e => {
    const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    const scrolled = winScroll / height


    this.setState({scroll:scrolled});

    if (this.state.scroll<=.23){
      this.setState({color:colors.col1})
      this.setState({contactcolor:colors.col4})
    }
    else if (this.state.scroll>.23 && this.state.scroll<.478){
      this.setState({color:colors.col2})
      if (!this.state.resume){
        this.setState({resume:true})
      }
      
      this.setState({contactcolor:colors.col2})
    }
    else if ( this.state.scroll>=.7267){
      this.setState({color:colors.col4})
      this.setState({contactcolor:colors.col4})
    }
    else{
      this.setState({color:colors.col3})
      this.setState({contactcolor:colors.col3})
    }
  }

  

  

  render() {
    return (
      <div className="app">
        

<div className="About" position="absolute" style={{height:'100vh',width:'100vw'}}>
  <Navbar  className="color-nav bg-dark" variant="dark" expand="lg" fixed="top"> 
      <Navbar.Brand style={{color:this.state.color}} onClick={() => scroller.scrollTo('About', {
              duration: 800,
              delay: 0,
              smooth: 'easeInOutQuart'
            })} > 
            <h2>
              Jacob Somer
            </h2>
            
            </Navbar.Brand>
      <Navbar.Toggle className="color-nav bg-dark" style={{background:this.state.color}}  aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <NavDropdown.Divider />
          <Nav.Link style={{color:this.state.color}} onClick={() => scroller.scrollTo('About', {
              duration: 800,
              delay: 0,
              smooth: 'easeInOutQuart'
            })}>
              <h5>
              About
            </h5>
            </Nav.Link>
          
          <Nav.Link style={{color:this.state.color}}  onClick={() => scroller.scrollTo('Resume', {
              duration: 800,
              delay: 0,
              smooth: 'easeInOutQuart'
            })}>
            <h5>
              Resume
            </h5>
            </Nav.Link>
          <Nav.Link style={{color:this.state.color}}  onClick={() => scroller.scrollTo('Projects', {
              duration: 800,
              delay: 0,
              smooth: 'easeInOutQuart'
            })} >
            <h5>
              Projects
            </h5>
            </Nav.Link>
          <Nav.Link style={{color:this.state.color}}  onClick={() => scroller.scrollTo('Skills', {
              duration: 800,
              delay: 0,
              smooth: 'easeInOutQuart'
            })}>Skills</Nav.Link>
          <Nav.Link style={{color:this.state.color}}  onClick={() => this.setState({isPaneOpenLeft:!this.state.isPaneOpenLeft})
            }>
            <h5>
              Contact
            </h5>
            </Nav.Link>
        </Nav>
      </Navbar.Collapse>
     
    
    </Navbar>
    <Pane isPaneOpenLeft={this.state.isPaneOpenLeft} color={this.state.contactcolor}/>)
    
   
   
    <Collapse in={this.state.fade} timeout={50000}>
    <h1 className='TypingText' style={{position:'relative',top:'100px',left:'20vw',color:colors.col4,maxWidth:'60vw',textAlign:'center'}} >
        About Me
    
    <h4 className='' style={{fontSize:'3vh',position:'relative',top:'5vh',textAlign:'center',color:'#ffff0'}} >
      My name is Jacob, and I am a computer science student at the College of
       William and Mary seeking an internship in software development. 
       My hobbies include hiking, making music with FL Studio, cooking, and coding.
       I've been coding for a year and a half now, and I've really enjoyed the journey.
       My projects range from react.js frontend development to machine learning with Keras and Pytorch.
       Feel free to explore the code for this <a style={{color:'#dc3545'}} target="_blank" href="https://github.com/jacobsomer/personal_website"> website </a>
       along with any of my <a href="#" style={{color:'#dc3545'}}  onClick={() => scroller.scrollTo('Projects', {
              duration: 800,
              delay: 0,
              smooth: 'easeInOutQuart'
            })} > projects </a>.
        

     
    </h4>
    </h1>
    </Collapse >
    </div>
   
    
   
    <div className="Resume" position="relative" style={{height:'100vh',width:'100vw',background:colors.col2}}>
          <Resume fadein={this.state.resume}/>
    </div>
    <div className="Projects" position="relative" style={{height:'100vh',width:'100vw',background:colors.col3}}>
      <Project/>
    </div>
    <div className="Skills" id="SkillsSection"position="relative" style={{height:'200vh',width:'100vw',background:colors.col4}}>
      <div id="particles" >
        <ParticleAnimation />
       
      </div>
      <Skill  />
      
        

      
      
      
      
  
    </div>
    
        
      </div>
      
    );
  }
}

export default App;