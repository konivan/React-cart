import "./_vars.scss";
import "./_reset.scss";
import "./_base.scss";
import Title from "../Title/Title";
import Cart from "../Cart/Cart";
import "./_section-cart.scss";

function App() {
  return (
    <section className="section-cart">
        <header className="section-cart__header">
            <div className="container">
              <Title />
            </div>
        </header>
        <div classNameName="section-cart__body">
            <div className="container">
              <Cart />
            </div>
        </div>
    </section>
  );
}

export default App;
