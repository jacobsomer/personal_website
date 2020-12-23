import React, { Component,useState  } from "react";
import { Button, Navbar, NavDropdown,Nav } from 'react-bootstrap'
import "./App.css"
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import Image from 'react-bootstrap/Image'
import Photo from './photo.JPG'



const themes = {
  About:{
    text:"#7395AE",
    background:'#1A1A1D'
  },
  Resume:{
    text:"#7395AE",
    background:'#1A1A1D'
  },
  Projects:{
    text:"#7395AE",
    background:'#1A1A1D'
  },
  Skills:{
    text:"#7395AE",
    background:'#1A1A1D'
  },
  Contact:{
    text:"#7395AE",
    background:'#1A1A1D'
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.updateDimensions = this.updateDimensions.bind(this);
    // Don't call this.setState() here!
    this.state = {
      heightSet: document.body.scrollHeight,
      scroll:window.pageYOffset,
    isPaneOpenLeft:false,
    color:'#1A1A1Dd'
  };

  }


  componentDidMount() {
    this.updateDimensions()
    window.addEventListener('scroll', this.updateDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateDimensions);
}
  

  updateDimensions = e => {
    const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    const scrolled = winScroll / height


    this.setState({scroll:scrolled});

    if (this.state.scroll<=.33){
      this.setState({color:'#1A1A1D'})
    }
    else if (this.state.scroll>.33 && this.state.scroll<.660){
      this.setState({color:'#7395AE'})
    }
    else if ( this.state.scroll>=.99){
      this.setState({color:'#557A95'})
    }
    else{
      this.setState({color:'#379683'})
    }
  }

  

  render() {
    return (
      <div className="app">
        

<div className="About" position="absolute" style={{height:'100vh',width:'100vw',background:'#1A1A1D'}}>
  <Navbar  className="color-nav" variant="light" expand="lg" fixed="top"> 
      <Navbar.Brand style={{color:this.state.color}} onClick={() => scroller.scrollTo('About', {
              duration: 800,
              delay: 0,
              smooth: 'easeInOutQuart'
            })} > 
            <h2>
              Jacob Somer
            </h2>
            
            </Navbar.Brand>
      <Navbar.Toggle bg="dark" style={{background:this.state.color}}  aria-controls="basic-navbar-nav" />
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
              Contacts
            </h5>
            </Nav.Link>
        </Nav>
      </Navbar.Collapse>
     
    
    </Navbar>
    <SlidingPane
        className='bg-dark'
        isOpen= {this.state.isPaneOpenLeft}
        from="left"
        width="250px"
        hideHeader={true}
      >
          <div style={{backgroundColor:'transparent',position:'absolute',top:'100px'}}>
            <Image style={{top:'100px',postion:'absolute',width:'171px'}}src={Photo} roundedCircle>
           
            </Image>
            <h2 style={{color:this.state.color,position:'relative',left:'43px'}}>
              Contact 
            </h2>
            <hr
                style={{
                    color: this.state.color,
                    backgroundColor: this.state.color,
                    height: 1
                }}
            />
            <h5 style={{color:this.state.color,textAlign:'center'}}>
              Email 
              <h6 style={{ color:this.state.color,textAlign:'center'}}>
                jsomer@email.wm.edu
              </h6>
            </h5>
            <h5 style={{color:this.state.color,textAlign:'center'}}>
              GitHub 
              <h6 style={{ color:this.state.color,textAlign:'center'}}>
               https://github.com/jacobsomer
              </h6>
            </h5>
           
            <h6 style={{color:this.state.color,textAlign:'center'}}>
              
            </h6>
            
    

          </div>

          
        
      </SlidingPane>
      
    </div>
   
    <div className="Resume" position="relative" style={{height:'100vh',width:'100vw',background:'#7395AE'}}>
    </div>
    <div className="Projects" position="relative" style={{height:'100vh',width:'100vw',background:'#379683'}}>
    </div>
    <div className="Skills" position="relative" style={{height:'100vh',width:'100vw',background:'#557A95'}}>
    </div>
        
      </div>
      
    );
  }
}

export default App;

