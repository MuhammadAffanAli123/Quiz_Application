import React, { Component } from 'react';
import data from '../questions_data/questions';
import Answers from './Answers.jsx';
import Popup from './Popup.jsx';
import StarRatings from 'react-star-ratings';
import InlineBlock from 'react-inline-block'
// import ProgressBar from 'react-bootstrap '
import ProgressBar from 'react-bootstrap/ProgressBar'
import Button from 'react-bootstrap/Button'
 const color1=0 
const color2=8
const color3=75
var now;

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            total: data.length,
            showButton: true,
            questionAnswered: false,
            score: 0,
            displayPopup: 'flex',
            show: "",
            scoreDetect:0
        }
        this.nextQuestion = this.nextQuestion.bind(this);
        this.handleShowButton = this.handleShowButton.bind(this);
        this.handleStartQuiz = this.handleStartQuiz.bind(this);
        this.handleIncreaseScore = this.handleIncreaseScore.bind(this);
    }

    componentWillMount() {
        let { count } = this.state;
        this.insertData(count);
    }

    insertData(count) {
        var option=[]
       
        
        this.setState({
            question: data[count].question,
            answers:  data[count].answers.map((item , i)=>{
                // return    console.log(item , "itemmmmmmmmm")
                return   item 
            })
                    ,
      
            correct: data[count].correct,
            count: this.state.count + 1
        });
    }


    handleShowButton() {
        this.setState({
            showButton: false,
            questionAnswered: true
        })
    }
    
    nextQuestion() {
        let { count, total} = this.state;

        if(count === total){
            this.setState({
                displayPopup: 'flex'
            });
        } else {
            setTimeout(() => {
                this.insertData(count);
                
            }, 3000);
            this.setState({
                showButton: true,
                questionAnswered: false,
                show:""
            });
        }

        
    }

    

    handleStartQuiz() {
        this.setState({
            displayPopup: 'none',
            count: 1
        });
    }

    handleIncreaseScore() {
        this.setState({
            score: this.state.score + 1,
            show:"CORRECT!"
        });
    }

    handleScore = () => {
        this.setState({
            scoreDetect: this.state.scoreDetect + 1,
            show:"WRONG!"
        });
    }
    componentWillUpdate()
    {
        this.barscore
    }
     barscore= ()=>{
          
     }

  render() {

    let { count, show,total, question, answers, correct, showButton, questionAnswered, displayPopup, score} = this.state;
    now=(count/total)*100
   const  now1=(score/total)*100
   const  now3=now-now1
   const nowf =     ( 100-now1)
   const nowf1 =  100 - (now1+now3) 
  
  
  
    
     
    return (
        // style={{border:"1px  solid"  , position:"absolute", left:"20%" , top:"10%" , width:"60%" , height:"85%"}}
      <div  className="container" style={{border:"5px  solid lightgray"  ,backgroundColor:"white", position:"absolute", left:"7%" , top:"5%" , width:"90%"  , marginRight:"5%"}}>
       
        <ProgressBar now={now}  variant="secondary light"   className="row"/>
      
        
        <div className="row">
            <div className="col-lg-12 col-md-10">
                {/* <div id="question"> */}
                <div >
                    <h3 style={{fontWeight:"bold" , marginLeft:"10%" , marginTop:"5%"}} >Question {count}/{total}</h3>
                    <p style={{ marginLeft:"10%" ,color :"gray"}} >Entertainment Board Games
                        <br/>
                    <StarRatings
          rating={3}
          starRatedColor="black"
          numberOfStars={5}
          starDimension="15px"
        starSpacing="2px"
          name='rating'
        />
                    </p>
                    
                  
                    
                   
                </div>
                <div style={{display: 'inline-block',}} > <p style={{fontWeight:"bold" , fontSize:"130%" , justifyContent:"center", align:"center" , marginLeft:"10%", display: 'inline-block',}}>{question}?</p>
                {/* <InlineBlock style={{display: 'block'}}>{question}? </InlineBlock> */}
                </div>
                <div>
    {/* <p>your score is{score}</p>
    <p>your total is{total}</p> */}
                </div>

                <Answers 
                    answers={answers} 
                    correct={correct} 
                    showButton={this.handleShowButton} 
                    isAnswered={questionAnswered} 
                    increaseScore={this.handleIncreaseScore}
                    wrong={this.handleScore}


                    
                />

<br/>
                  
               <div>
           </div>
                <div id="submit" >
                <p   style={{marginLeft:"0%" , height:"10%" , fontWeight:"bold", fontSize:"150%"}}>{this.state.show}</p>
               
                    { 
                    
                    <Button  style={{  marginLeft:"0%", backgroundColor:"black", }}
                    disabled={this.state.showButton}  onClick={this.nextQuestion} >
                    {count === total ? 'Finish quiz' : 'Next  question'}
                    </Button> }
                    
                </div>
                <div style={{marginTop:"9%",}}>
                    <div className="row">
                    <a style={{ marginLeft:"27%"}} >score :{Math.round(now1)} % </a>
                    <a  style={{ marginLeft:"25%"}} > Max score:{Math.round(now)} %</a>
                    </div>
            

                <ProgressBar   style={{width:"50%" , marginLeft:"25%", backgroundColor:"white" , border:"2 px solid"}}  >
                
  <ProgressBar  variant="dark" now={now1 } key={1}  />
  <ProgressBar  variant="secondary light" now={now3} key={3} />
  <ProgressBar variant="light: $gray-100" now={5} key={1} />
  
</ProgressBar>
                </div>
                
                </div>       
            
          
        </div>

        
               
      </div>
    )
  }
}
export default Main;