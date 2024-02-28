import React from 'react'
import './product.css'
import {useStateValue} from './StateProvider'
function Product({id, title, image, price, rating }) {
   
     const [{ basket },dispatch] = useStateValue();
     console.log('this is the basket',basket);

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
               id: id, 
               title: title, 
                image: image,
                price: price, 
                rating: rating,
            },
        });
    };
  return (
    <div className="product">
        <div className="pfroduct__info">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
               {/* { stars() */}
              {Array(rating)
               .fill()
               .map((_) => (
               <p>⭐️</p>
                ))
                 }
            </div>
        </div>
        <img src={image} alt=""/>        
        <button onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default Product