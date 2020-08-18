import React, {Fragment} from "react";

//assets
import "./styles.css";

export default function({children}){
    return(
        <Fragment>
            <div className="ctr-content">
                {children}
            </div>
        </Fragment>
    );
}
