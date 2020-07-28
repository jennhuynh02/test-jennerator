import React from 'react';
import integer from "../../util/integer";
class IntegerInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "integer",
      minimum: 0,
      maximum: 0,
    }
    this.typeCheck = this.typeCheck.bind(this);
    this.update = this.update.bind(this);
    this.createIntegerInput = this.createIntegerInput.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  typeCheck(e) {
    if (this.state.type === "integer") {
      this.setState({ type: "float" });
    } else {
      this.setState({ type: "integer" });
    }
  }

  createIntegerInput() {
    const { updateOutput } = this.props;
    updateOutput(integer(this.state.minimum, this.state.maximum, this.state.type));
  }

  render() {
    console.log(this.state)
    return (
      <div className="input">

        <div className="input-section">
          Character Types To Include:
          <form className="character-checkboxes" onChange={() => this.typeCheck()}>
              <div>
                <span className="checkbox-label">Integer</span>
                <input type="radio" name="type" value="integer" defaultChecked/>
              </div>
              <div>
                <span className="checkbox-label">Float</span>
                <input type="radio" name="type" value="float"/>
              </div>
          </form>
        </div>
        
        <div className="input-section">
          Length:
          <span className="checkbox-label">Min:</span>
          <input name="minimum" value={this.state.minimum} onChange={this.update('minimum')} />

          <span className="checkbox-label">Max:</span>
          <input name="maximum" value={this.state.maximum} onChange={this.update('maximum')} />
        </div>

        <button className="generate-button" onClick={this.createIntegerInput}>Generate Test Case!</button>

      </div>
    )
  }
}

export default IntegerInput;