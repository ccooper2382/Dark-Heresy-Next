import React from 'react';
import Link from "next/link";
import classes from "./sidenav.module.css";

function Sidenav(props) {
    return (
        <aside className={classes.sidenav}>
            <nav>
                <ul>
                    <li>
                        <h1>Career Paths</h1>
                        <ul>
                            <li>
                                <Link href="/Character-Creation/Career-Paths/Adept">Adept</Link>
                            </li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </li>
                    <li>
                        <h1>Homeworld</h1>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </li>
                    <li>
                        <h1><Link href = "/Character-Creation/Characteristics">Characteristics</Link></h1>

                    </li>
                    <li>
                        <h1><Link href = "/Character-Creation/Skills">Skills</Link></h1>

                    </li>
                    <li>
                        <h1>Talents</h1>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </li>
                    <li>
                        <h1></h1>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </li>

                </ul>
            </nav>
        </aside>
    );
}

export default Sidenav;