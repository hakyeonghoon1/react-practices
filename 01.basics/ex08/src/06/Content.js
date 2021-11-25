import React,{Fragment} from 'react';
import Clock from './Clock';
import Clock02 from './Clock02';

export default function (){
    return(
        <Fragment>
            <p>{`특징3: JSX 표현식 표기법 {expression}과 문제점`}</p>
            <Clock/>  
            <Clock02/>
        </Fragment>      
    );
}