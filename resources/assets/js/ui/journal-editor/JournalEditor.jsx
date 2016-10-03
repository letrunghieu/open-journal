import React from 'react';

import JournalDate from './JournalDate';

class JournalEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            timestamp: (Date.now())
        };

        this._onDateChanged = this._onDateChanged.bind(this);
    }

    render() {
        let {
            timestamp
        } = this.state;

        return (
            <div className="journal-editor">
                <div className="journal-header">
                    <JournalDate timestamp={timestamp} onDateChanged={this._onDateChanged}/>
                </div>
            </div>
        );
    }

    _onDateChanged(timestamp) {
        this.setState({
            timestamp: timestamp
        });
    }
}

export default JournalEditor;