import React from 'react';

import JournalDate from './JournalDate';

class JournalEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            timestamp: (Date.now())
        }
    }

    render() {
        let {
            timestamp
        } = this.state;

        return (
            <div className="journal-editor">
                <div className="journal-header">
                    <JournalDate timestamp={timestamp}/>
                </div>
            </div>
        );
    }
}

export default JournalEditor;