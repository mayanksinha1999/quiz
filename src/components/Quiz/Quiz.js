import React,{Component} from 'react';
import {questions} from './QuizData';
import isEmpty from './isEmpty';
import './Quiz.css';
import {Button,Row,Jumbotron,Col} from 'react-bootstrap';
import Buttons from '../Buttons';


export const questionStatus=[]
for(let i=0;i<questions.length;i++){
    questionStatus[questions[i].id] ="";
}


const answerStatus=[]
for(let i=0;i<questions.length;i++){
    answerStatus[questions[i].id] ="";
}



class Quiz extends Component{
  constructor(props){
      super(props);
      this.state={
          questions,
          item:[],
          nextQuestion:{},
          previousQuestion:{},
          answer:[],
          itemIndex:0,
          nextButtonDisabled:false,
          previousButtonDisabled:true,
          numItems:null,
          no_of_questions:1,
          questionStatus,
          clicked:true,
          options:[],
          color:"clicked",
          userAnswer:null,
          selectedButton:null,
          answerStatus,
          review:"clicked"
          
          
      }
  }

  

  componentDidMount(){
      const {questions,item,nextQuestion,previousQuestion,no_of_questions,items} = this.state;
      this.displayQuestions(questions,item,no_of_questions,nextQuestion,previousQuestion,items);
    
  }



  buttonPanel=()=>{
    const {questionStatus}= this.state;
    const num=questionStatus.length;
    const array=[];
    var j=1;
        for(let i=0;i<num;i++)
        {       
                    array.push(
                        <Button
                        key={i} 
                        onClick={()=>this.handleButtonPanel(i)}
                        style={{margin:'3px',backgroundColor:`${questionStatus[i]}`}}>
                            {j}
                        </Button>
                       )
                       {j++}
                    //    console.log("clicked");
        }
        return array;
        // console.log("clicked");

}


handleButtonPanel=(i)=>{
    // const {questions} = this.state;
    const {no_of_questions,questionStatus,answerStatus} = this.state;
    let {itemIndex,previousQuestion,nextQuestion,item,questions} = this.state;
    let k=0;
    var items=[];
    // var f=questions.length;
    // console.log(f);


    var moves=0
    for(let h=0;h<no_of_questions;h+no_of_questions){
        // h=h+1;
        if(h<=i){
            moves=moves+1;
        }
    }
    console.log(moves);




    for(let i=0;i<this.state.no_of_questions;i++){
        if(!isEmpty(this.state.questions)){
            questions=this.state.questions;
            item=questions[itemIndex + k ];
            nextQuestion=questions[itemIndex + k + 1];
            previousQuestion = questions[itemIndex  - 1];
            k++;
            items.push(item);
        }
    }
    this.setState({
        items,
        nextQuestion,
        previousQuestion
    });



    if(this.state.nextQuestion!==undefined){
        this.setState(prevState=>{
            return{
                ...prevState, itemIndex:prevState.itemIndex + no_of_questions,
                
            }

        },
        ()=>{
            // for(let ip=itemIndex; ip<(itemIndex + no_of_questions) ; ip++){
            //     var qid = questions[ip].id;
            //     if(answerStatus[qid]===""){
            //         questionStatus[qid]="red";
            //     }
            //     else{
            //         questionStatus[qid]="green";
            //     }
            // }
            this.displayQuestions(this.state.item,this.state.nextQuestion,this.state.previousQuestion);
        })
        // console.log(itemIndex);

    }

    // if(this.state.nextQuestion !== undefined){
    //     this.setState(prevState=>{
    //         return{
    //             ...prevState, itemIndex:prevState.itemIndex + no_of_questions,  
                
    //           }}
    //           ,()=>{
          
    //         for(let i=itemIndex; i<(itemIndex + no_of_questions) ; i++){
    //           var qid =questions[i].id;
    //           if(answerStatus[qid]===""){
    //               questionStatus[qid]="red";
    //           }   
              
    //           else{
    //               questionStatus[id]="green";
    //           }
             
    //         }

    //          this.displayQuestions(this.state.item,this.state.nextQuestion,this.state.prevQuestion);
    //   });
     
    // }



    // console.log(questions);
    // console.log(questions);
    // for (let k=0;k<questions.length;k++){
        // console.log(questions[i].id);
        // if(questions[k].id===i){
        //     console.log("clicked " + i);
            // this.displayQuestions();
            // console.log(this.displayQuestions(this.state.question));
            // this.displayQuestions(questions[k]);
            // console.log(questions[k]);
            // this.displayQuestions(this.state.questions[k],this.state.no_of_questions,this.state.previousQuestion);



            // if(this.state.nextQuestion !== undefined){
            //     this.setState(prevState=>{
            //         return{
            //             ...prevState, itemIndex:prevState.itemIndex + no_of_questions,  
                        
            //           }}
            //           ,()=>{
                  
            //         for(let p=itemIndex; p<(itemIndex + no_of_questions) ; p++){
            //           var qid =questions[i].id;
            //           if(answerStatus[qid]===""){
            //               questionStatus[qid]="red";
            //           }   
                      
            //           else{
            //               questionStatus[i]="green";
            //           }
                      
                     
            //         }
            //          this.displayQuestions(this.state.item,this.state.nextQuestion,this.state.prevQuestion);
            //   });
             
            // }

           
            



            // this.displayQuestions(questions[k]);
        //    return(
        //        <div>
        //            {questions[k]}
        //        </div>
        //    )
    //     }
    // }
    // this.displayQuestions();
    // if(questions.id)
    // console.log("clicked");
}



