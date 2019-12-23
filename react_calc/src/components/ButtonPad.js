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
                            <td><Button unit="C"/></td>
                            <td><Button unit="DEL"/></td>
                            <td><Button unit="+/-"/></td>
                            <td><Button unit="/"/></td>
                        </tr>
                        <tr>
                            <td><Button unit="7"/></td>
                            <td><Button unit="8"/></td>
                            <td><Button unit="9"/></td>
                            <td><Button unit="*"/></td>
                        </tr>
                        <tr>
                            <td><Button unit="4"/></td>
                            <td><Button unit="5"/></td>
                            <td><Button unit="6"/></td>
                            <td><Button unit="-"/></td>
                        </tr>
                        <tr>
                            <td><Button unit="1"/></td>
                            <td><Button unit="2"/></td>
                            <td><Button unit="3"/></td>
                            <td><Button unit="+"/></td>
                        </tr>
                        <tr>
                            <td colSpan="2"><Button unit="0"/></td>
                            <td><Button unit="."/></td>
                            <td><Button unit="="/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ButtonPad;

