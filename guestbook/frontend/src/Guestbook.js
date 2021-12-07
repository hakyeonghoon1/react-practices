import React, {useState,useEffect} from 'react';
import WriteForm from './WriteForm';
import MessageList from './MessageList';
import styles from './assets/scss/Guestbook.scss';

import data from './assets/json/data.json';

export default function Guestbook() {
    const [messages, setMessages] = useState(data);

    useEffect(() => {
        console.log('최초 메세지 리스트 가져오기')
        fetchMessages();
    }, []);

    const notifyMessage = {
        add: function(message) {
            console.log('ajax posting.....');
            // 성공했다 가정
            message.no = 10;
            message.password = '';

            setMessages([message, ...messages]);
        },
        delete: function(no) {
            setMessages(messages.filter(message => message.no !== no));
        }
    }

    const fetchMessages =async ()=>{
        console.log('message list 가져오기');
        try{
            const startNo = messages.length == 0 ? 0 :messages[messages.length-1].no;
        
            const response = await fetch(`/api/${startNo}`,{
                method:'get',
                headers:{
                    'Content-Type':'application/json',
                    'Accept':'application/json'
                }
            });
            if(!response.ok){
                throw new Error(`${response.status} ${response.statusText}`)
            }
            const json = response.json();
            if(json.result !== 'success'){
                throw json.message;
            }
            console.log(json.data);
            setMessages([...messages,...json.data]);
        } catch(err){
            console.error(err);
        }
    };
    return (
        <div className={styles.ScrollOuter}>
            <div>
                <div className={styles.Guestbook}>
                    <h1>방명록</h1>
                    <WriteForm notifyMessage={notifyMessage}/>
                    <MessageList messages={messages} notifyMessage={notifyMessage}/>
                </div>
            </div>
        </div>
    );
}