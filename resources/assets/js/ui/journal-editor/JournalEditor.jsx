import React from 'react';
import moment from 'moment';

import JournalDate from './JournalDate';
import JournalTitle from './JournalTitle';
import JournalContent from './JournalContent';

class JournalEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            timestamp: (Date.now()),
            title: (moment().format('L')),
            content: ''
        };

        this._onDateChanged = this._onDateChanged.bind(this);
        this._onTitleChanged = this._onTitleChanged.bind(this);
        this._onContentChanged = this._onContentChanged.bind(this);
    }

    render() {
        let {
            timestamp,
            title,
            content
        } = this.state;

        return (
            <div className="journal-editor">
                <div className="journal-header">
                    <JournalDate timestamp={timestamp} onDateChanged={this._onDateChanged}/>
                    <JournalTitle title={title} onChanged={this._onTitleChanged}/>
                    <JournalContent content={content} onChanged={this._onContentChanged}/>
                </div>
            </div>
        );
    }

    _onDateChanged(timestamp) {
        this.setState({
            timestamp: timestamp
        });
    }

    _onTitleChanged(title) {
        this.setState({
            title: title
        });
    }

    _onContentChanged(content) {
        this.setState({
            content: content
        });
    }
}

export default JournalEditor;