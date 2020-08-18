import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
//import Skeleton, {SkeletonTheme} from "react-loading-skeleton";

//actions
//movie
import {setData} from "../../redux/actions/movie/setData";
//pagination
import {resetPages} from "../../redux/actions/pagination/resetPages";
import {setTotalPages} from "../../redux/actions/pagination/setToTalPages";

//assets
import "./styles.css";
import noPoster from "../../assets/images/no_poster.png"

//components
import {Title} from "../../components/global/Title";
import SearchForm from "../../components/SearchForm";
import Pagination from "../../components/Pagination";
import Banner from "../../components/Banner";
import { setMovieID } from '../../redux/actions/movie/setMovieID';

class Home extends Component{
 

  render(){
    const {
      data,
      setData,
      results, 
      totalResults,
      page,
      resetPages,
      setTotalPages,
      url_movie,
      setMovieID,
     //movieID,
      api_key
    } = this.props;

    console.log(data);

    return (
      <div className="ctr-home">
              <Banner/>
              <Title>Search Movies</Title>
              <SearchForm setData={setData} page={page} api_key={api_key} resetPages={resetPages} setTotalPages={setTotalPages}/>
            
              { 
                totalResults!==0? 
                  <h6><i>Search results:</i><span className="button is-danger is-small is-rounded">{` ${totalResults}`}</span></h6>:null
              }
            
              <br/>
              {
              results.length>0?<Pagination url_movie={url_movie} />:null
              }
              <div className="ctr-movie">
                {
                  results.map((movie, index)=>{
                    return(
                      <Fragment>
                        <div key={`movie_${index}`} className="movie-box">
                          <div key={`img_${index}`} className="movie-box-picture">
                            {
                              (movie.Poster.trim()==="N/A" || movie.Poster.trim()==="")?
                                <img src={noPoster} alt="movie_poster"/>   
                              :<img src={movie.Poster} alt="movie_poster"/>
                            }
                              
                          </div>
                          <div className="movie-box-info">
                            <p className="subtitle ">
                              {movie.Title.length>40?`${movie.Title.substring(0,40)}...`:`${movie.Title}`}
                            </p>
                          <Link to={`/details/${movie.imdbID}`} className="button is-primary is-light" onClick={()=>{
                              setMovieID(`${movie.imdbID}`);
                            }}>{`More`}</Link>
                          </div>
                        </div>
                      </Fragment>
                    );
                  })
                }
              </div>
              {
              results.length>0?<Pagination url_movie={url_movie}/>:null
              }
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
      data: state.Movie.data,
      results: state.Movie.results,
      totalResults: state.Movie.totalResults,
      page: state.Pagination.page,
      totalPages: state.Pagination.totalPages,
      url_movie: state.Movie.url_movie,
      movieID: state.Movie.movieID,
      api_key: state.Movie.api_key
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    setData: (data)=> dispatch(setData(data)),
    resetPages: ()=> dispatch(resetPages()),
    setTotalPages: (totalPages)=> dispatch(setTotalPages(totalPages)),
    setMovieID: (movieID)=> dispatch(setMovieID(movieID))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);