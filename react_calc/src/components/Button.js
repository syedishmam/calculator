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
        switch(unit) {
            case 'C':
                return this.props.keyPress('1');
            case 'DEL':
                return this.deleteButtonLogic(allKeys);
            case '+/-':
                return this.negateButtonLogic(allKeys)
            case '/':
                return this.operatorButtonLogic(allKeys, '/');
            case '*':
                return this.operatorButtonLogic(allKeys, '*');
            case '-':
                return this.operatorButtonLogic(allKeys, '-');
            case '+':
                return this.operatorButtonLogic(allKeys, '+');
            case '.':
                return this.operatorButtonLogic(allKeys, '.');          
            default: 
                this.pushNumButtonLogic(allKeys, unit);
        }
    }

    operatorButtonLogic(keys, operator) {
        let pushOperator;
        if( keys 
            && keys[keys.length - 1] !== '/'
            && keys[keys.length - 1] !== '*' 
            && keys[keys.length - 1] !== '-' 
            && keys[keys.length - 1] !== '+' 
            && keys[keys.length - 1] !== '.'
        ) {
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
            } else if(operator === '.') {
                pushOperator = keys.concat('.'); 
                this.props.keyPress(pushOperator);
            }
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

    multiplyButtonLogic(keys) {
        if(keys && keys[keys.length - 1] !== '*') {
            const pushDivideSymbol = keys.concat('*'); 
            this.props.keyPress(pushDivideSymbol);
        }
    }

    pushNumButtonLogic(keys, unit) {
        if(keys) {
            const addNum = keys.concat(unit);
            this.props.keyPress(addNum);
        } else {
            this.props.keyPress(unit);
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