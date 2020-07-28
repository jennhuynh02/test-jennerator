import React from 'react';

class HashInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      capitalized: false,
      lowercase: false,
      integer: false,
      specialized: false,
      length: 0,
    }
    this.check = this.check.bind(this);
    this.update = this.update.bind(this);
    this.createHashInput = this.createHashInput.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  check(field) {
    if (field) {
      this.setState({ [field]: !this.state[field] });
    }
  }

  createHashInput() {
    const { updateOutput } = this.props;
    // updateOutput(string(this.state.length));
  }

  render() {
    const characters = ["capitalized", "lowercase", "integer", "specialized"];
    return (
      <div className="input">

        <div className="input-section">
          Character Types To Include:
          <div className="character-checkboxes">
            {characters.map(type => (
              <div key={type}>
                <span className="checkbox-label">{type[0].toUpperCase() + type.slice(1)}</span>
                <input type="checkbox" onChange={(e) => this.check(type)} />
              </div>
            ))}
          </div>
        </div>

        <div className="input-section">
          Length:
            <br />
          <input name="length" value={this.state.length} onChange={this.update('length')} />
        </div>

        <button className="generate-button" onClick={this.createHashInput}>Generate Test Case!</button>

      </div>
    )
  }
}

export default HashInput;