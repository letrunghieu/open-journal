/**
 * Created by Hieu Le on 10/3/2016.
 */

import React from 'react';
import ReactDom from 'react-dom';
import JournalEditor from './journal-editor/JournalEditor';

let journalContainer = document.getElementById('journal-editor');
if (journalContainer) {
    ReactDom.render(<JournalEditor/>, journalContainer);
}

