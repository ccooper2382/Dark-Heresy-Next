import React from 'react';
import classes from './Adept-Ranks.module.css'

function AdeptRanks() {
    return (
        <div className={classes.container}>
            <div className={classes.single}>
                <div>
                    <h3>Archivist</h3>
                    <p>XP Level: 0–499</p>
                </div>
                <div>
                    <h3>Scrivener</h3>
                    <p>XP Level: 500–999</p>
                </div>
                <div>
                    <h3>Scribe</h3>
                    <p>XP Level: 1,000–1,999</p>
                </div>
            </div>
            <div className={classes.double}>
                <div>
                    <h3>Inditor</h3>
                    <p>XP Level: 2,000–2,999</p>
                </div>
                <div>
                    <h3>Chirurgeon</h3>
                    <p>XP Level: 2,000–2,999</p>
                </div>
            </div>
            <div className={classes.single}>
                <div>
                    <h3>Scholar</h3>
                    <p>XP Level: 3,000–5,999</p>
                </div>
            </div>
            <div className={classes.double}>
                <div>
                    <h3>Lexographer</h3>
                    <p>XP Level: 6,000–7,999</p>
                </div>
                <div>
                    <h3>Comptroller</h3>
                    <p>XP Level: 6,000–7,999</p>
                </div>
                <div>
                    <h3>Loremaster
                        Lexographer</h3>
                    <p>XP Level: 8,000–9,999</p>
                </div>
                <div>
                    <h3>Logister
                        Comptroller</h3>
                    <p>XP Level: 8,000–9,999</p>
                </div>
                <div>
                    <h3>Loremaster
                        Magister</h3>
                    <p>Level: 10,000–14,999</p>
                </div>
                <div>
                    <h3>Sage
                        Logister</h3>
                    <p>XP Level: 10,000–14,999</p>
                </div>
            </div>
        </div>
    );
}

export default AdeptRanks;