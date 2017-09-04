import React from 'react';

class AddFishForm extends React.Component
{
    constructor()
    {
        //inheritance 
        super();

        //binds the component to the createFish function
        this.createFish = this.createFish.bind( this );
    }

    createFish( tEvent )
    {
        tEvent.preventDefault();
        console.log( "we're making the fish" );
    }

    render()
    {
        return(
            <form className="fish-edit" onSubmit={ this.createFish }>
                <input type="text" placeholder="fish name"/>
                <input type="text" placeholder="fish price"/>

                <select>
                    <option value="available">Fresh</option>
                    <option value="unavailable">Sold Out</option>
                </select>

                <textarea placeholder="fish desc"></textarea>
                <input type="text" placeholder="fish img"/>
                <button type="submit">+ add fish</button>
            </form>
        )
    }
}

export default AddFishForm;