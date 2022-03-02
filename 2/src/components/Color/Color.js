import React, {Component} from "react";

class Color extends Component {
    render() { 
        return (
            <div className="color">
                <div style={{width:"15px", height: "15px", backgroundColor: this.props.color}}></div>
                <label>{this.props.color}</label>
            </div>
        );
    }
}
 
export default Color;