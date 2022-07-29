import './styles/ProductCard.css'
import React from "react";

export default props =>{
    return(
        <a href={props.link}>
        <div className="ProductCard" >
            <img className="ProductCardIMG" alt="Foto Anúncio"src={props.image}></img>
            <h1 className="ProductCardTitle">{props.title}</h1>
            {props.children}
            <h1 className='ProductCardPrice'>{props.price}</h1>
        </div>
        </a>
    )
}


