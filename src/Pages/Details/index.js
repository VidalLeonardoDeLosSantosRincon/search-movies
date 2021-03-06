import React, {Component} from "react";
import {connect} from "react-redux";

//views
import View from './view'

class Details extends Component{

    state = {
        movie:null,
        loading:false
    }

    fetchMovieData = async ()=>{
        const {match, api_key} = this.props;

        try{
            const request = await fetch(`http://www.omdbapi.com/?apikey=${api_key}&i=${match.params.id}`)
            const response = await request.json()
            if(response.Response.trim()==="True"){
                this.setState({movie:response, loading:false});
            }
        }catch(error){
            console.log(error);
        }
    }

    componentDidMount(){
        this.setState({...this.state, loading:true});
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
