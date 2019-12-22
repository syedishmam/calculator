import React from 'react';
import {connect} from 'react-redux';

import {keyPress} from '../actions/index.js';
import '../styles/Button.css';

class Button extends React.Component {

    ifZeroButton() {
        if(this.props.number === "0") {
            return <button className="button zeroButton" onClick={() => this.clickButton(this.props.number)}>{this.props.number}</button>
        } else {
            return <button className="button" onClick={() => this.clickButton(this.props.number)}>{this.props.number}</button>
        }
    }

    clickButton(number) {
        if(this.props.keyPressed) {
            let keys = this.props.keyPressed.concat(number);
            this.props.keyPress(keys);
        } else {
            this.props.keyPress(number);
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

const mapStateToProps = (state) => {
    return {
        keyPressed: state.keyPressed.keyPressed
    }
}

export default connect(mapStateToProps, {keyPress})(Button);