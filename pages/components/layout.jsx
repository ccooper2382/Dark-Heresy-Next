import React, { Fragment } from 'react';
import MainHeader from "./main-header";
import Sidenav from "./sidenav";


function Layout(props) {
    return (
        <Fragment>
            <MainHeader/>
            <Sidenav/>
            <main>{props.children}</main>
        </Fragment>
    );
}

export default Layout;