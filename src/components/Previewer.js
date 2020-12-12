import React from 'react';

class Previewer extends React.Component {
  render() {
    return (
      <div id="preview">
        <div className="padd-2" dangerouslySetInnerHTML={{__html: this.props.convertedmarkdown}}></div>
      </div>
    )
  }
}

export default Previewer;
