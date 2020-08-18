import React, {Fragment} from "react";

//components
import View from "./view";

const Content = ({children})=>{
    return(
        <Fragment>
            <View>
                {children}
            </View> 
        </Fragment>
    );
}
export default Content;