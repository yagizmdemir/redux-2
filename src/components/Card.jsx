import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { balance, buy, cart, sell } from '../redux/items/items.slice';

const Card = ({ item }) => {
    //Proos
    const { image, title, price, id } = item;

    //useState defiations
    const [piece, setPiece] = useState(0);

    //Redux definations
    const dispatch = useDispatch();
    const cartItems = useSelector(cart);
    const billBalance = useSelector(balance);

    //Functions
    const handleChange = (e) => {
        setPiece(e.target.value)
    }

    const handleBuy = () => {
        dispatch(buy({id, title, price}));
    }

    const handleSell = () => {
        dispatch(sell({id, title, price}));
    }

    //Hooks usage
    useEffect(() => {
        setPiece(cartItems.find(i => i.title === title)?.piece || 0)
    }, [cartItems, title]);

    return (
        <div className="item-wrapper">
            <img src={image} className="item-img" alt='' />
            <div className="item-name">{title}</div>
            <div className="item-cost">${Intl.NumberFormat('en-US').format(price)}</div>
            <div className="item-controls">
                <button disabled={!cartItems.find(i => i.title === title) ? true : false} className="item-sell" onClick={handleSell}> Sell </button>
                <input pattern="\d*" type="number" className="item-input" value={piece} onChange={handleChange} />
                <button disabled={billBalance >= price ? false : true} className="item-buy" onClick={handleBuy}> Buy </button>
            </div>
        </div>
    )
}

export default React.memo(Card);