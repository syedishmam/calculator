import React from 'react';

import DigitalDisplay from './DigitalDisplay';
import '../styles/App.css';

class App extends React.Component {
    render() {
        return(
            <div className="container">
                <DigitalDisplay />
            </div>
        )
    }
}

export default App;