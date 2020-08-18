const type = "SET_MOVIE_ID";

export const setMovieID = (movieID)=>{
    return {
        type,
        payload: {
            movieID
        }
    }
}