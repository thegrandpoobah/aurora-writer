import React from 'react';
import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/mode/markdown';
import 'brace/theme/github';

const Editor = (props) => {
  return (<AceEditor
    mode="markdown"
    theme="github"
    onChange={props.onChange}
    value={props.contents}
    name="UNIQUE_ID_OF_DIV"
    editorProps={{$blockScrolling: true}}
  />)
}

export default Editor
