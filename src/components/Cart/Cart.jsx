import React from 'react';
import CartFooter from '../CartFooter.jsx/CartFooter';
import CartHeader from '../CartHeader/CartHeader';
import Product from '../Product/Product';
import data from '../../data';
import { useState } from 'react';

const Cart = () => {

  const [cart, setCart] = useState(data);

  const deleteProduct = (id) => {
    setCart((cart) => {
      return cart.filter((product) => {return id !== product.id})
    })
  }

  return (
    <section className="cart">
        <CartHeader />
        {cart.map((item) =>
        <Product item={item} key={item.id} deleteProduct={deleteProduct}/>
        )}
        <CartFooter />
    </section>
  );
};

export default Cart;