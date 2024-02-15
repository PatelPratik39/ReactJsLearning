import { Component } from "react";

class Message extends Component {
    render(){
        return <div>
            <h1>Message :  {this.props.messageContent}</h1>
        </div>
    }
}
export default Message;