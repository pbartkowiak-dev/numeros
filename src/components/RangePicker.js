import React from 'react';

class RangePicker extends React.Component {
    render() {
        return (
            <section className="range-picker">
            <h2>Select Range</h2>
            <div className="numbers-app__section-container">
                <div className="range-picker__container">
                    <div className="range-picker__input-container">
                        <p>Min range</p>
                        <input 
                            type="text" 
                            className="range-picker__input--range" 
                            placeholder="i.e. 10"
                            value={this.props.minRange}
                            onChange={this.props.setMinRange} />
                    </div>
                    <div className="range-picker__input-container">
                        <p>Max range</p>
                        <input 
                            type="text" 
                            className="range-picker__input--range" 
                            placeholder="i.e. 100"
                            value={this.props.maxRange}
                            onChange={this.props.setMaxRange} />
                    </div>
                </div>
                <div className="range-picker__default-ranges">
                    {
                        this.props.deafaultRanges.map((rangeObj, i) => {
                            return (
                                <span className="range-picker__range" key={i} onClick={() => {this.props.setRange(rangeObj)}}>
                                    {
                                        rangeObj.minRange !== '' && rangeObj.maxRange !== '' ? `${rangeObj.minRange}-${rangeObj.maxRange}` : 'Clear'
                                    }                                
                                </span>
                            );
                        })
                    }
                </div>
            </div>
        </section>
        );
    }
}

export default RangePicker;