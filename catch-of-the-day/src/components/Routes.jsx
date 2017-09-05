import React from 'react';

//ROUTER
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//COMPONENTS
import StorePicker from './StorePicker';
import App from './App';
import NotFound from './NotFound';

function Routes()
{
    return(
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path='/' component={StorePicker}/>
                    <Route path='/store/:store' component={App}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default Routes;