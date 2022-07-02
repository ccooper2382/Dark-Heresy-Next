import React, {Fragment} from 'react';
import AdeptCharacteristicAdvances from "./Adept Characteristic Advances";
import Image from "next/image";
import AdeptDescription from "./adept_description";
import AdeptRanks from "./Adept-Ranks";
import AdeptHeader from "./AdeptHeader";

function Index() {
    return (
        <Fragment>
          <AdeptHeader/>
            <AdeptDescription/>
            <AdeptCharacteristicAdvances />
        </Fragment>
    );
}

export default Index;