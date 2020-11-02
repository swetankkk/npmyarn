import React from 'react';
import equivalent from './equivalent';
const parser=(props)=>{
    const object = props.split(" ");

    /*
    */
    //console.log(typeof(props.split(" ")))
    //console.log(Object.keys(object).length);
    /*if ( object[0] !=="npm")
        {
            console.log("Not an NPM command")
        }
        else{console.log("NPM Command")}
    */
    let converted='';
    for (const property in object) {
        if (equivalent[object[property]]!=undefined)
        converted+=' '+equivalent[object[property]];
        else
        converted+=' '+object[property];
    }
    return converted;
}

export default parser;