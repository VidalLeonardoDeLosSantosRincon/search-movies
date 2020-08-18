import React, {Fragment, useState, useEffect} from "react";
import {connect} from "react-redux";

//actions
//pagination
import {nextPage} from "../../redux/actions/pagination/nextPage";
import {prevPage} from "../../redux/actions/pagination/prevPage";
import {currentPage} from "../../redux/actions/pagination/currentPage";
import {setTotalPages} from "../../redux/actions/pagination/setToTalPages";
//movie
import {setData} from "../../redux/actions/movie/setData";


//view
import View from './view';

const Pagination = (props)=>{
    const {page, totalPages, nextPage, prevPage, url_movie, setData} = props;
    const [_pagination_, _setPagination_] = useState(false);

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
        
        try{
            const request = await fetch(`${url_movie}${page}`)
            const response = await request.json()
        
            if(response.Response.trim()==="True"){
                calculateTotalPages((response.totalResults)*1);
                setData({...response, url_movie});
                _setPagination_(false);
            }
        }catch(error){
            console.log(error);
        }
    }

    const setPrevPage =()=>{
        prevPage();
        _setPagination_(true);
      
    }

    const setNextPage = ()=>{
        nextPage(); 
        _setPagination_(true);
        
    }

    useEffect(()=>{
        if(_pagination_){
            fetchMovieData();
        }
    },[_pagination_,fetchMovieData])

    
    return(
        <Fragment>
            <View page={page} totalPages={totalPages} setNextPage={setNextPage} setPrevPage={setPrevPage} />
        </Fragment>
    );
}

const mapStateToProps = (state)=>{
    return{
        data: state.Movie.data,
        page: state.Pagination.page,
        totalPages: state.Pagination.totalPages
    }

}

const mapDispatchToProps = (dispatch)=>{
    return{
        nextPage: ()=> dispatch(nextPage()),
        prevPage: ()=> dispatch(prevPage()),
        currentPage: ()=> dispatch(currentPage()),
        setData:(data)=>dispatch(setData(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);


