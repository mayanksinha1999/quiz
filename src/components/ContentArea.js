import React,{Component} from 'react';
// import {Jumbotron,Row,Col} from 'react-bootstrap'; 
import './ContentArea.css';
// import Quiz from './Quiz/Quiz';
// import Buttons from './Buttons';
// import {Button} from 'react-bootstrap';
// import ButtonCollection from '../components/Quiz/ButtonCollection';
import {questions} from '../components/Quiz/QuizData';
import {questionStatus} from './Quiz/Quiz';


// const green = "#32CD32";




class ButtonCollection extends Component{
    constructor(props){
        super(props);
        this.state={
            questions,
            questionStatus,
        }
    }

  


    
}



class ContentArea extends ButtonCollection{
    // constructor(props) {
    //     super(props);
    //     this.state = {items: []};
    //   }

    render(){
        
        return(
            <div>
                 
            </div>
        );
    }
   
    
}




export default ContentArea;