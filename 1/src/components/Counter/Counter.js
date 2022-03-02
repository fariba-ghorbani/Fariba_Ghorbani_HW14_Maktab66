import React, {Component} from "react";
import Button from "../Button/Button";

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }

        this.increase = this.increase.bind(this)
        this.decrease = this.decrease.bind(this)
    }

    increase() {
        this.setState({counter: this.state.counter + 1})
    }

    decrease() {
        if (this.state.counter !== 0) {
            this.setState({counter: this.state.counter - 1})
        }
    }

    render() { 
        return (
            <div>
                <label className="counter">{this.state.counter}</label>
                <Button title = "increase" clickHandler = {this.increase}/>
                <Button title = "decrease" clickHandler = {this.decrease}/>
            </div>
        );
    }
}
 
export default Counter;