import React,{Fragment} from "react";
import {Link} from "react-router-dom";

//assets
import "./styles.css";

export default function(props){
    return(
        <Fragment>
            <div className="ctr-404">
                <Link to="/" className="button is-primary is-mall is-outlined">Go back to homepage</Link>
                <h4 className="title">{`ERROR 404`}</h4>
                <h4 className="title">{`Page Not Found ;(`}</h4>
            </div>
        </Fragment>
    );
}
