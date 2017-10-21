import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ForArtist from './containers/ForArtist/ForArtist';
import registerServiceWorker from './registerServiceWorker';
import {
    HashRouter as Router,
    Route,
} from 'react-router-dom';

ReactDOM.render(<Router>
    <div>
        <Route path="/" exact component={App}/>
        <Route path="/for-artist" exact component={ForArtist}/>
    </div>
</Router>, document.getElementById('root'));
registerServiceWorker();
