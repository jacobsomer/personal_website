import React, { useState  } from "react";
import "./Skills.css"
import Button from 'react-bootstrap/Button'
import { CardColumns, ListGroup, ProgressBar} from 'react-bootstrap'


const colors={
    first:'#CE684D',
    second:'#4DCE68',
    third:'#7D6FB3',
    fourth:'#964CB3'
}

const dark='#262626'

class Skill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        WebDevelopment:true,
        DataScience:true,
        ProgrammingLanguages:true,
  };
    
  }

  
  render() {
    
    return (
        <div  style={{position:'relative'}}>
            <div id="skill" style={{position:'relative',top:'12vh',zIndex:'2'}}>
                <h1 style={{textAlign:'center',color:dark}}>
                    Skills {this.value}
                </h1>
            </div>
            <div style={{position:'relative', top:'20vh', height:'10vh' }}>
                <div  style={{position:'absolute',width:'32vw',left:'38vw',zIndex:'2'}}>
                        {this.state.DataScience? (
                            <Button variant="primary" size="md" style={{color:dark,backgroundColor:colors.first,borderColor: '#fff'}}  onClick={() => this.setState({ DataScience: !this.state.DataScience })}>
                                Data Science 
                            </Button>
                        ):(
                            <>
                                <Button variant="primary" size="md" style={{color:dark,backgroundColor:'#fffff0',borderColor: colors.first}} onClick={() => this.setState({ DataScience: !this.state.DataScience })}>
                                    Data Science 
                                </Button>
                            </>
                        )}
                        {this.state.WebDevelopment? (
                            <Button  variant="primary" size="md" style={{color:dark,backgroundColor:colors.second,borderColor: 'transparent'}} onClick={() => this.setState({ WebDevelopment: !this.state.WebDevelopment })}>
                                Web Development
                            </Button>
                        ):(
                            <>
                                <Button variant="primary" size="md" style={{color:dark,backgroundColor:'#fffff0',borderColor: colors.second}} onClick={() => this.setState({ WebDevelopment: !this.state.WebDevelopment })}>
                                Web Development 
                                </Button>
                            </>
                        )}
                         {this.state.ProgrammingLanguages? (
                            <Button variant="outline-dark" size="md" style={{color:dark,backgroundColor:colors.third,borderColor: 'transparent'}} onClick={() => this.setState({ ProgrammingLanguages: !this.state.ProgrammingLanguages })}>
                                Programming Languages
                            </Button>
                        ):(
                            <>
                                <Button variant="primary" size="md" style={{color:dark,backgroundColor:'#fffff0',borderColor: colors.third}} onClick={() => this.setState({ ProgrammingLanguages: !this.state.ProgrammingLanguages })}>
                                    Programming Languages
                                </Button>
                            </>
                        )}
                </div>
               
            </div>
            <div  style={{position:'relative', top:'30vh',width:'40vw',left:'30vw',height:'30vh',zIndex:'2'}}>
                
                <ListGroup style={{position:'relative'}}>
                    {this.state.ProgrammingLanguages || this.state.DataScience? (
                            <ListGroup.Item style={this.state.DataScience?{height:'8vh',display:'flex',backgroundColor:colors.first}:{height:'8vh',display:'flex',backgroundColor:colors.third}}>
                                <h1 style={{position:'relative',flex:'1',fontSize:'2vh'}}>
                                    Python 4/5                    
                                    <ProgressBar id="custom" className="progress" animated now={80} style={{height:'1vh',positon:'relative',flex:'0',backgroundColor:'#fff'}}/>
                                </h1>
                            </ListGroup.Item>
                        ):(
                            <>
                            </>
                        )}
                    {this.state.DataScience? (
                              <ListGroup.Item style={{height:'8vh',display:'flex',backgroundColor:colors.first}}>
                                <h1 style={{position:'relative',flex:'1',fontSize:'2vh'}}>
                                    Pandas 4/5
                                    <ProgressBar id="custom" animated now={80} style={{height:'1vh',positon:'relative',flex:'0',backgroundColor:'#fff'}}/> 
                                </h1>
                            </ListGroup.Item>
                        ):(
                            <>
                            </>
                        )}
                    {this.state.WebDevelopment? (
                            <ListGroup.Item style={{height:'8vh',display:'flex',backgroundColor:colors.second}}>
                                <h1 style={{position:'relative',flex:'1',fontSize:'2vh'}}>
                                    React.js 3/5
                                    <ProgressBar id="custom" animated now={60} style={{height:'1vh',positon:'relative',flex:'0',backgroundColor:'#fff'}}/> 
                                </h1>
                            </ListGroup.Item>
                        ):(
                            <>
                            </>
                        )}
                    {this.state.DataScience? (
                            <ListGroup.Item style={{height:'8vh',display:'flex',backgroundColor:colors.first}}>
                                <h1 style={{position:'relative',flex:'1',fontSize:'2vh'}}>
                                    Time Series Forecasting 3/5
                                    <ProgressBar id="custom"  animated now={60} style={{height:'1vh',positon:'relative',flex:'0',backgroundColor:'#fff'}}/> 
                                </h1>
                            </ListGroup.Item>
                        ):(
                            <>
                            </>
                        )}
                    {this.state.WebDevelopment || this.state.ProgrammingLanguages? (
                        <ListGroup.Item style={this.state.WebDevelopment?{height:'8vh',display:'flex',backgroundColor:colors.second}:{height:'8vh',display:'flex',backgroundColor:colors.third}}>
                            <h1 style={{position:'relative',flex:'1',fontSize:'2vh'}}>
                                    JavaScript 3/5                    
                                <ProgressBar id="custom" className="progress" animated now={60} style={{height:'1vh',positon:'relative',flex:'0',backgroundColor:'#fff'}}/>
                            </h1>
                        </ListGroup.Item>
                    ):(
                        <>
                        </>
                        )}
                     {this.state.ProgrammingLanguages? (
                            <ListGroup.Item style={{height:'8vh',display:'flex',backgroundColor:colors.third}}>
                                <h1 style={{position:'relative',flex:'1',fontSize:'2vh'}}>
                                    Java 3/5                    
                                    <ProgressBar id="custom" className="progress" animated now={60} style={{height:'1vh',positon:'relative',flex:'0',backgroundColor:'#fff'}}/>
                                </h1>
                            </ListGroup.Item>
                        ):(
                            <>
                            </>
                        )}
                     {this.state.DataScience || this.state.WebDevelopment? (
                            <ListGroup.Item style={this.state.DataScience?{height:'8vh',display:'flex',backgroundColor:colors.first}:{height:'8vh',display:'flex',backgroundColor:colors.second}}>
                                <h1 style={{position:'relative',flex:'1',fontSize:'2vh'}}>
                                    AWS 3/5                    
                                    <ProgressBar id="custom" className="progress" animated now={60} style={{height:'1vh',positon:'relative',flex:'0',backgroundColor:'#fff'}}/>
                                </h1>
                            </ListGroup.Item>
                        ):(
                            <>
                            </>
                        )}
                    {this.state.WebDevelopment || this.state.ProgrammingLanguages? (
                        <ListGroup.Item style={this.state.WebDevelopment?{height:'8vh',display:'flex',backgroundColor:colors.second}:{height:'8vh',display:'flex',backgroundColor:colors.third}}>
                            <h1 style={{position:'relative',flex:'1',fontSize:'2vh'}}>
                                HTML/CSS 3/5                    
                                <ProgressBar id="custom" className="progress" animated now={60} style={{height:'1vh',positon:'relative',flex:'0',backgroundColor:'#fff'}}/>
                            </h1>
                        </ListGroup.Item>
                    ):(
                        <>
                        </>
                        )}
                    {this.state.WebDevelopment || this.state.ProgrammingLanguages? (
                        <ListGroup.Item style={this.state.WebDevelopment?{height:'8vh',display:'flex',backgroundColor:colors.second}:{height:'8vh',display:'flex',backgroundColor:colors.third}}>
                            <h1 style={{position:'relative',flex:'1',fontSize:'2vh'}}>
                                TypeScript 2/5                    
                                <ProgressBar id="custom" className="progress" animated now={40} style={{height:'1vh',positon:'relative',flex:'0',backgroundColor:'#fff'}}/>
                            </h1>
                        </ListGroup.Item>
                    ):(
                        <>
                        </>
                        )}
                    {this.state.WebDevelopment ||this.state.DataScience? (
                             <ListGroup.Item style={this.state.DataScience?{height:'8vh',display:'flex',backgroundColor:colors.first}:{height:'8vh',display:'flex',backgroundColor:colors.second}}>
                                <h1 style={{position:'relative',flex:'1',fontSize:'2vh'}}>
                                    Web Scraping 2/5
                                    <ProgressBar id="custom" animated now={40} style={{height:'1vh',positon:'relative',flex:'0',backgroundColor:'#fff'}}/> 
                                </h1>
                            </ListGroup.Item>
                        ):(
                            <>
                            </>
                        )}
                     {this.state.WebDevelopment? (
                            <ListGroup.Item style={{height:'8vh',display:'flex',backgroundColor:colors.second}}>
                                <h1 style={{position:'relative',flex:'1',fontSize:'2vh'}}>
                                    Express.js 2/5                    
                                    <ProgressBar id="custom" className="progress" animated now={40} style={{height:'1vh',positon:'relative',flex:'0',backgroundColor:'#fff'}}/>
                                </h1>
                            </ListGroup.Item>
                        ):(
                            <>
                            </>
                        )}
                    {this.state.WebDevelopment || this.state.DataScience? (
                            <ListGroup.Item style={this.state.DataScience?{height:'8vh',display:'flex',backgroundColor:colors.first}:{height:'8vh',display:'flex',backgroundColor:colors.second}}>
                                <h1  style={{position:'relative',flex:'1',fontSize:'2vh'}}>
                                    Parrallel Computing 2/5                    
                                    <ProgressBar id="custom" className="progress" animated now={40} style={{height:'1vh',positon:'relative',flex:'0',backgroundColor:'#fff'}}/>
                                </h1>
                            </ListGroup.Item>
                        ):(
                            <>
                            </>
                        )}
                    {this.state.ProgrammingLanguages? (
                            <ListGroup.Item style={{height:'8vh',display:'flex',backgroundColor:colors.third}}>
                                <h1 style={{position:'relative',flex:'1',fontSize:'2vh'}}>
                                    C/C++ 2/5                    
                                    <ProgressBar id="custom" className="progress" animated now={40} style={{height:'1vh',positon:'relative',flex:'0',backgroundColor:'#fff'}}/>
                                </h1>
                            </ListGroup.Item>
                        ):(
                            <>
                            </>
                        )}
                    {this.state.DataScience || this.state.WebDevelopment? (
                            <ListGroup.Item style={this.state.DataScience?{height:'8vh',display:'flex',backgroundColor:colors.first}:{height:'8vh',display:'flex',backgroundColor:colors.second}}>
                                <h1 style={{position:'relative',flex:'1',fontSize:'2vh'}}>
                                    Distributed GPU Computing 2/5                    
                                    <ProgressBar id="custom" className="progress" animated now={40} style={{height:'1vh',positon:'relative',flex:'0',backgroundColor:'#fff'}}/>
                                </h1>
                            </ListGroup.Item>
                        ):(
                            <>
                            </>
                        )}
                     {this.state.DataScience || this.state.ProgrammingLanguages? (
                        <ListGroup.Item style={this.state.DataScience?{height:'8vh',display:'flex',backgroundColor:colors.first}:{height:'8vh',display:'flex',backgroundColor:colors.third}}>
                            <h1 style={{position:'relative',flex:'1',fontSize:'2vh'}}>
                                    R 2/5                    
                                <ProgressBar id="custom" className="progress" animated now={40} style={{height:'1vh',positon:'relative',flex:'0',backgroundColor:'#fff'}}/>
                            </h1>
                        </ListGroup.Item>
                    ):(
                        <>
                        </>
                        )}
                    
                     
                    
                    
                
                    
                  
                   
                </ListGroup>

            </div>
            

           
        </div>
        
    );
  }
}

export default Skill;

