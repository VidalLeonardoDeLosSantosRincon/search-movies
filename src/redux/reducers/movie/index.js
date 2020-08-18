const INITIAL_STATE = {
    movieID:"",
    data:{},
    results:[],
    totalResults:0,
    url_movie:"",
    api_key:"c4380769"
}

export const Movie =( state = INITIAL_STATE, {type, payload})=>{
    switch(type){
        case "SET_MOVIE_ID":
            return {
                ...state,
                movieID: payload.movieID
            }
        case "SET_DATA":
            return {
                ...state,
                data: payload.data,
                results: payload.data.Search,
                totalResults: (payload.data.totalResults * 1),
                url_movie: payload.data.url_movie

            }
        default:
            return state;
        
    } 
}
