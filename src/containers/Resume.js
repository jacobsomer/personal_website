import React, { Component } from 'react';
import FadeIn from 'react-fade-in';


const dark='#262626'

class Resume extends Component {

    education(props){
        return (<div >
           <h3 style={{fontSize:'3.5vh',color:dark}}>{props.college}</h3>
            <p className="info" style={{fontSize:'2vh',color:dark}} >{props.major1} <span>&bull; {props.major2} </span>&bull;<span>
               <em className="date"> {props.graduation}</em>
               </span>
                  </p>
            <p  style={{fontSize:'1.5vh',color:dark}}>{props.description}</p>
            <p  style={{fontSize:'1.5vh',color:dark}}>{props.description1}</p>
            </div>)

      }
      experience (work){
         return (<div key={work.company}><h3 style={{fontSize:'3.5vh',color:dark}}>{work.company}</h3>
             <p className="info" style={{fontSize:'2vh',color:dark}}>{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
             <p style={{fontSize:'1.5vh',color:dark}}><span>&bull;</span>{work.description}</p>
             <p style={{fontSize:'1.5vh',color:dark}}><span>&bull;</span>{work.description1}</p>
             <p style={{fontSize:'1.5vh',color:dark}}><span>&bull;</span>{work.description2}</p>
         </div>)
       }
      
    

 
  
  render() {

    

   


    

    

    return (
      <section id="resume" style={{position:'relative',top:'10vh'}}>
      {this.props.fadein? (<FadeIn delay={1000}>
               <div >
                  <div >
                     <h1 style={{position:'relative',left:'5vw',fontSize:'5vh',color:dark}}><span>Education</span></h1>
                  </div>
                  <div style={{position:'relative',left:"30vw",width:'60vw'}}>
                     <div className="" >
                        <div className="">
                        <this.education college="The College of William & Mary" major1 ="Computer Science" major2="Economics" graduation="May 2023" 
                        description='Relevant Courses: Deep Neural Networks, Time-Series Econometrics, Algorithms, Data Structures, Principles of Programming Language, Natural Resource Economics, Provocative Texts in French Literature, and more upon request.' />
                        </div>
                     </div>
                  </div>
               </div>
               
            </FadeIn>
            ):(<></>)}
      
      {this.props.fadein? (<FadeIn delay={2250}>
         <div >
            <div >
               <h1 style={{position:'relative',left:'5vw',fontSize:'5vh',color:dark}}><span>Experience</span></h1>
            </div>
            <div style={{position:'absolute',left:"30vw",top:'100%',width:'60vw'}}>
               <div className="" >
                  <div className="">
                     <this.experience company="Geospatial Evaluation and Observation Laboratory" title ="Research Assistant " years="April 2020-Present" description="Currently working as a part-time reasearch asssistant for the GeoLab at Willliam & Mary." description1="Developed notification, background processing,and gyroscopic sensing features to Android Studio App" description2="Proposed and excecuted novel data collection technique for image-processing which increased model accuracy and shortened data collection period in half."/>
                  </div>
               </div>
            </div>
            <div style={{position:'absolute',left:"30vw",top:'200%',width:'60vw'}}>
               <div className="" >
                  <div className="">
                     <FadeIn delay={3500}>
                        <this.experience company="Self-Employed" title ="Freelance Python Tutor" years="September 2020-Present" description="Online tutor for introductory python students across multiple Virginia Schools" description1="Tought variables, functions, list comprehensions, inheritance, interface design... " description2="All of my students recieved an A- or higher in their courses and gave mostly positive feedback for my teaching."/>
                     </FadeIn>
                  </div>
               </div>
            </div>
         </div>
            </FadeIn>
            ):(<></>)}
      


     
   </section>
    );
  }
}

export default Resume;