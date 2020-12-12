import React from 'react';

class Editor extends React.Component {
  render() {
    return (
      <div id="editor" className="padd-2">
        <div className="editor-head"><strong className="txt-upp">• Editeur markdown •</strong><em>Editer le code ci-dessous et visualiser le code html correspondant</em></div>
        <textarea className="padd-2" onChange={this.props.handleChange} value={this.props.markdown} />
      </div>
    )
  }
}

export default Editor;
