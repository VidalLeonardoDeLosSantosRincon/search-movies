import React, {Fragment} from "react";

//assets
import "./styles.css";

export default function(props){

    const {page, totalPages, setNextPage, setPrevPage} = props;


    return(
        <Fragment>
            <div className="ctr-pagination">   
                {
                    (page===1)?<button className="button is-primary is-small is-light" onClick={setPrevPage} disabled>Previous</button>:
                    <button className="button is-primary is-small" onClick={setPrevPage}>Previous</button>
                }
                <button className="button is-warning is-small" style={{color:"black"}}>{`${page} of ${totalPages}`}</button>  
                {
                    (page===totalPages)? <button className="button is-primary is-small is-light" onClick={setNextPage} disabled>Next</button>:
                    <button className="button is-primary is-small" onClick={setNextPage} >Next</button>
                } 
            </div>
        </Fragment>
    );
}