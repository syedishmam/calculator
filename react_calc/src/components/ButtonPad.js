import React from 'react';

import Button from './Button';
import '../styles/ButtonPad.css';

class ButtonPad extends React.Component {
    render() {
        return(
            <div className="buttonPadContainer space-around">
                <table className="buttonsTable">
                    <tbody>
                        <tr>
                            <td><Button number="C"/></td>
                            <td><Button number="+/-"/></td>
                            <td><Button number="%"/></td>
                            <td><Button number="/"/></td>
                        </tr>
                        <tr>
                            <td><Button number="7"/></td>
                            <td><Button number="8"/></td>
                            <td><Button number="9"/></td>
                            <td><Button number="X"/></td>
                        </tr>
                        <tr>
                            <td><Button number="4"/></td>
                            <td><Button number="5"/></td>
                            <td><Button number="6"/></td>
                            <td><Button number="-"/></td>
                        </tr>
                        <tr>
                            <td><Button number="1"/></td>
                            <td><Button number="2"/></td>
                            <td><Button number="3"/></td>
                            <td><Button number="+"/></td>
                        </tr>
                        <tr>
                            <td colSpan="2"><Button number="0"/></td>
                            <td><Button number="."/></td>
                            <td><Button number="="/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ButtonPad;