  displayQuestions=(questions = this.state.questions,no_of_questions,item,nextQuestion,previousQuestion)=>{
    let {itemIndex} = this.state;
    let k=0;
    var items=[];
    for(let i=0;i<this.state.no_of_questions;i++){
        if(!isEmpty(this.state.questions)){
            questions=this.state.questions;
            item=questions[itemIndex + k ];
            nextQuestion=questions[itemIndex + k + 1];
            previousQuestion = questions[itemIndex  - 1];
            k++;
            items.push(item);
        }
    }
    this.setState({
        items,
        nextQuestion,
        previousQuestion
    });
    // alert("display showed");
  }




  handleNextButtonClick=(id)=>{
      const {no_of_questions,questionStatus,answerStatus,questions,itemIndex} = this.state;
   
      if(this.state.nextQuestion !== undefined){
          this.setState(prevState=>{
              return{
                  ...prevState, itemIndex:prevState.itemIndex + no_of_questions,  
                  
                }}
                ,()=>{
            
              for(let i=itemIndex; i<(itemIndex + no_of_questions) ; i++){
                var qid =questions[i].id;
                if(answerStatus[qid]===""){
                    questionStatus[qid]="red";
                }   
                
                else{
                    questionStatus[id]="green";
                }
               
              }

               this.displayQuestions(this.state.item,this.state.nextQuestion,this.state.prevQuestion);
        });
        console.log(itemIndex);
       
      }
      else{
          console.log("the end");
      }
      
  }



  handlePreviousButtonClick=()=>{
    const {no_of_questions,itemIndex} = this.state;
    if(this.state.previousQuestion !== undefined){
        this.setState(prevState=>({
            itemIndex:prevState.itemIndex - no_of_questions
        }),()=>{
            this.displayQuestions(this.state.state,this.state.item,this.state.nextQuestion,this.state.prevQuestion);
        });
        console.log(itemIndex);

    }
  
}

handleQuitButtonClick=()=>{
    alert("Are You sure you want to Finish the test?");
}




  handleButtonClick=(e)=>{
    switch(e.target.id){
        case 'next-button':
            this.handleNextButtonClick();
            break;
        case 'previous-button':
            this.handlePreviousButtonClick();
            break;
        case 'quit-button':
            this.handleQuitButtonClick();
            break; 
      
        default:
            break;
    }
  }



  handleOptionClick=(id,k,count)=>{
    const {questionStatus} = this.state;
    var g=id+'a'+k;
    var vid;
   
        for (let i=0;i<count;i++){
            vid = id+'a'+i;
            if(g===vid){
                document.getElementById(vid).style.backgroundColor="green";
            }
            else{
                document.getElementById(vid).style.backgroundColor="orange";
            }       
        }
    

    answerStatus[id] = k;
    questionStatus[id]='green';

  }

  handleReview=(id)=>{
      const {no_of_questions,questionStatus,answerStatus,questions,itemIndex} = this.state;

      if(this.state.nextQuestion !== undefined){
        this.setState(prevState=>{
            return{
                ...prevState, itemIndex:prevState.itemIndex + no_of_questions,  
                
              }}
              ,()=>{
     
            for(let i=itemIndex; i<(itemIndex + no_of_questions) ; i++){
                
                var qid =questions[i].id;
                questionStatus[qid]="grey";
                answerStatus[qid]="orange";
          
            }


             this.displayQuestions(this.state.item,this.state.nextQuestion,this.state.prevQuestion);
      });
     
    }
    else{
        console.log("the end");
    }
      
    
  }


