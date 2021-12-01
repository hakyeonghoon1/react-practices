import React, {Component} from 'react';

export default class TitelBar01 extends Component {
    constructor(){
        super(...arguments);    //자동 분해
        //this.no = 0;
        this.state = {
            no:0
        }
    }

    onClickHandler(){
        //this.no++;
        this.setState({
            no:this.state.no + 1
        });
        console.log("TitleBar01 clicked");
    }

    render() {
        return (
            <h1 onClick = { this.onClickHandler.bind(this) }
                style={{cursor:'pointer'}}>
                    ex03 - Functional Even Handler(Class Component)
                    {
                        // no VS state.no
                        //`no: ${this.no}, state.no: 
                        this.state.no
                    }

            </h1>
        )
    }
}