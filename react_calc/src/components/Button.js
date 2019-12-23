import React from 'react';
import {connect} from 'react-redux';

import {keyPress} from '../actions/index.js';
import '../styles/Button.css';

class Button extends React.Component {

    buttonType() {
        switch(this.props.unit) {
            case '0':
                return <button className="button zeroButton" onClick={() => this.clickButton(this.props.unit)}>{this.props.unit}</button>

            default:
                return <button className="button" onClick={() => this.clickButton(this.props.unit)}>{this.props.unit}</button>
        }
    }

    clickButton(unit) {
        const allKeys = this.props.keysPressed;
        if(unit === 'C') {
            this.props.keyPress('1');
        } else if(unit === 'DEL') {
            this.deleteButtonLogic(allKeys);
        } else if(unit === '+/-') {
            this.negateButtonLogic(allKeys)
        } else if(unit === '/') {
            this.operatorButtonLogic(allKeys, '/');
        } else if(unit === '*') {
            this.operatorButtonLogic(allKeys, '*');
        } else if(unit === '-') {
            this.operatorButtonLogic(allKeys, '-');
        } else if(unit === '+') {
            this.operatorButtonLogic(allKeys, '+');
        }
    }

    deleteButtonLogic(keys) {
        if(keys) {
            const deleted = keys.substring(0, keys.length - 1);
            return this.props.keyPress(deleted);
        }
    }

    negateButtonLogic(keys) {
        if(keys) {
            if(keys[0] !== '-' && keys !== 0) {
                const negateKeys = '-'.concat(keys);
                this.props.keyPress(negateKeys);
            } else {
                const removeNegative = keys.substring(1, keys.length);
                this.props.keyPress(removeNegative);
            }
        }
    }

    operatorButtonLogic(keys, operator) {
        let pushOperator;
        if(keys && keys[keys.length - 1] !== '/' && keys[keys.length - 1] !== '*' && keys[keys.length - 1] !== '-' && keys[keys.length - 1] !== '+') {
            if(operator === '/') {
                pushOperator = keys.concat('/'); 
                this.props.keyPress(pushOperator);
            } else if(operator === '*') {
                pushOperator = keys.concat('*'); 
                this.props.keyPress(pushOperator);
            } else if(operator === '-') {
                pushOperator = keys.concat('-'); 
                this.props.keyPress(pushOperator);
            } else if(operator === '+') {
                pushOperator = keys.concat('+'); 
                this.props.keyPress(pushOperator);
            }
        }
    }

    multiplyButtonLogic(keys) {
        if(keys && keys[keys.length - 1] !== '*') {
            const pushDivideSymbol = keys.concat('*'); 
            this.props.keyPress(pushDivideSymbol);
        }
    }

    render() {
        return(
            <div>
                {this.buttonType()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        keysPressed: state.keysPressed.keysPressed
    }
}

export default connect(mapStateToProps, {keyPress})(Button);