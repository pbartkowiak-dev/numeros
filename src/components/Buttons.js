import React from 'react';

class Buttons extends React.Component {
    render() {
        return (
            <section className="buttons">
            <div className="buttons__container numbers-app__section-container">
                <button className="buttons__container__button" onClick={this.props.showAnswer}>Answer</button>
                <button className="buttons__container__button " onClick={this.props.createNumber}>Next</button>
                <button className="buttons__container__button buttons__container__button--success" onClick={this.props.submitAnswer}>Submit</button>
            </div>
        </section>
        );
    }
}

export default Buttons;