import React from 'react';
import RangePicker from './components/RangePicker';
import NumberPresent from './components/NumberPresent';
import TypeNumber from './components/TypeNumber';
import Buttons from './components/Buttons';
import {buildNumber} from './js/helpers';

import './css/numbersApp.css';

class NumbersApp extends React.Component {
    state = {
        minRange: 12345678,
        maxRange: 12345678,
        currentNumber: '',
        properAnswer: '',
        currentAnswer: '',
        quizState: 'new'
    };

    quiz = {
        setNew: () => this.setState({quizState: 'new'}),
        setWrong: () => this.setState({quizState: 'wrongAnswer'}),
        setShowAnswer: () => this.setState({quizState: 'showAnswer'}),
    };

    deafaultRanges = [{
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

    showAnswer = () => {
        this.quiz.setShowAnswer();
    }

    createNumber = () => {
        this.quiz.setNew();
        let newNumber = Math.floor((Math.random() * (this.state.maxRange - this.state.minRange + 1)) + this.state.minRange);
        this.setState({
            currentNumber: newNumber,
            properAnswer: buildNumber(newNumber),
            currentAnswer: ''
        });
    };

    typeAnswer = (evt) => {
        this.setState({
            currentAnswer: evt.target.value
        });
    }

    submitAnswer = () => {
        if (this.state.quizState === 'showAnswer') {
            this.createNumber();
            return true;
        }

        if (this.state.currentAnswer.trim() === this.state.properAnswer) {
            this.quiz.setShowAnswer();       
            this.setState({currentAnswer: ''});
            return true;
        }

        this.quiz.setWrong();
        return false;
    }

    handleAnswerTypeKeyPress = ev => {
        // @TODO       
   
        // event.nativeEvent.stopImmediatePropagation

        if (ev.key === 'Enter') {
            ev.preventDefault()
            ev.stopPropagation() 
            if (ev.ctrlKey) {
                this.createNumber();
            } else if (this.state.quizState === 'new') {
                this.submitAnswer();
            } else if (this.state.quizState === 'showAnswer') {
                this.createNumber();
            }
        }
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
                        quizState={this.state.quizState}
                        properAnswer={this.state.properAnswer}
                    />
                    <TypeNumber
                        createNumber={this.createNumber}
                        currentAnswer={this.state.currentAnswer}
                        submitAnswer={this.submitAnswer}
                        typeAnswer={this.typeAnswer}
                        handleAnswerTypeKeyPress={this.handleAnswerTypeKeyPress}
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