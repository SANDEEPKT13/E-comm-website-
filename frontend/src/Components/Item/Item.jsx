import React from 'react'
import './Item.css'

const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.image} alt=''/>
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-priices-new">
                {props.new_prices}
            </div>
            <div className="item-price-old">
                {props.old_prices}
            </div>
        </div>
    </div>
  )
}

export default Item
