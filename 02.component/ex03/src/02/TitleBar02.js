import React from 'react';

export default function TitelBar02() {

    const onClickHandler =()=>{
        console.log("TitleBar02 clicked");
    }
    return (
        <h1
            onClick = { onClickHandler }
            style={{cursor:'pointer'}}>
            ex03 - Functional Even Handler(Functional Component)
        </h1>
    )

}