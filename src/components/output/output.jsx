import React from 'react';

class Output extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: this.props.output,
    }
  }

  copy() {
    let copyText = document.getElementById("output");
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }

  render() {
    console.log(this.props)
    return (
      <div className="output">
        <label>Output:
          <br />
          <textarea id="output" value={this.props.output} onChange={this.props.update('output')}/>
        </label>

        <br/>

        <button onClick={this.copy}>Copy</button>
        <button onClick={this.props.clear}>Clear</button>
      </div>
    )
  }

}

export default Output;