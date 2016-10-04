import React from 'react';
import moment from 'moment';

class JournalDate extends React.Component {
    constructor(props) {
        super(props);

        this._goToNextDate = this._goToNextDate.bind(this);
        this._goToPrevDate = this._goToPrevDate.bind(this);
        this._dateObj = null;
    }

    render() {
        let dateObj = moment(this.props.timestamp).startOf('date');
        let dateStr = dateObj.format("L");

        this._dateObj = dateObj;

        return (
            <div className="journal-date">
                <i className="fa fa-chevron-left control prev" onClick={this._goToPrevDate}/>
                <span className="display-value" title="Click the next/prev arrow buttons to change the date">{dateStr}</span>
                <i className="fa fa-chevron-right control next" onClick={this._goToNextDate} />
            </div>
        );
    }

    _goToPrevDate() {
        this._dateObj.subtract(1, 'days');

        if (this.props.onDateChanged) {
            this.props.onDateChanged(this._dateObj.valueOf());
        }
    }

    _goToNextDate() {
        this._dateObj.add(1, 'days');

        if (this.props.onDateChanged) {
            this.props.onDateChanged(this._dateObj.valueOf());
        }
    }
}

JournalDate.propTypes = {
    timestamp: React.PropTypes.number.isRequired,
    onDateChanged: React.PropTypes.func
};

export default JournalDate;