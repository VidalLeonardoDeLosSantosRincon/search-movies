import React, {Fragment, useState} from "react";

//components
import View from "./view";


const SearchForm = ({setData, page, resetPages, setTotalPages, api_key})=>{
    
    const API_KEY = api_key;
    const [inputMovie, setInputMovie] = useState("");
    let url_movie = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}&page=`;
    let _page = page;

    const handleChangeInputMovie = (e)=>{
        setInputMovie(e.target.value);
    }

    const calculateTotalPages = (total)=>{
        let _totalPages =1;
        if(total>10){
            _totalPages = Math.floor(total/10);
            if(total%10!==0){
                _totalPages +=1;
            }
        }
        setTotalPages(_totalPages);
    }

    async function fetchMovieData (){
        if(inputMovie.trim()!==""){
            resetPages();
            _page = 1;

            try{
                const request = await fetch(`${url_movie}${_page}`);
                const response = await request.json();
                console.log(response);

                if(response.Response.trim()==="True"){
                    calculateTotalPages((response.totalResults)*1);
                    setData({...response, url_movie});
                }
                
            }catch(error){
                console.log(error);
            }

        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        fetchMovieData();   
    }

    return(
        <Fragment>
            <View movie={inputMovie} onChange={handleChangeInputMovie} onSubmit={handleSubmit}/>
        </Fragment>
    );
}

export default SearchForm;