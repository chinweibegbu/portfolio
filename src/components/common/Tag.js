import React from "react";
import "../../styles/Tag.css";

function Tag( {text, size, colorScheme} ) {
    return ( 
        <div className={"Tag " + size + "-tag " + colorScheme}>
            {text}
        </div>
    );
}

export default Tag;