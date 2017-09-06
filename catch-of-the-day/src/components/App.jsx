import React from 'react';
import Header from './Header';
import Fish from './Fish';
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

    addToOrder( tKey )
    {
        const tempOrderState = { ...this.state.order };

        tempOrderState[tKey] = tempOrderState[tKey] + 1 || 1;

        this.setState( { order: tempOrderState } );
    }

    render()
    {
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Seafood Yum Yum"/>
                    <ul className="list-of-fishes">
                    { 
                        Object.keys( this.state.fishes ).map( key => <Fish key={ key } details={ this.state.fishes[key] }/> )
                    }
                    </ul>
                </div>
                <Order/>
                <Inventory addFish={ this.addFish } loadSamples={ this.loadSamples }/>
            </div>
        )
    }
}

export default App;