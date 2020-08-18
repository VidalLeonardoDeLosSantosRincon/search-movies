import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

//assets
import "./styles.css";

export default function(props){
    return(
        <Fragment>
            <header className="header">
                 <h4>UMovies</h4>
                    
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand" style={{backgroundColor:" rgba(0,0,0,0.05)"}}>
                        <span role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true" ></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        </span>
                    </div>
                    
                    <div id="navbarBasicExample" className="navbar-menu" style={{backgroundColor:" rgba(0,0,0,0.05)"}}>
                        <div className="navbar-start" >
                            <div className="navbar-item has-dropdown is-hoverable" style={{backgroundColor:"transparent"}}>
                                <span className="navbar-link">
                                    Menu
                                </span>

                                <div className="navbar-dropdown" style={{backgroundColor:"white"}}>
                                    <span className="navbar-item">
                                        <Link to="/" className="heading" style={{padding:"5px 10px"}}>Home</Link>
                                    </span>
                                    <span className="navbar-item">
                                        <a title ="My Github account" href="https://github.com/VidalLeonardoDeLosSantosRincon" target="_blank" rel="noopener noreferrer" className="button is-fullwidth is-light is-primary is-small">
                                            Github    
                                        </a>
                                    </span>
                                    <span className="navbar-item">
                                        <a title ="My Youtube channel" href="https://www.youtube.com/channel/UCyxVG-mUpXT3UQM4cnQWUTw"  target="_blank" rel="noopener noreferrer" className="button is-fullwidth  is-light is-danger is-small">
                                            Youtube
                                        </a>
                                    </span>
                                    <span className="navbar-item">
                                        <a title ="My Linkedin profile" href="https://www.linkedin.com/in/vidal-leonardo-de-los-santos-rincon-314644185/" target="_blank" rel="noopener noreferrer" className="button is-fullwidth is-light is-info is-small">
                                            Linkedin
                                        </a>
                                    </span>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>


            </header>
        </Fragment>
    );
};
