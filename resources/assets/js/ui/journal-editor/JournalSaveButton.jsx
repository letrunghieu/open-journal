import React from 'react';
import moment from 'moment';

const SAVING_INTERVAL = 1000; // 5 minutes (5 * 60 * 1000ms)

class JournalSaveButton extends React.Component {
    constructor(props) {
        super(props);

        this._interval = null;

        this.state = {
            lastSaved: props.lastSaved || null,
            lastApiCalled: null,
            isCallingApi: false,
        }
    }

    componentDidMount() {
        this._interval = setInterval(() => {
            this.forceUpdate();
        }, SAVING_INTERVAL);
    }

    componentWillUnmount() {
        if (this._interval) {
            clearInterval(this._interval);
        }
    }

    render() {
        console.log(Date.now());
        let disabled = false;
        let savingText = this._getSavingText();

        return (
            <div className="journal-save-button">
                <span>{savingText}</span>
                <button className="btn btn-primary" disabled={disabled}>Save</button>
            </div>
        );
    }

    _getSavingText() {
        if (!this.state.lastSaved) {
            return "Not saved";
        } else {
            return "Saved " + moment(this.state.lastSaved).toNow();
        }
    }
}

JournalSaveButton.PropTypes = {
    lastSaved: React.PropTypes.number
};

export default JournalSaveButton;