import React from "react";

import "../../styles/components/InputField.css"

class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false
        }
    }

    componentDidMount() {
        if(this.props.invalid === true)
            this.setState({error: true})
    }


    onChangeHandler(event) {
        console.log(event)
        /*
        if(event .value !== event.target.value) {
            this.setState({error: false})
        }
         */
        this.props.getValue(event.target.value)

    }

    componentWillUnmount() {
        this.props.getValue("")
    }

    render() {
        return (
            <div className={"input_wrapper"}>
                <input
                    className={this.state.error ? "invalid" : ""}
                    type={"text"}
                    placeholder={this.props.name}
                    name={this.props.name}
                    onChange={(event) => this.onChangeHandler(event)}
                />
                <p>{this.props.description}</p>
            </div>
        );
    }
}

export default InputField