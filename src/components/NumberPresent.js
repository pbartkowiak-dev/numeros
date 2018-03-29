import React from 'react';
import '../css/numberFormatting.css';

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
        // const numsArr = String(num).match(/.{1,3}/g);
        // String(12345).split('').reverse().map(el=>el.split('').reverse().join('')).join('').match(/.{1,3}/g).map(el=>el.split('').reverse().join('')).reverse().join('')
        const numsArr =  String(12345).split('').reverse().map(el=>el.split('').reverse().join('')).join('').match(/.{1,3}/g)
        let numFormatted = 999;
        if (numsArr) {
            numsArr[numsArr.length - 1].split('').map((num, i) => {
                if (i === 0) {
                    return <span className="unit"></span>
                } else if (i === 1) {
                    return <span className="decimal"></span>
                }
                return <span className="hundred"></span>
            });
            numFormatted = numsArr.reverse().map((chunk, i) => <span key={i} className="numChunk">{chunk}</span>);
        }

        return numFormatted;
    }

    return (
        <span>{formatter(props.currentNumber)}</span>
    );
}

export default NumberPresent;