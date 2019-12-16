import React from 'react';

import DigitalDisplay from './DigitalDisplay';
import ButtonPad from './ButtonPad';
import '../styles/App.css';

class App extends React.Component {
    render() {
        return(
            <div className="container">
                <DigitalDisplay />
                <ButtonPad />
            </div>
        )
    }
}

export default App;