import React from 'react';
import { getFunName } from '../helpers';
import PropTypes from 'prop-types';

class StorePicker extends React.Component
{
    constructor()
    {
        //inheritance 
        super();

        //binds the component to the goToStore function
        this.goToStore = this.goToStore.bind( this );
    }


    //navigate to a named store
    goToStore( tEvent )
    {
        tEvent.preventDefault();
        console.log( 'you changed the url' );
        console.log( this.storeInput.value );
        const storeId = this.storeInput.value;
        this.context.router.history.push( `/store/${ storeId }` );
    }

    render()
    {
        return (
            <form className="store-selector" onSubmit={ this.goToStore }>
                <h2>Store Name</h2>
                <input type="text" required placeholder="Store Name" defaultValue={ getFunName() } 
                ref={ ( input ) => { this.storeInput = input } }/>
                <button type="submit">Enter Store</button>
            </form>
        );
    }
}

//=========================
// ROUTER
//=========================
StorePicker.contextTypes =
{
    router: PropTypes.object
}

//=========================
// EXPORTS
//=========================
export default StorePicker;