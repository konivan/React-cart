import React from 'react';
import CartFooter from '../CartFooter.jsx/CartFooter';
import CartHeader from '../CartHeader/CartHeader';
import Product from '../Product/Product';
import data from '../../data';
import { useState } from 'react';
import { useEffect } from 'react';

const Cart = () => {

  const [cart, setCart] = useState(data);

  const [total, setTotal] = useState({
    price: cart.reduce((prev, curr) => prev + curr.price, 0),
    count: cart.reduce((prev, curr) => prev + curr.count, 0),
  });

  useEffect(() => {
    setTotal({
      price: cart.reduce((prev, curr) => prev + curr.priceTotal, 0),
      count: cart.reduce((prev, curr) => prev + curr.count, 0),
    });
  }, [cart]);

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

  const changeValue = (id, value) => {
    setCart(cart => {
      return cart.map(product => {
        if (product.id === id) {
          return {
            ...product,
            count: value,
            priceTotal: value * product.price
          };
        };
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
      {cart.map((item) => (
        <Product
          item={item}
          key={item.id}
          deleteProduct={deleteProduct}
          increase={increase}
          decrease={decrease}
          changeValue={changeValue}
        />
      ))}
      <CartFooter total={total}/>
    </section>
  );
};

export default Cart;