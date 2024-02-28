import React from 'react';
import'./chekout.css';
import Subtotal from './Subtotal';
import  CheckoutProduct from "./CheckoutProduct"
// import Heder from './Heder'
import {useStateValue} from './StateProvider'
function Chekout() {
  const [{ basket }] = useStateValue();
  return (
    <div>
      <div className="chekout">
      <div className="chekout__left">
      <img
      className="checkout__ad"
      src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""
      />
      <h3>Hello</h3>
      <h2 className="checkout__title">Your Shopping Basket</h2>
      {/* <CheckoutProduct/> */}
       {basket.map((item) => (
        <CheckoutProduct
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
        />
        ))}
      </div>
      <div className="chekout__right">
        {/* <h1>Subtotal</h1> */}
        <Subtotal />
      </div>
    </div>
    </div>
    
  )
}

export default Chekout