import React, {Fragment} from 'react';
import AdeptCharacteristicAdvances from "./Adept Characteristic Advances";
import AdeptDescription from "./adept_description";
import AdeptHeader from "./AdeptHeader";




function Index() {
    return (
        <Fragment>
          <AdeptHeader/>
            <AdeptDescription/>
            <AdeptCharacteristicAdvances/>
        </Fragment>
    );
}

export default Index;