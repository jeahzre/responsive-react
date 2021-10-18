import React from 'react';
import {Link} from 'react-router-dom';
import './CardItem.css'

const CardItem = ({src, text, label, path}) => {
  return (
    <>
    <li className="card-item">
    <Link className="cards_item_link" to={path}>
    <figure className="cards_item_pic-wrap" data-category={label}>
    <img className="cards_item_img" src={src} alt="waterfall"/>
    </figure>
    <div className="cards_item_info">
    <h5 className="cards_item_text">{text}</h5>
    </div>
    </Link>
    </li>
    </>
    )
}

export default CardItem;