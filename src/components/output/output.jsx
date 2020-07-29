import React from 'react';

class Output extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  copy() {
    let copyText = document.getElementById("output");
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }

  render() {

    return (
      <div className="output">
        <label>Test Case Output
          <br />
          <textarea id="output" value={this.props.output} onChange={this.props.updateOutput('output')}/>
        </label>

        <br/>

        <button id="copy" onClick={this.copy}>Copy</button>
        <button id="clear" onClick={this.props.clear}>Clear</button>
      </div>
    )
  }

}

export default Output;