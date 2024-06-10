import {Component} from "react";

class Counter extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         number : 0,
    //         fixedNumber : 100
    //     };
    state = {
        number : 0,
        fixedNumber : 100
    };
}
    render() {
        const {number, fixedNumber} = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>고정된 숫자 : {fixedNumber}</h2>
                <button
                    onClick={() => {
                        // this.setState({number: number+1})
                        // this.setState({number:this.state.number +1});

                        this.setState(prevState => {
                            return {
                                number : prevState.number + 1
                            };
                        });
                    }}
                ></button>
            </div>
        )
    }
export default Counter