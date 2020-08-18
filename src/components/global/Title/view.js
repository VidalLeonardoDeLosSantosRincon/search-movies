import React, {Fragment} from "react";

//assets
import "./styles.css";


export default function({children}){
    return(
        <Fragment>
            <div className="ctr-title">
                <h1 className="title">
                    {children}
                </h1>
            </div>    
        </Fragment>
    );
}