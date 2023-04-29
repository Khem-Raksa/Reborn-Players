import React from "react";
import {PLAYERS} from '../../players';
import {Product} from './product';
import "./shop.css";

export const Shop = () => {
    return <div className="shop">
        <div className="shopTitle">
            <h1> ⚽ Reborn Players ⚽</h1>
        </div>
        <div className="products">
            {PLAYERS.map((player)=> 
                <Product data={player}/>
            )}
        </div>
    </div>
}