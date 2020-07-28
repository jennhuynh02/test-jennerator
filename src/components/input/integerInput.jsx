import React from 'react';

class IntegerInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "integer",
      length: 0,
    }
    this.check = this.check.bind(this);
    this.update = this.update.bind(this);
    this.createIntegerInput = this.createIntegerInput.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  check(field) {
    if (field) {
      this.setState({ [field]: !this.state[field] });
    }
  }

  createIntegerInput() {
    const { updateOutput } = this.props;
    // updateOutput(string(this.state.length));
  }

  render() {
    const types = ["integer", "float"];
    console.log(this.state)
    return (
      <div className="input">

        <div className="input-section">
          Character Types To Include:
          <form className="character-checkboxes" onChange={(e) => this.check('type')}>
            {types.map(type => (
              <div key={type}>
                <span className="checkbox-label">{type[0].toUpperCase() + type.slice(1)}</span>
                <input type="radio" value={type}/>
              </div>
            ))}
          </form>
        </div>

        <div className="input-section">
          Length:
            <br />
          <input name="length" value={this.state.length} onChange={this.update('length')} />
        </div>

        <button className="generate-button" onClick={this.createIntegerInput}>Generate Test Case!</button>

      </div>
    )
  }
}

export default IntegerInput;