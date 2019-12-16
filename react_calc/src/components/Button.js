import React from 'react';

import '../styles/Button.css';

class Button extends React.Component {

    ifZeroButton() {
        if(this.props.number === "0") {
            return <button className="button zeroButton">{this.props.number}</button>
        } else {
            return <button className="button">{this.props.number}</button>
        }
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