import React from 'react';
import CartFooter from '../CartFooter.jsx/CartFooter';
import CartHeader from '../CartHeader/CartHeader';
import Product from '../Product/Product';
import data from '../../data';
import { useState } from 'react';

const Cart = () => {

  const [cart, setCart] = useState(data);

  const increase = (id) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: ++product.count,
            priceTotal: product.count * product.price
          };
        };
        return product;
      });
    })
  }

  const decrease = (id) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id && product.count >= 2) {
          return {
            ...product,
            count: --product.count,
            priceTotal: product.count * product.price
          };
        }
        return product;
      });
    });
  };

  const deleteProduct = (id) => {
    setCart((cart) => {
      return cart.filter((product) => id !== product.id)
    })
  }

  return (
    <section className="cart">
        <CartHeader />
        {cart.map((item) =>
        <Product item={item} key={item.id} deleteProduct={deleteProduct} increase={increase} decrease={decrease}/>
        )}
        <CartFooter />
    </section>
  );
};

export default Cart;