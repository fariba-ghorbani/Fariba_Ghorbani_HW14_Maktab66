import React, {Component} from "react";
import Color from "../Color/Color";

class ColorGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors : []
        }
        
        this.addColor = this.addColor.bind(this);
    }
    

    addColor() {
        let newColor = "#" + ((1<<24)*Math.random() | 0).toString(16);
        this.setState({colors: [...this.state.colors, newColor]})
    }


    render() { 
        console.log(this.state.colors)
        return (
            <div className="color-generator">
                <button onClick={this.addColor}>Add Color</button>
                {this.state.colors.map (color => 
                    <Color color = {color}/>
                )}
            </div>
        );
    }
}
 
export default ColorGenerator;