import React from 'react';

import Button from './Button';
import '../styles/ButtonPad.css';

class ButtonPad extends React.Component {
    render() {
        return(
            <div className="buttonPadContainer">
                <table>
                    <tbody>
                        <tr>
                            <th><Button number="1"/></th>
                            <th><Button number="2"/></th>
                            <th><Button number="3"/></th>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ButtonPad;