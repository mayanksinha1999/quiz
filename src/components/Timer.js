import React,{Component} from 'react';
import Countdown from 'react-countdown-now';

const Completionlist=()=> <span>Your Time's Up!!</span>

const renderer = ({hours,minutes,seconds,completed})=>{
    if(completed){
        return <Completionlist/>;
    }else{
        return <span>{hours}:{minutes}:{seconds}</span>
    }
}

class Timer extends Component{
    render(){
        return(
            <Countdown date={Date.now() + 10800000}
                        renderer={renderer} />
        );
    }
}

export default Timer;