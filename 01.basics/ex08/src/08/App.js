import React,{Fragment,Component} from 'react';
import Header from './Header';
import Content from './Content';

export default class extends Component{
    render(){
        return(
            <Fragment>      {/*다른 엘리먼트로 둘러싸고 싶지 않을 때*/}
                <Header/>
                <Content/>
            </Fragment>           
        );
    }
}