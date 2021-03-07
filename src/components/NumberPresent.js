import React from 'react';
import '../css/numberFormatting.css';
import {isTeenOrTwentyCheck} from '../js/helpers';
import {isWordTeenOrTwentyCheck} from '../js/helpers';
import {lastDigit} from '../js/helpers';

class NumberPresent extends React.Component {
    state = {
        numFormatted: '',
        textFormatted: '',
    };

    numFormatter = (num) => {
        const digitTypes = ['units', 'decimals', 'hundreds', 'thousends', 'thousends', 'thousends', 'millions', 'millions', 'millions'];
        let unitTypesUsed = [];
        const numberFormatted = String(num).split('').reverse().map((digit, i, arr) => {
            const isChunk = (i+1) % 3 === 0;
            const isTeenOrTwenty = i < 2 && isTeenOrTwentyCheck(Number(arr[1] + arr[0]));

            if (isTeenOrTwenty) {
                unitTypesUsed.push('twentiesAndTeens')
                return <span className="twentiesAndTeens" key={i}>{digit}</span>;   
            }

            if (isChunk) {
                return <span className={"numChunk " + digitTypes[i] || 'greater'} key={i}>{digit}</span>;   
            }

            unitTypesUsed.push(digitTypes[i])
            return <span className={digitTypes[i] || 'greater'} key={i}>{digit}</span>;            
        }).reverse();
        
        this.setState({
            numFormatted: numberFormatted,
        });

        return {
            num: num,
            unitTypesUsed: unitTypesUsed,
            properAnswer: this.props.properAnswer
        }
    };

    textFormatter = (numberData) => {
        const {num, unitTypesUsed, properAnswer} = numberData;
        const properAnswerArr = properAnswer.split(' ').reverse();
        const hasTwentiesAndTeens = !!unitTypesUsed.filter(w => w.includes('veinti') || w.includes('die')).length;
        let result = [];
        let currentType;

        properAnswerArr.forEach((word, index) => {

            if (currentType !== 'thousends' && currentType !== 'greater') {
                
                if (isWordTeenOrTwentyCheck(word) && (index === 0  || index === 1)) {
                    currentType = 'twentiesAndTeens';
                } else {
                    if (hasTwentiesAndTeens && index === 0) {
                        currentType = 'twentiesAndTeens';
                    } else if (num !== 0 && lastDigit(num) === 0 && index === 0) {
                        currentType = 'decimals';
                    } else if (!hasTwentiesAndTeens && index === 0) {
                        currentType = 'units';
                    }
        
                    if (hasTwentiesAndTeens && index === 1) {
                        currentType = 'twentiesAndTeens';
                    } else if (!hasTwentiesAndTeens && index === 1 && word === 'y') {
                        currentType = 'decimals';
                    } else if (!hasTwentiesAndTeens && index === 1) {
                        currentType = 'decimals';
                    }                  
                }

                if (!hasTwentiesAndTeens && index === 2 && !word.includes('cien')) {
                    currentType = 'decimals';
                }
    
                if ((word.includes('cien') && index <= 3) || word === 'quinientos') {
                    currentType = 'hundreds';
                }
            }

            if (word === 'mil' && currentType !== 'greater') {
                currentType = 'thousends';
            }

            if (word === 'millón' || word === 'millones') {
                currentType = 'greater';
            }

            result.push(
                <span className={currentType} key={index}>{word}</span>
            );

        });

        this.setState({
            textFormatted: result.reverse().reduce((prev, curr) => [prev, ' ', curr])
        });
    };
    
    componentWillReceiveProps(nextProps) {
        let numberData = this.numFormatter(nextProps.currentNumber);
        numberData.properAnswer = nextProps.properAnswer;
        this.textFormatter(numberData);
    }

    render() {
        return (
            <section className="number-present">
            <h2>Number to type</h2>
            <div className="numbers-app__section-container">
                <p className="number-present__number">
                    {this.state.numFormatted}
                </p>
            </div>
            <h2>Answer</h2>
            <div className="number-present__messages">
                <p className={"number-present__message--wrong" + (this.props.quizState !== 'wrongAnswer' ? ' hidden' : '')}>
                    Wrong answer
                </p>
                <p className={"number-present__message--right" + (this.props.quizState !== 'showAnswer' ? ' hidden' : '')}>
                    {this.state.textFormatted}
                </p>
            </div>
        </section>
        );
    }
}

export default NumberPresent;