import React, {Component} from "react";
import {connect} from "react-redux";

//views
import View from './view'

class Details extends Component{

    state = {
        movie:null
    }

    fetchMovieData = ()=>{
        const {match, api_key} = this.props;
        fetch(`http://www.omdbapi.com/?apikey=${api_key}&i=${match.params.id}`)
        .then((response)=>response.json())
        .then((response)=>{
            if(response.Response.trim()==="True"){
                this.setState({movie:response});
            }
            console.log(response);
        }).catch((error)=>{console.log(error)})

    }

    componentDidMount(){
        this.fetchMovieData();
    }

    render(){
        return(
            <View {...this.state}/>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        movieID: state.Movie.movieID,
        api_key: state.Movie.api_key
    }
}

export default connect(mapStateToProps)(Details);
