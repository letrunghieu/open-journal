import React from 'react';
import TextArea from 'react-textarea-autosize'

class JournalTitle extends React.Component {
    constructor(props) {
        super(props);

        this._onTitleChanged = this._onTitleChanged.bind(this);
    }

    render() {
        let {title} = this.props;
        return (
            <div className="journal-title">
                <TextArea value={title} onChange={this._onTitleChanged} placeholder="A short title ..."/>
            </div>
        );
    }

    _onTitleChanged(event) {
        if (this.props.onChanged) {
            this.props.onChanged(event.target.value);
        }
    }
}

JournalTitle.PropTypes = {
    title: React.PropTypes.string.isRequired,
    onChanged: React.PropTypes.func
};

export  default JournalTitle;