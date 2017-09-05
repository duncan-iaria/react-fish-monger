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

        const fish = 
        {
            name: this.name.value,
            price: this.price.value,
            status: this.status.value,
            description: this.description.value,
            imgUrl: this.imgUrl.value,
        }

        console.log( "we're making the fish" );
        console.log( fish );
        
        this.props.addFish( fish );
        this.fishForm.reset();
    }

    render()
    {
        return(
            <form className="fish-edit" ref={ ( input ) => this.fishForm = input } onSubmit={ this.createFish }>
                <input type="text" ref={ ( input ) => this.name = input } placeholder="fish name"/>
                <input type="text" ref={ ( input ) => this.price = input } placeholder="fish price"/>

                <select ref={ ( input ) => this.status = input }>
                    <option value="available">Fresh</option>
                    <option value="unavailable">Sold Out</option>
                </select>

                <textarea placeholder="fish desc" ref={ ( input ) => this.description = input } ></textarea>
                <input type="text"  ref={ (input) => this.imgUrl = input } placeholder="fish img"/>
                <button type="submit">+ add fish</button>
            </form>
        )
    }
}

export default AddFishForm;