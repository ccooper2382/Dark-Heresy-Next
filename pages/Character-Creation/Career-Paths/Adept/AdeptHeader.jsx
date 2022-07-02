import React, {Fragment} from 'react';
import Image from "next/image";
import AdeptRanks from "./Adept-Ranks";
import classes from  "./AdeptHeader.module.css"

function AdeptHeader() {
    return (
        <Fragment>
        <h2>Adept</h2>
    <div className={classes.header}>
        <Image className={classes.left} src="/images/career-paths/adept_image.png" alt="Adept" width={500} height={500}/>
        <AdeptRanks className={classes.right}/>
    </div>
        </Fragment>
    );
}

export default AdeptHeader;