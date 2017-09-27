import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ForArtist from './containers/ForArtist/ForArtist';
import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

ReactDOM.render(<Router>
    <div>
        <Route path="/" exact component={App}/>
        <Route path="/for-artist" exact component={ForArtist}/>
    </div>
</Router>, document.getElementById('root'));
registerServiceWorker();
