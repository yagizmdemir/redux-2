import React from 'react'
import { useSelector } from 'react-redux'
import { cart, cartTotal } from '../redux/items/items.slice';

const Total = () => {
    const ct = useSelector(cartTotal);
    const cartItems = useSelector(cart);

    return (
        <div className="spree-wrapper">
            <div className="spree-headline">Your Receipt</div>
            {
                cartItems.map((item, index) => (
                    <div className="spree-items" key={`total-item_${index}`}>
                        <div className="spree-item-name">{item.title}</div>
                        <div className="spree-item-amount">x{item.piece}</div>
                        <div className="spree-item-cost">${Intl.NumberFormat('en-US').format(item.piece * item.price)}</div>
                    </div>
                ))
            }
            <div className="spree-total">
                <span>TOTAL</span>
                <div className="spree-total-money">
                    ${Intl.NumberFormat('en-US').format(ct)}
                </div>
            </div>
        </div>

    )
}

export default React.memo(Total);