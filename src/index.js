import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.css';
import 'primereact/resources/primereact.min.css';

/* THEMES
cruze | cupertino | darkness | flick | home | kasper | lightness | ludvig
omega | pepper-grinder | redmond | rocket | south-street | start | trontastic
voclain */
import 'primereact/resources/themes/redmond/theme.css';

import json from './data/modules';

ReactDOM.render(<App data={json}/>, document.getElementById('root'));
registerServiceWorker();
