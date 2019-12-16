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
                            <th><Button number="C"/></th>
                            <th><Button number="+/-"/></th>
                            <th><Button number="%"/></th>
                            <th><Button number="/"/></th>
                        </tr>
                        <tr>
                            <th><Button number="7"/></th>
                            <th><Button number="8"/></th>
                            <th><Button number="9"/></th>
                            <th><Button number="X"/></th>
                        </tr>
                        <tr>
                            <th><Button number="4"/></th>
                            <th><Button number="5"/></th>
                            <th><Button number="6"/></th>
                            <th><Button number="-"/></th>
                        </tr>
                        <tr>
                            <th><Button number="1"/></th>
                            <th><Button number="2"/></th>
                            <th><Button number="3"/></th>
                            <th><Button number="+"/></th>
                        </tr>
                        <tr>
                            <th><Button number="0"/></th>
                            <th><Button number="0"/></th>
                            <th><Button number="."/></th>
                            <th><Button number="="/></th>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ButtonPad;
