import React, { Component  } from "react";
import SlidingPane from "react-sliding-pane";
import './slidingPane.scss'
import './slidingPane.css'
import Button from 'react-bootstrap/Button'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import copy from './copy.png'
class Pane extends React.Component{
    constructor(props) {
        super(props);
        this.state = { textToCopy: 'jsomer@email.wm.edu',
       }
    }

    


    render(){
        const notify = () => toast("Wow so easy !");
        return(
        <SlidingPane
        className='bg-dark'
        isOpen= {this.props.isPaneOpenLeft}
        from="left"
        width="21%"
        hideHeader={true}
        style={{color:this.props.color}}
      >
          <div style={{backgroundColor:'transparent',position:'absolute',top:'100px'}}>
          
           
            <h2 style={{color:this.props.color,position:'relative',left:'28%'}}>
              Contact 
            </h2>
            <hr
                style={{
                    color: this.props.color,
                    backgroundColor: this.props.color,
                    height: 1
                }}
            />
            <h5 style={{color:this.props.color,textAlign:'center'}}>
              Email 
              <h6 style={{ color:this.props.color,textAlign:'center'}}>
                jsomer@email.wm.edu
             
                    <Button id="button" style={{borderColor:'transparent'}}onClick={() => {navigator.clipboard.writeText(this.state.textToCopy);
                    toast("Copied to ClipBoard");
                    }} ></Button> 
                   <ToastContainer
                    style={{bottom:'100px',colorR:'black',width:'200px'}}
                    position="bottom-left"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={true}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    />
              </h6>
            </h5>
            <h5 style={{color:this.props.color,textAlign:'center'}}>
              GitHub 
              <h6 style={{ color:this.props.color,textAlign:'center'}}>
              <a style={{color:this.props.color}} target="_blank" href="https://github.com/jacobsomer"> https://github.com/jacobsomer </a>
               
              </h6>
            </h5>
            <h5 style={{color:this.props.color,textAlign:'center'}}>
              linkedin 
              <h6 style={{ color:this.props.color,textAlign:'center'}}>
              <a style={{color:this.props.color}} target="_blank" href="https://www.linkedin.com/in/jacob-somer-a722b51a7/"> https://www.linkedin.com/in/jacob-somer-a722b51a7/ </a>
               
              </h6>
            </h5>
            
           
            <h6 style={{color:this.props.color,textAlign:'center'}}>
              
            </h6>
            
    

          </div>

          
        
      </SlidingPane>
        )

    }
}

export default Pane;