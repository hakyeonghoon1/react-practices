import React from 'react';
import './assets/css/App.css';

export default function(){
    const h1Style = {
        width:380,
        height:50,
        padding:5,
        color:'#111',
        backgroundColor:'#eeff99'
    }
    return(

        <div id='App'>
            <h1>{`Normal CSS (css-loader options:{modules:false})`}</h1>
        </div>
    )
}