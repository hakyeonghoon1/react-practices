import React, {useState, useEffect} from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {
    const [route,setRoute] = useState('');
    useEffect(()=>{
        const handleHashChange = ()=>setRoute(window.location.hash.substr(1));
        //didmount
        window.addEventListener('hashchange',handleHashChange);
        return ()=>{
            //unmount
            window.removeEventListener('hashchange',handleHashChange);
        }
    },[])
    return (()=>{
        switch(route){
            case '/':
                return <Main/>;
            case '/guestbook':
                return <Guestbook/>;
            case '/gallery':
                return <Gallery/>;
            default:
                return null;
        }
        return <div>{`${route}에 맞는 컴포넌트를 리턴합니다.`}</div>
    })();
}