import React, {Component} from 'react';

class Answers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAnswered: false,
            classNames: ['', '', '', '']
        }
        
        this.checkAnswer = this.checkAnswer.bind(this);
        this.clearClasses = this.clearClasses.bind(this);
    }
    
    checkAnswer(e) {
        let { isAnswered } = this.props;
        
        if(!isAnswered) {
            let elem = e.currentTarget;
            let { correct, increaseScore , wrong } = this.props;
            let answer = Number(elem.dataset.id);
            let updatedClassNames = this.state.classNames;

            if(answer === correct){
                updatedClassNames[answer-1] = 'right';
                increaseScore();
            }
            else {
                updatedClassNames[answer-1] = 'wrong';
                wrong()
            }
            
            this.setState({
                classNames: updatedClassNames,
                
            })

            this.props.showButton();       
            var myTime = setTimeout(() => {
                this.clearClasses();
                //console.log("IN SET Timeout")
            }, 3000);
        }
    }
    clearClasses(){
        this.setState({
            classNames: ['', '', '', '']
        })
        
    }
    render() {
        let { answers } = this.props;
        let { classNames } = this.state;
        
        let transition = {
            transitionName: "example",
            transitionEnterTimeout: 300,
            transitionLeaveTimeout: 300
        }
        
        return (
            <div  className="container" id="answers">
                <div className="row">
                    {
                        answers.map((item, i)=>{
                            return (
                              
                                     <button className="col-8 primary" style={{ marginLeft:"10%",width:"35%" , marginTop:"2%" , border:"3px solid black" , }} onClick={this.checkAnswer} 
                            className={classNames[i]} data-id={i+1}>{item}</button>
                           
                                
                               
                            )
                        })
                    }                    
                    {/* <button className="col-5" style={{ marginLeft:"10%",width:"35%" }} onClick={this.checkAnswer} 
                        className={classNames[0]} data-id="1">
                   
                   {answers[0]}</button>

                    <button className="col-5" style={{marginLeft:"5%" , width:"35%"}} onClick={this.checkAnswer} 
                        className={classNames[1]} data-id="2">
                    
                    {answers[1]}</button>
                    </div>
                    <div className="row" style={{marginTop:"5%"}}>

                    <button className="col-5 " style={{ marginLeft:"10%",width:"35%"}} onClick={this.checkAnswer} 
                        className={classNames[2]} data-id="3">
                   
                   {answers[2]}</button>

                    <button className="col-5" style={{marginLeft:"5%" , width:"35%"}} onClick={this.checkAnswer} 
                        className={classNames[3]} data-id="4">
                    
                   {answers[3]}</button> */}
                   </div>
            </div>
        );
    }
}

export default Answers