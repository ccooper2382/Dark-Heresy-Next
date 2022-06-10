import React from 'react';
import Link from "next/link";

function Sidenav(props) {
    return (
        <aside>
            <nav>
                <ul>
                    <Link href="/">Home</Link>
                    <Link href="/Character-Creation/Career-Paths">Career Paths</Link>
                    <Link href="/Character-Creation/Homeworld">Homeworld</Link>
                    <Link href="/Character-Creation/Characteristics">Characteristics</Link>
                    <Link href="/Character-Creation/Skills">Skills</Link>
                    <Link href="/Character-Creation/Talents">Talents</Link>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidenav;