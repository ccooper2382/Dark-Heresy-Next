import React from 'react';
import {getStatByName} from "../../../../public/characteristics-data";


function AdeptCharacteristicAdvances() {
    return (
        <div>
            <h3>Adept Characteristic Advances</h3>
            <table>
                <thead>
                <tr>
                    <th title="Field #1">Characteristic</th>
                    <th title="Field #2">Simple</th>
                    <th title="Field #3">Intermediate</th>
                    <th title="Field #4">Trained</th>
                    <th title="Field #5">Expert</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <span>Weapon Skill (WS)</span>
                        <br/>
                        <span>{getStatByName("Weapon Skill").description}</span>
                    </td>
                    <td align="right">500</td>
                    <td align="right">750</td>
                    <td align="right">1000</td>
                    <td align="right">2500</td>
                </tr>
                <tr>
                    <td>Ballistic Skill</td>
                    <td align="right">250</td>
                    <td align="right">500</td>
                    <td align="right">750</td>
                    <td align="right">1000</td>
                </tr>
                <tr>
                    <td>Strength</td>
                    <td align="right">500</td>
                    <td align="right">750</td>
                    <td align="right">1000</td>
                    <td align="right">2500</td>
                </tr>
                <tr>
                    <td>Toughness</td>
                    <td align="right">500</td>
                    <td align="right">750</td>
                    <td align="right">1000</td>
                    <td align="right">2500</td>
                </tr>
                <tr>
                    <td>Agility</td>
                    <td align="right">250</td>
                    <td align="right">500</td>
                    <td align="right">750</td>
                    <td align="right">1000</td>
                </tr>
                <tr>
                    <td>Intelligence</td>
                    <td align="right">100</td>
                    <td align="right">250</td>
                    <td align="right">500</td>
                    <td align="right">500</td>
                </tr>
                <tr>
                    <td>Perception</td>
                    <td align="right">100</td>
                    <td align="right">250</td>
                    <td align="right">500</td>
                    <td align="right">750</td>
                </tr>
                <tr>
                    <td>Willpower</td>
                    <td align="right">100</td>
                    <td align="right">250</td>
                    <td align="right">500</td>
                    <td align="right">750</td>
                </tr>
                <tr>
                    <td>Fellowship</td>
                    <td align="right">250</td>
                    <td align="right">500</td>
                    <td align="right">750</td>
                    <td align="right">1000</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default AdeptCharacteristicAdvances;

