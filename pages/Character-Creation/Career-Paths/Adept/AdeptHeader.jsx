import React, {Fragment} from 'react';
import Image from "next/image";
import AdeptRanks from "./Adept-Ranks";
import adeptPic from "/public/images/career-paths/adept_image.png"
import classes from  "./AdeptHeader.module.css"

function AdeptHeader() {
    return (
        <Fragment>
        <h2>Adept</h2>
    <div className={classes.header}>
        <div className={classes.left} >
            <Image src={adeptPic} alt="Adept" />
        </div>
        <div className={classes.right}>
            <AdeptRanks />
        </div>

    </div>
        </Fragment>
    );
}

export default AdeptHeader;