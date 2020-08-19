import React, {Fragment} from "react";
import {Link} from "react-router-dom";


//assets
import "./styles.css";
import noPoster from "../../assets/images/no_poster.png"

export default function(props){
    const {movie} = props;
    return(
        <Fragment>
            <div className="ctr-details">
                {movie?
                    <Fragment>
                        <Link to="/" className="button is-primary is-small is-outlined">go back to homepage</Link>
                        <div className="movie-details">
                            <img src={movie.Poster==="N/A"? noPoster : movie.Poster} alt="movie_poster"/>
                            <div className="movie-info">
                                <h4 className="title is-medium">{movie.Title==="N/A"? "UNKNOWN" : movie.Title}</h4>
                                <p>{movie.Plot==="N/A"? "No description" : movie.Plot}</p>
                                <span className="button is-primary is-small is-light">Director: {movie.Director==="N/A"? "UNKNOWN" : movie.Director}</span>
                                <p className="" style={
                                    {
                                        wordWrap:" break-word", 
                                        textAlign:"left",
                                        width:"100%", 
                                        backgroundColor:"rgba(0,220,200,0.1)", 
                                        color:"gray",
                                        padding:"5px 10px",
                                        borderRadius:"3px"
                                    }
                                    
                                    }>Actors: {movie.Actors==="N/A"? "UNKNOWN" : movie.Actors}</p>
                                <span className="button is-primary is-small is-light">Type: {movie.Type==="N/A"? "UNKNOWN" : movie.Type}</span>
                                <span className="button is-primary is-small is-light">Country: {movie.Country==="N/A"? "UNKNOWN" : movie.Country}</span>
                                <span className="button is-primary is-small is-light">Language: {movie.Language==="N/A"? "UNKNOWN" : movie.Language}</span>
                                <span className="button is-primary is-small is-light">Gender: {movie.Genre==="N/A"? "UNKNOWN" : movie.Genre}</span>
                                <span className="button is-danger is-small is-light">Awards: {movie.Awards==="N/A"? "UNKNOWN" : movie.Awards}</span>
                                <span className="button is-primary is-small is-light">Released: {movie.Released==="N/A"? "UNKNOWN" : movie.Released}</span>
                                <span className="button is-primary is-small is-light">Duration: {movie.Runtime==="N/A"? "UNKNOWN" : movie.Runtime}</span>
                                <span className="button is-primary is-small is-light">Year: {movie.Year==="N/A"? "UNKNOWN" : movie.Year}</span>
                                <span className="button is-danger is-small is-light">Box Office: {movie.BoxOffice==="N/A"? "UNKNOWN" : movie.BoxOffice}</span>
                            </div>
                        </div>
                    </Fragment>
                :<Link to="/" className="button is-primary is-small is-outlined">go back to homepage</Link>
                }
            </div>
        </Fragment>
    );

}