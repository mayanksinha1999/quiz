import React,{Component} from 'react';
import ScrollArea from 'react-scrollbar';

class Scrollbar extends Component{
    render(){
        return(
            <ScrollArea
            speed={0.8}
            className="area"
            contentClassName="content"
            horizontal="false"
            >
                <div>Some Long Content</div>
            </ScrollArea>
        );
    }
}

export default Scrollbar;
