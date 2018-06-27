import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker'; //siver para simular datos de manera local
//puede funcionar sin conexion a internet

ReactDOM.render(<App />, document.getElementById('root')); //formato JSX porque estas importando
// un html dentro de JavaScript , gracias a la biblioteca de react para la web ,
//estas diciendo que seleccione por id el elemento root
registerServiceWorker();
