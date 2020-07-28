import React from 'react';
import StringInput from "../input/stringInput";

class InputType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'string',
    }

    this.update = this.update.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  outputType() {
    const { updateOutput } = this.props;
    if (this.state.type === "string") {
      return <StringInput updateOutput={updateOutput} />
    }
  }

  render() {

    return(
      <div className="input">
        <div className="input-section">
          Input Type:
            <br />
          <select name="type" onChange={this.update('type')}>
            <option value="string">String</option>
            <option value="array">Array</option>
            <option value="hash">Hash</option>
            <option value="integer">Integer</option>
          </select>
        </div>

        {this.outputType()}

      </div>
    )
  }
}

export default InputType;