import React,{useState,useEffect} from "react";

export const TitleCard = (props) => {
    return (
        <li className="card">{props.title}</li>
    );
}