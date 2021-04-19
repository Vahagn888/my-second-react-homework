import React,{Component} from 'react';
import CenteredContent from "./centered-content"
import LeftContent from "./left-content"
import RightContent from "./right-content";
class Content extends Component{
    render() {
        return(
            <div>
                <CenteredContent/>
                <LeftContent/>
                <RightContent/>
            </div>
        )
    }
}
export default Content