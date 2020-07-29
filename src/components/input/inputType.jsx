import React from 'react';
import StringInput from "../input/stringInput";
import IntegerInput from "../input/integerInput";
import ArrayInput from "../input/arrayInput";
import HashInput from "../input/hashInput";

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
    } else if (this.state.type === "integer") {
      return <IntegerInput updateOutput={updateOutput} />
    } else if (this.state.type === "array") {
      return <ArrayInput updateOutput={updateOutput} />
    } else if (this.state.type === "hash") {
      return <HashInput updateOutput={updateOutput} />
    }
  }

  render() {

    return(
      <div className="input">
        <div className="input-section">
          <span>Data Type:</span>
          <select id="type" name="type" onChange={this.update('type')} value={this.state.type}>
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