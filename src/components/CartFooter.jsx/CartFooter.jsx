import React from 'react';
import "./style.scss";

const CartFooter = ({total}) => {
  return (
  <footer className="cart-footer">
    <div className="cart-footer__count">Кол-во: {total.count}</div>
    <div className="cart-footer__price">{total.price} руб.</div>
  </footer>
  );
};

export default CartFooter;