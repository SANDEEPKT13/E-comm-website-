import React from 'react'
import './Item.css'

const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.image} alt=''/>
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-priices-new">
                ${props.new_price}
            </div>
            <div className="item-price-old">
                ${props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Item


// const Item = ({ name, image, new_price, old_price }) => {
//   return (
//     <div className='item'>
//       <img src={image} alt=''/>
//       <p>{name}</p>
//       <div className="item-prices">
//         <div className="item-prices-new">${new_price}</div>
//         <div className="item-prices-old">${old_price}</div>
//       </div>
//     </div>
//   );
// };

