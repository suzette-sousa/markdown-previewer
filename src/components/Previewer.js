import React from 'react';
import marked from 'marked';

class Previewer extends React.Component {
  render() {
    const inputMarkdown = '# Markdown';
    const convertMarkdown = marked(inputMarkdown);
    return (
      <div id="preview">
        <div>{inputMarkdown}</div>
        <div>{convertMarkdown}</div>
        <div dangerouslySetInnerHTML={{__html: convertMarkdown}}></div>
      </div>
    )
  }
}

export default Previewer;
