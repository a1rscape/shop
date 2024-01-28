import React from 'react';
import '../../index.css';
import AirForce1 from './ItemsForSellPhotos/air-force-1.jpg';
import AirForce2 from './ItemsForSellPhotos/air-force-2.jpg';
import AirJordan1 from './ItemsForSellPhotos/air-jordan-1.jpg';
import AirJordan4 from './ItemsForSellPhotos/air-jordan-4.jpeg';
import { FaShoppingCart } from "react-icons/fa";

function Items() {
    const items = [
        {
            id: 1,
            image: AirForce1,
            name: "Air Force 1",
            colors: 1,
            price: 150
        },
        {
            id: 2,
            image: AirForce2,
            name: "Air Force 2",
            colors: 3,
            price: 250
        },
        {
            id: 3,
            image: AirJordan1,
            name: "Air Jordan 1",
            colors: 4,
            price: 170
        }
    ]
    return (
        <div className='sell-items-main-wrapper'>
            {items.map(item => (
                <div key={item.id} className='cart'>
                    <img src={item.image} />
                    <p className='cart-item-colors'>Colors: {item.colors}</p>
                    <p className='cart-item-name'>{item.name}</p>
                    <p className='cart-item-price'>{item.price}$</p>
                    {<FaShoppingCart className='cart-add-to-bag' />}
                </div>
            ))}
        </div>
    )
}

export default Items;