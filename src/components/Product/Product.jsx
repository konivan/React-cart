import React from 'react';
import ButtonDelete from '../ButtonDelete/ButtonDelete';
import Count from '../Count/Count';
import "./style.scss";

const Product = ({item}) => {
  return (
        <section className="product">
        <div className="product__img"><img src={`./img/products/${item.img}`} alt={item.title} /></div>
        <div className="product__title">{item.title}</div>
        <div className="product__count">
            <Count />
        </div>
        <div className="product__price">{item.price}</div>
        <div className="product__controls">
            <ButtonDelete />
        </div>
    </section>
  );
};

export default Product;