  handleMarkedReview=(id)=>{

    const {no_of_questions,questionStatus,questions,itemIndex} = this.state;

      if(this.state.nextQuestion !== undefined){
        this.setState(prevState=>{
            return{
                ...prevState, itemIndex:prevState.itemIndex + no_of_questions,  
                
              }},()=>{
        
            for(let i=itemIndex; i<(itemIndex + no_of_questions) ; i++){
                
                var qid =questions[i].id;
                questionStatus[qid]="#800080";
           
            }
             this.displayQuestions(this.state.item,this.state.nextQuestion,this.state.prevQuestion);
      });
     
    }
    else{
        console.log("the end");
    }

}



    render(){

        // if(this.state.questions){
        //   var parent =  this.handleButtonPanel();
        // }
        
        if(this.state.items){
            var nameList = this.state.items.map((item,id)=>{
            const {answerStatus} = this.state;
            var count =item.options.length;
            

                    return(
                        <div key={id}>
                            {/* {questionStatus[item.id]} */}
                            
                            <div>
                                <h5>{item.question}</h5>
                            </div>
                            <br/>
                            
                            <div key={id}>
                               {
                                item.options.map((option,i)=>
                                answerStatus[item.id]===i 
                                
                                    ?

                                    <Button
                                        onClick={()=>this.handleOptionClick(item.id,i,count)}
                                        style={{marginRight:'10px',
                                         backgroundColor:"green",
                                        color:"white"}}
                                        id={item.id + 'a' + i}
                                        key={i} 
                                        
                                        >
                                        {option}
                                    </Button>

                                    : 

                                    <Button
                                        onClick={()=>this.handleOptionClick(item.id,i,count)}
                                        style={{marginRight:'10px',
                                        backgroundColor:"orange",
                                        color:"white"}}
                                        id={item.id + 'a' + i}
                                        key={i}  
                                        >
                                        {option}
                                    </Button>
                                )}
                                

                            </div>
                           <br/>
                          
                        </div>
                    );
                    
                    
            })
           
        }
        

        return (

            
                <div>
                     <Row>
                    <Col md={8} xs={12} className="jumbo-1">
                    <Jumbotron className="jumbo-1">
                        {nameList}
                        {/* {parent} */}
                            {/* {this.handleButtonPanel} */}
                        <div>
                        <Button id="previous-button" onClick={this.handleButtonClick} className="button-panel">Previous</Button>{' '}
                        <Button id="next-button" onClick={this.handleButtonClick} className="button-panel">Next</Button>{' '}
                        <Button id="quit-button" onClick={this.handleButtonClick} className="button-panel">Finish</Button>{' '}  
                        </div>
                        <br/>
                        <div>
                            <Button variant="secondary"
                             onClick={this.handleReview}
                            id="handle_review"
                            style={{width:'100px' ,marginBottom:'20px'}}>Review</Button>{' '}
                            <Button variant="warning" id="marked_and_review" onClick={this.handleMarkedReview} style={{width:'170px',marginBottom:'20px'}}>Marked And Review</Button>{' '}
                        </div>           
                    </Jumbotron>
                    </Col>
    
    
                    <Col md={4} xs={12} className="jumbo-2">
                        <Row style={{height:'50%'}}>
                            <Jumbotron className="jumbo-10" style={{width:'100%'}}>
                            <Button variant="secondary"style={{width:'200px' ,marginBottom:'20px'}}>Review</Button>{' '}
                            <Button variant="success"  style={{width:'200px',marginBottom:'20px'}}>Answered</Button>{' '}
                            <Button style={{width:'200px',marginBottom:'20px',backgroundColor:'#800080'}}>Marked And Review</Button>{' '}
                            <Button variant="danger"  style={{width:'200px',marginBottom:'20px'}}>Not Answered</Button> 
                            </Jumbotron>
                        </Row>  
    
                        <Row style={{height:'50%'}}>
                            <Jumbotron style={{width:'100%',marginBottom:'0px'}}>
                                    <div>
                                        {this.buttonPanel()}
                                    </div>
                            </Jumbotron>
                        </Row>
                    </Col>
                </Row>
                  
                <Buttons/>

                </div>
          );
    }
}


export default Quiz;
