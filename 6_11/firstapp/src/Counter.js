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

                        this.setState(
                        {
                            number : number + 1
                        },
                        () => {
                            console.log("방금 setState를 호출하였습니다.");
                            console.log(this.state);
                        }
                    )
                }}
                >Button Click +1</button>
            </div>
        );
    }
}
export default Counter