import React from 'react';

class Button extends React.Component {
    render() {
        return(
            <div>
                <button>{this.props.number}</button>
            </div>
        )
    }
}

export default Button;