import React from 'react';
import './css/numbersApp.css';

class NumbersApp extends React.Component {
    getNumber() {
        console.log('get number')
    }

    render() {
        return (
            <div className="numbers-app">
                <div className="numbers-app__container">
                    <section className="range-picker">
                        <h2>Select Range</h2>
                        <div className="numbers-app__section-container">
                            <div className="range-picker__container">
                                <div className="range-picker__input-container">
                                    <p>Min range</p>
                                    <input type="text" className="range-picker__input--range" />
                                </div>
                                <div className="range-picker__input-container">
                                    <p>Max range</p>
                                    <input type="text" className="range-picker__input--range" />
                                </div>
                            </div>
                            <div className="range-picker__default-ranges">
                                <span className="range-picker__range">Clear</span>
                                <span className="range-picker__range">0-10</span>
                                <span className="range-picker__range">0-100</span>
                                <span className="range-picker__range">0-1000</span>
                                <span className="range-picker__range">100-10 000</span>
                                <span className="range-picker__range">100-1 000 000</span>
                            </div>
                        </div>
                    </section>
                    <section className="number-present">
                        <h2>Number to type</h2>
                        <div className="numbers-app__section-container">
                            <p className="number-present__number">1245</p>
                        </div>
                    </section>
                    <section className="type-here">
                        <h2>Type number here</h2>
                        <div className="numbers-app__section-container">
                            <input
                                autoComplete="off"
                                autoCorrect="off"
                                autoCapitalize="off"
                                spellCheck="false"
                                className="number-present__input"
                                type="text" />
                        </div>
                    </section>
                    <section className="buttons">
                        <div className="buttons__container numbers-app__section-container">
                            <button>Answer</button>
                            <button onClick={this.getNumber}>Next</button>
                            <button>Submit</button>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default NumbersApp;