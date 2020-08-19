import React, {Fragment} from "react";

//assets
import "./styles.css";

export default function({movie, onChange , onSubmit, loading}){
    return(
        <Fragment> 
            <div className="box-search-form">  
                <form onSubmit={onSubmit}>   
                    <div className="field has-addons">
                        <div className="control">
                            {
                                loading?<input className="input is-primary is-small" 
                                type="text" placeholder="Find a movie" required 
                                value={movie} onChange={onChange} disabled/>:
                                
                                <input className="input is-primary is-small" 
                                type="text" placeholder="Find a movie" required 
                                value={movie} onChange={onChange}/>
                            
                            }    
                        </div>
                        <div className="control">
                            <button className={loading?"button is-primary is-small is-loading":"button is-primary is-small"}>
                                Search
                            </button>
                        </div>
                    </div>

                </form>
                <div className="info-box">
                    <p><span>UMovies</span> by <i>Vidal L. De Los Santos</i><sup>&trade;</sup></p>
                    <p>Front-End & Web Developer</p>
                </div>  
            </div>
        </Fragment>
    );
}