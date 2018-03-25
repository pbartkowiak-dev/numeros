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
        </section>
        );
    }
}

export default NumberPresent;