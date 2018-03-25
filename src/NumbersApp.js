import React from 'react';
import RangePicker from './components/RangePicker';
import NumberPresent from './components/NumberPresent';
import TypeNumber from './components/TypeNumber';
import Buttons from './components/Buttons';
import {buildNumber} from './js/helpers';

import './css/numbersApp.css';

class NumbersApp extends React.Component {
    state = {
        minRange: 1,
        maxRange: 9,
        currentNumber: '',
        currentAnswer: ''
    };

    deafaultRanges = [{
        minRange: '',
        maxRange: ''
    }, {
        minRange: 0,
        maxRange: 10
    }, {
        minRange: 0,
        maxRange: 100
    }, {
        minRange: 1000,
        maxRange: 1000000
    }];

    componentDidMount() {
        this.createNumber();
    }

    setRange = (rangeObj) => {
        this.setState({
            minRange: rangeObj.minRange,
            maxRange: rangeObj.maxRange,
        });
    };

    setMinRange = (evt) => {
        this.setState({
            minRange: parseInt(evt.target.value, 10)
        });
    };

    setMaxRange = (evt) => {
        this.setState({
            maxRange: parseInt(evt.target.value, 10)
        });
    };

    createNumber = () => {
        let newNumber = Math.floor((Math.random() * (this.state.maxRange - this.state.minRange + 1)) + this.state.minRange);
        this.setState({
            currentNumber: newNumber
        });
    };

    typeAnswer = (evt) => {
        this.setState({
            currentAnswer: evt.target.value
        });
    }

    submitAnswer = () => {
        console.log(buildNumber(this.state.currentNumber))
        if (this.state.currentAnswer === buildNumber(this.state.currentNumber)) {
            console.log('true')
            return true;
        }
        console.log('false')        
        return false;
    }

    render() {
        return (
            <div className="numbers-app">
                <div className="numbers-app__container">
                    <RangePicker
                        minRange={this.state.minRange}
                        maxRange={this.state.maxRange}
                        setMinRange={this.setMinRange}
                        setMaxRange={this.setMaxRange}
                        setRange={this.setRange}
                        deafaultRanges={this.deafaultRanges}
                    />
                    <NumberPresent
                        currentNumber={this.state.currentNumber}
                    />
                    <TypeNumber
                        createNumber={this.createNumber}
                        currentAnswer={this.currentAnswer}
                        submitAnswer={this.submitAnswer}
                        typeAnswer={this.typeAnswer}
                    />
                    <Buttons
                        createNumber={this.createNumber}
                        submitAnswer={this.submitAnswer}
                    />
                </div>
            </div>
        );
    }
}

export default NumbersApp;