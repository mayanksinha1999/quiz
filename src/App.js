import React,{Component} from 'react';
import './App.css';
import Navigation from './components/Navigation';
// import ContentArea from './components/ContentArea';
import Quiz from './components/Quiz/Quiz';


class App extends Component{
  // constructor(){
  //   super();
  //   this.state={
  //     selectedValue: null
  //   }
  // }


  // selectedValueHandler = (selectedValue)=>{
  //   this.setState({
  //     selectedValue
  //   })
  // }


  render(){
    // const {selectedValue} = this.state;
    return (
      <div className="App">
        <Navigation/>
        <Quiz/>
      </div>
    );
  }
 
}

export default App;



