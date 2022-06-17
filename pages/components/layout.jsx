import React, { Fragment } from 'react';
import MainHeader from "./main-header";
import Sidenav from "./sidenav";
import classes from "./layout.module.css"


function Layout(props) {
    return (
        <Fragment>
            <MainHeader/>
            <article className={classes.container}>
                <Sidenav />
                <main className={classes.body}>{props.children}</main>
            </article>
        </Fragment>
    );
}

export default Layout;