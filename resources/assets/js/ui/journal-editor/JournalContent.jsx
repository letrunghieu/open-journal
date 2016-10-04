import React from 'react';
import TextArea from 'react-textarea-autosize';

class JournalContent extends React.Component {

    constructor(props) {
        super(props);

        this._onContentChanged = this._onContentChanged.bind(this);
    }

    render() {
        let {
            content
        } = this.props;

        return (
            <div className="journal-content">
                <TextArea
                    value={content}
                    useCacheForDOMMeasurements
                    onChange={this._onContentChanged}
                    placeholder="Write somethings ..."
                />
            </div>
        );
    }

    _onContentChanged(event) {
        if (this.props.onChanged) {
            this.props.onChanged(event.target.value);
        }
    }
}

JournalContent.PropTypes = {
    content: React.PropTypes.string.isRequired,
    onChanged: React.PropTypes.func
};

export default JournalContent;
