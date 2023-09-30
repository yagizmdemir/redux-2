import React from 'react'
import { useSelector } from 'react-redux'

const MoneyBar = () => {
    const balance = useSelector((state) => state.items.balance);

    return (
        <div className="money-bar">${Intl.NumberFormat('en-US').format(balance)}</div>
    )
}

export default MoneyBar