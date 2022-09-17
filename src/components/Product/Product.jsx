import React from 'react';
import ButtonDelete from '../ButtonDelete/ButtonDelete';
import Count from '../Count/Count';
import "./style.scss";

const Product = () => {
  return (
        <section className="product">
        <div className="product__img"><img src="./img/products/macbook.jpg" alt="Apple MacBook Air 13" /></div>
        <div className="product__title">Apple MacBook Air 13</div>
        <div className="product__count">
            <Count />
        </div>
        <div className="product__price">110 000 руб.</div>
        <div className="product__controls">
            <ButtonDelete />
        </div>
        <div className="product__img"><img src="./img/products/apple-watch.jpg" alt="Apple-watch" /></div>
        <div className="product__title">Apple-watch</div>
        <div className="product__count">
            <Count />
        </div>
        <div className="product__price">60 000 руб.</div>
        <div className="product__controls">
            <ButtonDelete />
        </div>
        <div className="product__img"><img src="./img/products/mac-pro.jpg" alt="Apple mac-pro" /></div>
        <div className="product__title">Apple mac-pro</div>
        <div className="product__count">
            <Count />
        </div>
        <div className="product__price">190 000 руб.</div>
        <div className="product__controls">
            <ButtonDelete />
        </div>
    </section>
  );
};

export default Product;