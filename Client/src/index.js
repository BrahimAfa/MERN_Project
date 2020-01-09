import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../src/routes';
// import NavBar from './Components/wedgets/navbar';
// import Header from './Components/wedgets/Header';
import './index.css';


export const App = () => {

    return (
        <BrowserRouter>
            {/* <div class="row">
                <div class="col-sm-2"><NavBar /></div>
                <div class="col-sm-10"><Header /></div>
            </div> */}
            <Routes />
        </BrowserRouter>
    )

}

ReactDOM.render(<App />, document.getElementById('root'));

