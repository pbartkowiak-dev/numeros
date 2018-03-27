import React from 'react';

class TypeNumber extends React.Component {
    render() {
        return (
            <section className="type-number">
                <h2>Type the number here</h2>
                <div className="numbers-app__section-container">
                    <textarea
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                        className="number-present__input"
                        type="text"
                        value={this.props.currentAnswer}
                        onChange={this.props.typeAnswer}    
                    >
                    </textarea>
                </div>
            </section>
        );
    }
}

export default TypeNumber;