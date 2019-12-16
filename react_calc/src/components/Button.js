import React from 'react';

import '../styles/Button.css';

class Button extends React.Component {

    ifZeroButton() {
        if(this.props.number === "0") {
            return <button className="button zeroButton" onClick={() => this.logButtonClicked(this.props.number)}>{this.props.number}</button>
        } else {
            return <button className="button" onClick={() => this.logButtonClicked(this.props.number)}>{this.props.number}</button>
        }
    }

    logButtonClicked(number) {
        console.log(number);
    }

    render() {
        return(
            <div>
                {this.ifZeroButton()}
            </div>
        )
    }
}

export default Button;