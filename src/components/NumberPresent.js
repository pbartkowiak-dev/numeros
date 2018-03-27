import React from 'react';

class NumberPresent extends React.Component {
    render() {
        return (
            <section className="number-present">
            <h2>Number to type</h2>
            <div className="numbers-app__section-container">
                <p className="number-present__number">
                    {this.props.currentNumber}
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

export default NumberPresent;