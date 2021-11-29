import React from 'react';
import MyComponent from './MyComponent';

export default function(){
    return(

        <MyComponent 
            props01={'answk'}
            props02={10}
            props03={true}
            props04={{no:1}}
            props05={[1,2,3,4]}
            props06={()=>'함수'}
            props07={'200'}
            props08={[false,true,true]}
            props09={{no:1,name:'둘리',email:'dooly@gmail.com'}}/>
    )
}