import React from 'react';
import {connect} from 'react-redux';

import '../styles/DigitalDisplay.css';

class DigitalDisplay extends React.Component {

    componentDidMount() {

    }

    renderDisplay() {
        if(this.props.keyPressed) {
            return <h1>{this.props.keyPressed}</h1>;
        } else {
            return <h1>0</h1>
        }
    }

    render() {
        return (
            <div className="displayContainer">
                {this.renderDisplay()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        keyPressed: state.keyPressed.keyPressed
    }
}

export default connect(mapStateToProps)(DigitalDisplay);