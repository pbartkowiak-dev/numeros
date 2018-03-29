import React from 'react';
import '../css/numberFormatting.css';
import {isTeenOrTwentyCheck} from '../js/helpers';

class NumberPresent extends React.Component {
    render() {
        return (
            <section className="number-present">
            <h2>Number to type</h2>
            <div className="numbers-app__section-container">
                <p className="number-present__number">
                    <NumFormated currentNumber={this.props.currentNumber} />
                </p>
            </div>
            <div className="number-present__messages">
                <p className={"number-present__message--wrong" + (this.props.quizState !== 'wrongAnswer' ? ' hidden' : '')}>
                    Wrong answer
                </p>
                <p className={"number-present__message--right" + (this.props.quizState !== 'rightAnswer' ? ' hidden' : '')}>
                    {this.props.properAnswer}
                </p>
                </div>
        </section>
        );
    }
}

const NumFormated = props => {
    const formatter = (num) => {
        const numberFormatted = String(12345628).split('').reverse().map((digit, i, arr) => {
            const digitTypes = ['units', 'decimals', 'hundreds', 'thousends', 'thousends', 'thousends', 'millions', 'millions', 'millions'];
            const isChunk = (i+1) % 3 === 0;
            const isTeenOrTwenty = i < 2 && isTeenOrTwentyCheck(Number(arr[1] + arr[0]));

            if (isTeenOrTwenty) {
                return <span className="twentiesAndTeens" key={i}>{digit}</span>;   
            }

            if (isChunk) {
                return <span className={"numChunk " + digitTypes[i] || 'greater'} key={i}>{digit}</span>;   
            }
            return <span className={digitTypes[i] || 'greater'} key={i}>{digit}</span>;            
        }).reverse();
        
        return numberFormatted;
    }



    return (
        <span>{formatter(props.currentNumber)}</span>
    );
}

export default NumberPresent;