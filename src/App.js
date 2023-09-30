import React from 'react'
import MoneyBar from "./components/MoneyBar";
import { useSelector } from 'react-redux';
import { items } from './redux/items/items.slice';
import Total from './components/Total';
import Card from './components/Card';

function App() {

  const cardItems = useSelector(items);
  const cartItems = useSelector((state) => state.items.cart);

  return (
    <div className='container'>
      <div className="title">
        <img src="https://neal.fun/spend/billgates.jpg" className="header-img" width={125} height={125} alt='' />
        Spend Bill Gates' Money
      </div>
      <MoneyBar />
      <div className="items">
        {
          cardItems.map((item, index) => (
            <Card item={item} key={`item--${index}`} />
          ))
        }
      </div>
      {
        cartItems.length > 0
        && <>
          <Total />
        </>
      }
    </div>
  );
}

export default App;
