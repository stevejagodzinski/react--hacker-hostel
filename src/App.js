import React, {Component} from 'react';
import Bookings from './components/Bookings';
import Meals from './components/Meals';
import Error from './components/Error';


class App extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            hackers: [],
            dates: [],
            invalidHackers: []
            };
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClicked = this.handleButtonClicked.bind(this);
    }
    
    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        
        this.setState({[name]: value});
        console.log(this.state)
    }
    
    handleButtonClicked() {
        this.setState({invalidHackers: this.getInvalidHackers()})
        console.log(this.state)
    }
    
    getInvalidHackers() {
        const hackers = this.parseHackers();
        const dates = this.parseDates();
        
        console.log({hackers: hackers, dates: dates})
        
        let invalidHackers = [];
        for (let i=0; i<hackers.length; i++) {
            const hacker = hackers[i];
            if (this.isDateInvalid(dates[i])) {
                invalidHackers.push(hacker);
            }
            
        }
        
        console.log({invalidHackers: invalidHackers});
        
        return invalidHackers;
    }
    
    parseHackers() {
        return this.parseLines(this.state.hackers);
    }
    
    parseDates() {
        return this.parseLines(this.state.dates).map(dateRange => {
            const fromAndToDateSplit = dateRange.split(" to ");
            return {
                from: Date.parse(fromAndToDateSplit[0]),
                to: Date.parse(fromAndToDateSplit[1])
            };
            
        });
    }
    
    isDateInvalid(date) {
        return date === undefined || isNaN(date.to) || isNaN(date.from) || date.to < date.from;
    }
    
    parseLines(textFieldContent) {
        if (textFieldContent !== undefined) {
            return textFieldContent.split('\n');
        } else {
            return [];
        }
    }

    render() {
        return (<div className="container-fluid">
            <center>
                <h2>Hacker Hostel</h2>
            </center>
            <div className="container">
                <Bookings handleInputChange={this.handleInputChange} handleButtonClicked={this.handleButtonClicked}></Bookings>
                <Error invalidHackers={this.state.invalidHackers}></Error>
                <Meals></Meals>
            </div>
        </div>);
    }
}

export default App;