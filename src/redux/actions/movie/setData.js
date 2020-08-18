const type = "SET_DATA";

export const setData = (data)=>{
    return {
        type,
        payload: {
            data
        }
    }
}