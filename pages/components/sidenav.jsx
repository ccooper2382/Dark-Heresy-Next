import React from 'react';
import Link from "next/link";
import classes from "./sidenav.module.css";

function Sidenav(props) {
    return (
        <aside className={classes.sidenav}>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/Character-Creation/Career-Paths">Career Paths</Link></li>
                    <li><Link href="/Character-Creation/Homeworld">Homeworld</Link></li>
                    <li><Link href="/Character-Creation/Characteristics">Characteristics</Link></li>
                    <li><Link href="/Character-Creation/Skills">Skills</Link></li>
                   <li><Link href="/Character-Creation/Talents">Talents</Link></li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidenav;