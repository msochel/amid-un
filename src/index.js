import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.css';
import 'semantic-ui-css/semantic.min.css';
import 'primereact/resources/primereact.min.css';

/* THEMES
cruze | cupertino | darkness | flick | home | kasper | lightness | ludvig
omega | pepper-grinder | redmond | rocket | south-street | start | trontastic
voclain */
import 'primereact/resources/themes/redmond/theme.css';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
