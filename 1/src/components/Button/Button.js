import React, {Component} from "react";

class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return (
            <button className="buttons" onClick={this.props.clickHandler}>{this.props.title}</button>
        );
    }
}
 
export default Button;