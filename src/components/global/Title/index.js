import React, {Fragment} from "react";

//components
import View from "./view"

export const Title = ({children})=>{
    return(
        <Fragment>
            <View>
                {children}
            </View>   
        </Fragment>
    );
}