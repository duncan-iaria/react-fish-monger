import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes.js';

class App extends React.Component
{
    constructor()
    {
        super();
        
        this.addFish = this.addFish.bind( this );
        this.loadSamples = this.loadSamples.bind( this );

        this.state =
        {
            fishes: {},
            order: {}
        }
    }

    addFish( tFish )
    {
        //copy current fishes
        const tempFishes = { ...this.state.fishes };

        //generate our key (unique based on time stamp)
        const tempTimestamp = Date.now();

        //add new fish
        tempFishes[ `fish-${tempTimestamp}`] = tFish;

        this.setState( { fishes: tempFishes } );
    }

    loadSamples()
    {
        this.setState( {fishes: sampleFishes } );
    }

    render()
    {
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Seafood Yum Yum"/>
                </div>
                <Order/>
                <Inventory addFish={ this.addFish } loadSamples={ this.loadSamples }/>
            </div>
        )
    }
}

export default App;