//DEPENDANTS
import React from 'react';
import { render } from 'react-dom';

//STYLE
import './css/style.css';

//ROUTES
//component is actually named 'Routes' in the file
import Main from './components/Routes'

//COMPONENTS
import App from './components/App';
import StorePicker from './components/StorePicker';

//RENDER
render( <Main/>, document.querySelector( '#main' ) );