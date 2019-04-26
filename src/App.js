import React, {Component} from 'react';
import Bookings from './components/Bookings';
import Meals from './components/Meals';
import Error from './components/Error';


class App extends Component {

    render() {
        return (<div className="container-fluid">
            <center>
                <h2>Hacker Hostel</h2>
            </center>
            <div className="container">
                <Bookings></Bookings>
                <Error></Error>
                <Meals></Meals>
            </div>
        </div>);
    }
}

export default App;