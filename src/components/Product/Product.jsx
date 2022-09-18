import React from 'react';
import ButtonDelete from '../ButtonDelete/ButtonDelete';
import Count from '../Count/Count';
import "./style.scss";

const Product = ({item, deleteProduct, increase, decrease}) => {
  return (
        <section className="product">
        <div className="product__img"><img src={`./img/products/${item.img}`} alt={item.title} /></div>
        <div className="product__title">{item.title}</div>
        <div className="product__count">
            <Count count={item.count} increase={increase} decrease={decrease} id={item.id}/>
        </div>
        <div className="product__price">{item.priceTotal}</div>
        <div className="product__controls">
            <ButtonDelete deleteProduct={deleteProduct} id={item.id}/>
        </div>
    </section>
  );
};

export default Product;