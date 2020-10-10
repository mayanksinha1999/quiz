import React,{Component} from 'react';
import {questions} from './QuizData';
import {Button} from 'react-bootstrap';

class Anotherquestion extends Component{
    constructor(props){
        super(props);
        this.state={
            questions,
            currentQuestion:{},
            nextQuestion:{},
            previousQuestion:{},
            answer:'',
            currentQuestionIndex:0,
            nextButtonDisabled:false,
            previousButtonDisabled:true,
            numItems:null
        }
    }


    


    render(){
        return(
            <div>
                <input type="text" placeholder="Enter Number" />{' '}
                <Button className="button-panel">Go</Button>
            </div>
        );
    }
}

export default Anotherquestion;