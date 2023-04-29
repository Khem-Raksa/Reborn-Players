import { PhoneSlash } from "phosphor-react";
import React from "react";
import { ShopContext } from "../../context/shop-context";
import './product.css';

//UI for each player
export const Product = (props) => {
    const {id,playerName,pace,shooting,passing,dribbling,defending,physicality,playerImage} = props.data;
    return (
    <div className="player">
        <img src={playerImage} alt="" />
        <div className="description">
            <p> <b>{playerName}</b> </p>
            <p className="pace">💨 Pace: {pace}</p>
            <p className="shooting">🎯 Shooting: {shooting}</p>
            <p className="passing">👓 Passing: {passing}</p>
            <p className="dribbling"> 🏃‍♀️ Dribbling: {dribbling}</p>
            <p className="defending">✋ Defending: {defending}</p>
            <p className="physicality">💪 Physicality: {physicality}</p>
        </div>
    </div> 
    )
};