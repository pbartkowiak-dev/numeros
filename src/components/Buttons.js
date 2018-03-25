import React from 'react';

class Buttons extends React.Component {
    render() {
        return (
            <section className="buttons">
            <div className="buttons__container numbers-app__section-container">
                <button>Answer</button>
                <button onClick={this.props.createNumber}>Next</button>
                <button onClick={this.props.submitAnswer}>Submit</button>
            </div>
        </section>
        );
    }
}

export default Buttons;