import React,{useState,useEffect} from "react";
import { TitleCard } from "./TitleCard";

export const Main = () => {

    const [threads, setThreads] = useState([]);

    //スレッド一覧呼び出し
    /* const getThreads = () => {
        fetch('https://railway-react-bulletin-board.herokuapp.com/threads?offset=0',{
            method: 'GET',
        }).then(response => response.json())
        .then(function(threads){
            setThreads(threads);
        });
    } */

    //スレッド一覧呼び出し
    useEffect(() => {
        async function getThreads(){
            let response = await fetch('https://railway-react-bulletin-board.herokuapp.com/threads?offset=0',{
                method: 'GET',
            });
            response = await response.json();
            setThreads(response);
        }
        getThreads();
    },[]);

    return (
        <main>
            <h2>新着スレッド</h2>
            <ul className="card_wrapper">
                {threads.map((thread) => <TitleCard key={thread.id} title={thread.title}></TitleCard>)}
            </ul>
        </main>
    );
}