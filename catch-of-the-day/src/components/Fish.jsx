import React from 'react';
import { formatPrice } from '../helpers';

//=========================
// COMPONENT
//=========================
class Fish extends React.Component
{
    render()
    {
        const details = this.props.details;
        const isAvailable = details.status === 'available';
        const buttonText = isAvailable ? 'Add To Order' : 'Sold Out';

        return(
            <li className="menu-fish">
                <img src={ details.image } alt={ details.name }/>
                <h3>
                    { details.name }
                    <span className="price">{ formatPrice( details.price ) }</span>
                </h3>
                <p>{ details.desc }</p>
                <button disabled={ !isAvailable }>{ buttonText }</button>
            </li>
        )
    }
}

//=========================
// EXPORTS
//=========================
export default Fish;