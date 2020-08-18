
const INITIAL_STATE = {
    page:1,
    totalPages: 0
};

export const Pagination = (state = INITIAL_STATE,{type, payload})=>{
    switch(type){
        case "RESET_PAGES":
            return {page:1, totalPages:10}  
        case "SET_TOTAL_PAGES":
            return {...state, totalPages: payload.totalPages}
        case "CURRENT_PAGE":
            return {page: state.page};
        case "NEXT_PAGE":
            return (state.page<state.totalPages)? {page: (state.page + 1), totalPages: state.totalPages} : {page: state.page, totalPages: state.totalPages};
        case "PREV_PAGE":
            return (state.page>1)? {page: (state.page - 1), totalPages: state.totalPages} : {page: state.page, totalPages: state.totalPages};
        default:
            return state;
    }
}